//---------------------------------------------------------------------------
#include <vcl.h>
#pragma hdrstop
#include <mmsystem.hpp>
#include "GlSkel.h"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma link "CGAUGES"
#pragma resource "*.dfm"
TFormMain *FormMain;
//---------------------------------------------------------------------------
__fastcall TFormMain::TFormMain(TComponent* Owner)
    : TForm(Owner)
{
    Application->OnIdle = IdleLoop;
    size = 50.0f;
}
//---------------------------------------------------------------------------
void __fastcall TFormMain::IdleLoop(TObject*, bool& done)
{
    done = false;
    RenderGLScene();
    SwapBuffers(hdc);
}
//---------------------------------------------------------------------------
void __fastcall TFormMain::FormCreate(TObject *Sender)
{
    hdc = GetDC(Handle);
    SetPixelFormatDescriptor();
    hrc = wglCreateContext(hdc);
    if(hrc == NULL)
    	ShowMessage(":-)~ hrc == NULL");
    if(wglMakeCurrent(hdc, hrc) == false)
    	ShowMessage("Could not MakeCurrent");
    w = 507;
    h = ClientHeight;
    glEnable(GL_DEPTH_TEST);
    glEnable(GL_CULL_FACE);

    glClearColor(0.0f, 0.0f, 0.0f, 1.0f);

    SetupLighting();
    SetupTextures();
    CreateInpriseCorporateLogo();
    Angle=5;
    Score=0;
    Level=1;
    randomize();
    BUFFER.NewBoard(Level);
    Res.Create(10);
    Res.Print(ListBox1);
}
//---------------------------------------------------------------------------
void __fastcall TFormMain::SetPixelFormatDescriptor()
{
    PIXELFORMATDESCRIPTOR pfd = {
    	sizeof(PIXELFORMATDESCRIPTOR),
        1,
        PFD_DRAW_TO_WINDOW | PFD_SUPPORT_OPENGL | PFD_DOUBLEBUFFER,
        PFD_TYPE_RGBA,
        24,
        0,0,0,0,0,0,
        0,0,
        0,0,0,0,0,
        32,
        0,
        0,
        PFD_MAIN_PLANE,
        0,
        0,0,
    };
    PixelFormat = ChoosePixelFormat(hdc, &pfd);
    SetPixelFormat(hdc, PixelFormat, &pfd);
}
//---------------------------------------------------------------------------
void __fastcall TFormMain::RenderGLScene()
{
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    DrawObjects();
    
}
//---------------------------------------------------------------------------
void __fastcall TFormMain::DrawObjects()
{
    int  i,j;
    ProgressBar1->Position=0;
    for( i=0; i<10;i++)
    {
      for( j=0; j<10;j++)
      {
      if(BUFFER.color[i][j]!=7)
      {
        glPushMatrix();
        glBindTexture(GL_TEXTURE_2D, texture[BUFFER.color[i][j]]);
        if(BUFFER.bonus[i][j]>=1)
           glBindTexture(GL_TEXTURE_2D, bon[BUFFER.bonus[i][j]-1][BUFFER.color[i][j]]);
        glTranslatef(i*9-45,j*9-40,0);
        glRotatef(-115, 1.0, 0.0, 0.0);
        if(BUFFER.select[i][j]==true)
          glRotatef(Angle, 0.0, 0.0, 1.0);
        glCallList(startoflist + BUFFER.color[i][j]);
        glPopMatrix();
      }
      ProgressBar1->Position++;
      }

    }


}
//---------------------------------------------------------------------------
void __fastcall TFormMain::FormPaint(TObject *Sender)
{
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    DrawObjects();
}
//---------------------------------------------------------------------------
void __fastcall TFormMain::FormDestroy(TObject *Sender)
{
    gluDeleteQuadric(BlueSphere);
    wglMakeCurrent(NULL, NULL);
    wglDeleteContext(hrc);
    delete bitmap;
    
}
//---------------------------------------------------------------------------
void __fastcall TFormMain::CreateInpriseCorporateLogo()
{
    startoflist = glGenLists(7);
    DrawBlueSphere();

}
//---------------------------------------------------------------------------
void __fastcall TFormMain::DrawBlueSphere()
{
    BlueSphere = gluNewQuadric();
    for(int i=0; i<=6;i++)
    {
      glBindTexture(GL_TEXTURE_2D, texture[i]);
      gluQuadricTexture(BlueSphere, GL_TRUE);
      glNewList(startoflist + i, GL_COMPILE);
        gluSphere(BlueSphere, 4, 15, 15);
      glEndList();
    }
}
//---------------------------------------------------------------------------
void __fastcall TFormMain::SetupLighting()
{
    GLfloat MaterialAmbient[] = {0.5, 0.5, 0.5, 1.0};
    GLfloat MaterialDiffuse[] = {1.0, 1.0, 1.0, 1.0};
    GLfloat MaterialSpecular[] = {1.0, 1.0, 1.0, 1.0};
    GLfloat MaterialShininess[] = {50.0};
    GLfloat AmbientLightPosition[] = {0.5, 1.0, 1.0, 0.0};
    GLfloat LightAmbient[] = {0.5, 0.5, 0.5, 1.0};

    glMaterialfv(GL_FRONT, GL_AMBIENT, MaterialAmbient);
    glMaterialfv(GL_FRONT, GL_DIFFUSE, MaterialDiffuse);
    glMaterialfv(GL_FRONT, GL_SPECULAR, MaterialSpecular);
    glMaterialfv(GL_FRONT, GL_SHININESS, MaterialShininess);
    glLightfv(GL_LIGHT0, GL_POSITION, AmbientLightPosition);
    glLightModelfv(GL_LIGHT_MODEL_AMBIENT, LightAmbient);

    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);
    glEnable(GL_COLOR_MATERIAL);
    glColorMaterial(GL_FRONT, GL_AMBIENT_AND_DIFFUSE);
    glShadeModel(GL_SMOOTH);
}
//---------------------------------------------------------------------------
void __fastcall TFormMain::SetupTextures()
{
    GLubyte bits[64][64][4];
    AnsiString string;
    bitmap = new Graphics::TBitmap;
    for(int k=0; k<=6; k++)
    {
     string.sprintf("data\\ball%d.bmp",k);
     bitmap->LoadFromFile(string);
     for(int i = 0; i < 64; i++)
     {
    	for(int j = 0; j < 64; j++)
        {
            bits[i][j][0]= (GLbyte)GetRValue(bitmap->Canvas->Pixels[i][j]);
            bits[i][j][1]= (GLbyte)GetGValue(bitmap->Canvas->Pixels[i][j]);
            bits[i][j][2]= (GLbyte)GetBValue(bitmap->Canvas->Pixels[i][j]);
            bits[i][j][3]= (GLbyte)255;
        }
     }
     glPixelStorei(GL_UNPACK_ALIGNMENT, 4);
     glGenTextures(1, &texture[k]);
     glBindTexture(GL_TEXTURE_2D, texture[k]);
     glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP);
     glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP);
     glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
     glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
     glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, 64, 64, 0, GL_RGBA, GL_UNSIGNED_BYTE, bits);
     
    }
    for(int p=0; p<5; p++)
    {
    for(int k=0; k<=6; k++)
    {
     string.sprintf("data\\bonus%d%d.bmp",p+1,k);
     bitmap->LoadFromFile(string);
     for(int i = 0; i < 64; i++)
     {
    	for(int j = 0; j < 64; j++)
        {
            bits[i][j][0]= (GLbyte)GetRValue(bitmap->Canvas->Pixels[i][j]);
            bits[i][j][1]= (GLbyte)GetGValue(bitmap->Canvas->Pixels[i][j]);
            bits[i][j][2]= (GLbyte)GetBValue(bitmap->Canvas->Pixels[i][j]);
            bits[i][j][3]= (GLbyte)255;
        }
     }
     glPixelStorei(GL_UNPACK_ALIGNMENT, 4);
     glGenTextures(1, &bon[p][k]);
     glBindTexture(GL_TEXTURE_2D, bon[p][k]);
     glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP);
     glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP);
     glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
     glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
     glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, 64, 64, 0, GL_RGBA, GL_UNSIGNED_BYTE, bits);
     glEnable(GL_TEXTURE_2D);
     glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_DECAL);
    }
    }
}

