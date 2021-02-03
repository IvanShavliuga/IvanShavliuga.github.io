//---------------------------------------------------------------------------
#include <vcl.h>
#pragma hdrstop
#include <mmsystem.hpp>
#include "main.h"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma link "CGAUGES"
#pragma resource "*.dfm"
TFormMain *FormMain;
//---------------------------------------------------------------------------
__fastcall TFormMain::TFormMain(TComponent* Owner)
    : TForm(Owner)
{
    //Application->OnIdle = IdleLoop;
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
    col=0;
    Level=0;
    Sound=true;
    Musik=true;
    Pause=false;
    randomize();
    BUFFER.NewBoard(Level);
    if(Res.Load("results.txt")==false)
       Res.Create(10);
    Res.Print(ListBox1);
    Res.Save("results.txt");
    
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
    Panel3->Visible=true;
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
        if(BUFFER.bonus[i][j]>=6)
           glBindTexture(GL_TEXTURE_2D, bon[BUFFER.bonus[i][j]-1][0]);
        if(BUFFER.bonus[i][j]>=700)
           glBindTexture(GL_TEXTURE_2D, twocolor[BUFFER.bonus[i][j]-700]);
        if(BUFFER.bonus[i][j]==8)
           glBindTexture(GL_TEXTURE_2D, bon[6][0]);

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
   Panel3->Visible=false;
}
//---------------------------------------------------------------------------
void __fastcall TFormMain::FormPaint(TObject *Sender)
{
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    DrawObjects();
    SwapBuffers(hdc);
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
     string.sprintf("images\\ball%d.bmp",k);
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
    for(int p=0; p<=6; p++)
    {
    for(int k=0; k<=6; k++)
    {
     string.sprintf("images\\bonus%d%d.bmp",p+1,k);
     if(FileExists(string)==true)
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
    for(int k=0; k<=20; k++)
    {
     string.sprintf("images\\color%d.bmp",k);
     if(FileExists(string)==true)
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
     glGenTextures(1, &twocolor[k]);
     glBindTexture(GL_TEXTURE_2D, twocolor[k]);
     glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP);
     glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP);
     glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
     glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
     glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, 64, 64, 0, GL_RGBA, GL_UNSIGNED_BYTE, bits);
     glEnable(GL_TEXTURE_2D);
     glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_DECAL);
    }
}

void __fastcall TFormMain::Timer1Timer(TObject *Sender)
{
        Angle+=15;
        if(Angle>=360) Angle=0;
        FormPaint(Sender);

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
            case 3:
              Hint="Сдвиг влево";
              break;
            case 4:
              Hint="Сдвиг вправо";
              break;      
            case 5:
              Hint="Заморозка";
              break;
            case 6:
              Hint="Бомба";
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
      int t,b;
      if(Canvas->Pixels[X][Y]!=clBlack&&Panel2->Visible==false
         &&Button==mbLeft)
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
             if(Sound==true) sndPlaySound("sounds\\Удар.wav", SND_SYNC);
             /*romb[col].x=X/45;
             romb[col].y=9-Y/45;
             col++;
             if((romb[col-1].x==romb[0].x-1&&romb[col-1].y==romb[0].y-1)||
             (romb[col-1].x==romb[0].x+1&&romb[col-1].y==romb[0].y-1)||
             (romb[col-1].x==romb[0].x-1&&romb[col-1].y==romb[0].y+1)||
             (romb[col-1].x==romb[0].x+1&&romb[col-1].y==romb[0].y+1))
          {
            CGauge1->Progress-=col*2;
            if(Sound==true) sndPlaySound("sounds\\взрыв.Snd", SND_SYNC);
            for(int i=0; i<col; i++)
            {
               switch(BUFFER.bonus[romb[i].x][romb[i].y])
               {
                  case 1:
                    Score+=2;
                    if(Sound==true)
                       sndPlaySound("sounds\\bonus.wav", SND_SYNC);
                    break;
                  case 2:
                    Score+=3;
                    if(Sound==true)
                       sndPlaySound("sounds\\bonus.wav", SND_SYNC);
                    break;
                  case 5:
                    Timer3->Enabled=true;
                    Timer2->Enabled=false;
                    Label23->Visible=true;
                    if(Sound==true)
                       sndPlaySound("sounds\\bonus.wav", SND_SYNC);
                    break;
                  default:
                    Score++;
               }
               BUFFER.Obval(romb[i]);

            }
          }
          col=0;
            }  */
          else
          {
            select.x=X/45;
            select.y=9-Y/45;
            if(BUFFER.bonus[select.x][select.y]==3&&BUFFER.color[select.x-1][select.y]==7)
            {
               BUFFER.bonus[select.x][select.y]=0;
               Score+=5;
               if(Sound==true) sndPlaySound("sounds\\bonus.wav", SND_SYNC);
               t=select.y;
               while(BUFFER.color[select.x-1][t]==7)
                 t--;
               BUFFER.color[select.x-1][t+1]=BUFFER.color[select.x][select.y];
               BUFFER.color[select.x][select.y]=7;
               BUFFER.Obval(select);
               Timer1->Enabled=false;

            }
            if(BUFFER.bonus[select.x][select.y]==4&&BUFFER.color[select.x+1][select.y]==7)
            {
               BUFFER.bonus[select.x][select.y]=0;
               Score+=5;
               if(Sound==true) sndPlaySound("sounds\\bonus.wav", SND_SYNC);
               t=select.y;
               while(BUFFER.color[select.x+1][t]==7)
                 t--;
               BUFFER.color[select.x+1][t+1]=BUFFER.color[select.x][select.y];
               BUFFER.color[select.x][select.y]=7;
               BUFFER.Obval(select);
               Angle=0;
               Timer1->Enabled=false;

            }
            if(BUFFER.bonus[select.x][select.y]==6)
            {
               BUFFER.bonus[select.x][select.y]=0;
               Score+=5;
               if(Sound==true) sndPlaySound("sounds\\bonus.wav", SND_SYNC);
               BUFFER.Obval(select);
               Timer1->Enabled=false;

            }

          }
          
          Label2->Caption=str.sprintf("%d",Score);
          if(BUFFER.PlayStop()==false)
          {
             AnsiString str;
             Level++;
             Timer2->Interval-=500;
             Timer2->Enabled=false;
             Panel2->Caption=str.sprintf("Уровень %d",Level+1);
             Panel2->Visible=true;
             Timer4->Enabled=true;
             str.sprintf("%d",Level+1);
             Label6->Caption=str;
          }
      }
      if(Panel2->Visible==false&&Button==mbRight)
      {
         BUFFER.select[select.x][select.y]=false;
         Angle=0;
         Timer1->Enabled=false;
      }
       FormPaint(Sender);
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
           AnsiString str;
           Panel2->Caption="Игра окончена";
           Panel2->Visible=true;
           Level=0;
           Score=0;
           str.sprintf("%d",Score);
           Label2->Caption=str;
           str.sprintf("%d",Level+1);
           Label6->Caption=str;
        }
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Panel2Click(TObject *Sender)
{
        Panel2->Visible=false;
        CGauge1->Progress=0;
        Timer2->Enabled=true;
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Label10Click(TObject *Sender)
{
        Close();                
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Label3Click(TObject *Sender)
{
        Timer2->Enabled=!Timer2->Enabled;
        if(Timer2->Enabled==true)
          Label3->Caption="Пауза";
        else
          Label3->Caption="Продолжить";
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Label13Click(TObject *Sender)
{
        Panel4->Visible=false;
        Timer2->Enabled=true;
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Label11Click(TObject *Sender)
{
        Timer2->Enabled=false;
        Panel4->Visible=true;        
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Label8Click(TObject *Sender)
{
        Panel6->Visible=true;
        Timer2->Enabled=false;
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Label14Click(TObject *Sender)
{
        Panel6->Visible=false;
        Timer2->Enabled=true;
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Timer3Timer(TObject *Sender)
{
         Timer2->Enabled=true;
         Label23->Visible=false;
         Timer3->Enabled=false;
         
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Label17Click(TObject *Sender)
{
        Panel5->Visible=false;
        Timer2->Enabled=true;
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Label16Click(TObject *Sender)
{
        Panel5->Visible=false;
        Timer2->Enabled=true;
        Sound=CheckBox3->Checked;
        Musik=CheckBox3->Checked;
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Label7Click(TObject *Sender)
{
        Panel5->Visible=true;
        Timer2->Enabled=false;

}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Label5Click(TObject *Sender)
{
        Level=0;
        BUFFER.NewBoard(Level);
        Panel2->Visible=false;
        CGauge1->Progress=0;
        FormPaint(Sender);
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Button1Click(TObject *Sender)
{
        int i,p;
        AnsiString t,q;
        ListBox1->Clear();
        for(i=0; i<7; i++)
        {
           for(p=0; p<21; p++)
           {
             if(BUFFER.GetColor(p+700,i)==true)
                q="true";
             else
                q="false";
             ListBox1->Items->Add(t.sprintf("%03d  %03d %s",i,p,q));
           }
           ListBox1->Items->Add("-----");
        }
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Timer4Timer(TObject *Sender)
{
       glRotatef(30, 1.0, 0.0, 0.0);
       Timer4->Tag++;
       if(Timer4->Tag==12)
       {
           Timer4->Tag=0;
           Timer4->Enabled=false;
       }
       if(Timer4->Tag==9)
         BUFFER.NewBoard(Level);
       FormPaint(Sender);
}
//---------------------------------------------------------------------------