void __fastcall TFormMain::Timer1Timer(TObject *Sender)
{
        Angle+=15;
        if(Angle>=360) Angle=0;
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::FormMouseMove(TObject *Sender,
      TShiftState Shift, int X, int Y)
{
        if(Canvas->Pixels[X][Y]!=clBlack)
        {
          Cursor=crHandPoint;
          switch(BUFFER.bonus[X/45][9-Y/45])
          {
            case 1:
              Hint="Удвоение очков";
              break;
            case 2:
              Hint="Утроение очков";
              break;
            default:
              Hint="";
              break;
          }
        }
        else
          Cursor=crArrow;

}
//---------------------------------------------------------------------------

void __fastcall TFormMain::FormMouseDown(TObject *Sender,
      TMouseButton Button, TShiftState Shift, int X, int Y)
{
      AnsiString str;
      int b;
      if(Canvas->Pixels[X][Y]!=clBlack&&Panel2->Visible==false)
      {
          for(int i=0; i<10; i++)
            for(int j=0; j<10; j++)
            {
              BUFFER.select[i][j]=false;

            }
          Timer1->Enabled=!Timer1->Enabled;
          BUFFER.select[X/45][9-Y/45]=!BUFFER.select[X/45][9-Y/45];
          if(!Timer1->Enabled)
          {
             b=BUFFER.color[X/45][9-Y/45];
             BUFFER.color[X/45][9-Y/45]=BUFFER.color[select.x][select.y];
             BUFFER.color[select.x][select.y]=b;
             b=BUFFER.bonus[X/45][9-Y/45];
             BUFFER.bonus[X/45][9-Y/45]=BUFFER.bonus[select.x][select.y];
             BUFFER.bonus[select.x][select.y]=b;
             Angle=0;
             sndPlaySound("teleport.wav", SND_SYNC);

          }
          else
          {
            select.x=X/45;
            select.y=9-Y/45;

          }
          b=BUFFER.Prov();
          if(b>0)
          {
            CGauge1->Progress-=b*5;
            sndPlaySound("Blip.wav", SND_SYNC);
          }
          Score+=b;
          Label2->Caption=str.sprintf("%d",Score);
          if(BUFFER.PlayStop()==false)
          {
             Level++;
             Panel2->Caption=str.sprintf("Уровень %d",Level);
             Panel2->Visible=true;
          }
      }
}
//---------------------------------------------------------------------------
void __fastcall TFormMain::FormResize(TObject *Sender)
{

    GLfloat nRange = 45.0;

    w = 507;
    h = ClientHeight;

    if(h == 0)
    	h = 1;

    glViewport(0, 0, w, h);

    glMatrixMode(GL_PROJECTION );

    glLoadIdentity();

    if (w <= h)
        glOrtho (-nRange, nRange, -nRange*h/w, nRange*h/w, -nRange, nRange);
    else
	glOrtho (-nRange*w/h, nRange*w/h, -nRange, nRange, -nRange, nRange);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Timer2Timer(TObject *Sender)
{
        CGauge1->Progress+=5;
        if(CGauge1->Progress==100)
        {
           Panel2->Caption="Игра окончена";
           Panel2->Visible=true;
        }
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Panel2Click(TObject *Sender)
{
        BUFFER.NewBoard(Level);
        Panel2->Visible=false;
        CGauge1->Progress=0;  
}
//---------------------------------------------------------------------------

