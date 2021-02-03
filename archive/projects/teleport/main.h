//---------------------------------------------------------------------------
#ifndef mainH
#define mainH
//---------------------------------------------------------------------------
#include <Classes.hpp>
#include <Controls.hpp>
#include <StdCtrls.hpp>
#include <Forms.hpp>
#include <ExtCtrls.hpp>
#include <Buttons.hpp>
#include <Graphics.hpp>
#include <Grids.hpp>
#include "CGAUGES.h"
#include <ComCtrls.hpp>
#include <gl\gl.h>
#include <gl\glu.h>
typedef struct TBOARD {
  int color[10][10];
  int bonus[10][10];
  bool select[10][10];
  TPoint points[100];
  int count;
  NewBoard(int maxbonus)
  {
    int p,a[21],b[21];
    if(maxbonus>10) maxbonus=10;
    for(int i=0; i<10; i++)
      for(int j=0;j<10; j++)
      {
        color[i][j]=random(7);
        bonus[i][j]=0;
        select[i][j]=false;

      }
    if(maxbonus==0) goto end;
    for(p=0; p<10; p++)
    {
     err:
      a[p]=random(9)+1;
      b[p]=random(9)+1;

      for(int i=0; i<p; i++)
         if(a[i]==a[p]&&b[i]==b[p]) goto err;
      bonus[a[p]][b[p]]=random(maxbonus)+1;
      if( bonus[a[p]][b[p]]==7)
         bonus[a[p]][b[p]]=700+random(21);
    }
  end:
    color[0][0]=7;
    bonus[0][0]=0;
    select[0][0]=false;
    color[9][0]=7;
    bonus[9][0]=0;
    select[9][0]=false;
    color[0][9]=7;
    bonus[0][9]=0;
    select[0][9]=false;
    color[9][9]=7;
    bonus[9][9]=0;
    select[9][9]=false;
  }
  bool GetColor(int bon,int col)
  {
     bon-=700;
     // Красный

     if((bon==0 ||bon==1 ||bon==7 ||
        bon==9 ||bon==14||bon==17)&&
        col==0)
        return true;
     // Зеленый
     if((bon==1 ||bon==2 ||bon==8 ||
        bon==10||bon==15||bon==18)&&
        col==1)
        return true;
     // Синий
     if((bon==2 ||bon==3 ||bon==9 ||
        bon==11||bon==16||bon==19)&&
        col==2)
        return true;
     // Желтый
     if((bon==3 ||bon==4 ||bon==10||
        bon==12||bon==17||bon==20)&&
        col==3)
        return true;
     // Голубой
     if((bon==4 ||bon==5 ||bon==11||
        bon==13||bon==18||bon==14)&&
        col==4)
        return true;
     // Фиолетовый
     if((bon==5 ||bon==6 ||bon==7 ||
        bon==12||bon==15||bon==19)&&
        col==5)
        return true;
     // Белый
     if((bon==6 ||bon==8 ||bon==13||
        bon==16||bon==20||bon==0)&&
        col==6)
        return true;
     return false;
  }
  int Prov()
  {
     int score=0,step,b;
     bool f;
     count=0;
     for(int i=1; i<9; i++)
      for(int j=1;j<9; j++)
      {

        if(color[i-1][j]==color[i+1][j]&&
           color[i-1][j]==color[i][j+1]&&
           color[i][j+1]!=7&&bonus[i][j-1]==8)
           goto m1;
        if(color[i-1][j]==color[i+1][j]&&
           color[i-1][j]==color[i][j-1]&&
           color[i][j-1]!=7&&bonus[i][j+1]==8)
           goto m1;
        if(color[i-1][j]==color[i][j-1]&&
           color[i-1][j]==color[i][j+1]&&
           color[i][j+1]!=7&&bonus[i+1][j]==8)
           goto m1;
        if(color[i+1][j]==color[i][j-1]&&
           color[i+1][j]==color[i][j+1]&&
           color[i][j+1]!=7&&bonus[i-1][j]==8)
           goto m1;
        if(color[i-1][j]==color[i+1][j]&&
           color[i-1][j]==color[i][j-1]&&
           color[i][j-1]==color[i][j+1]&&
           color[i][j-1]!=7)
        {
        m1:
           points[count].x=i-1;
           points[count].y=j;
           points[count+1].x=i+1;
           points[count+1].y=j;
           points[count+2].x=i;
           points[count+2].y=j+1;
           points[count+3].x=i;
           points[count+3].y=j-1;
           count+=4;
           

        }

      }
      //Сортировка по y
     for(int i=0; i<count; i++)
     {
        for(int j=i; j<count; j++)
        {
           if(points[j].y>points[i].y)
           {
              b=points[i].y;
              points[i].y=points[j].y;
              points[j].y=b;
              b=points[i].x;
              points[i].x=points[j].x;
              points[j].x=b;
           }
        }
      }
      for(int i=0; i<count; i++)
      {
         f=true;
         step=1;
         if(bonus[points[i].x][points[i].y]==1) step=2;
         if(bonus[points[i].x][points[i].y]==2) step=3;
         score+=step;
         Obval(points[i]);
      }
     return score;
  }
  void Obval(TPoint p)
  {
    while(p.y<9)
    {
      color[p.x][p.y]=color[p.x][p.y+1];
      bonus[p.x][p.y]=bonus[p.x][p.y+1];
      p.y++;
    }
    color[p.x][9]=7;
    bonus[p.x][9]=0;
  }
  bool PlayStop()
  {
     int n[10],j;
     bool f=false;
     j=0;
     for(int i=1; i<9; i++)
     {
       n[j]=0;
       if(color[i][1]!=7&&color[i-1][1]!=7&&
          color[i+1][1]!=7&&color[i][0]!=7&&
          color[i][2]!=7&&color[i][0]!=7)
       {
          f=true;
          break;
       }
     }
     return f;
  }
} TBOARD;
struct TRes {
   long scores[100];
   AnsiString names[100];
   int count,index;
   Create(int max)
   {
     if(max>100) max=100;
     for(int i=0; i<max; i++)
     {
        names[i]="--------------------";
        scores[i]=0;
     }
     count=max;
     index=0;
   }
   bool Load(AnsiString File)
   {
      int Handle, i;
      char buffer[20];
      AnsiString str;
      if(FileExists(File)==true)
      {
        Handle=FileOpen(File, fmOpenRead);
        for(i=0; i<10; i++)
        {
          FileRead(Handle,buffer,20);
          names[i].sprintf("%s",buffer);
          FileRead(Handle,buffer,20);
          scores[i]=atoi(buffer);
        }
        FileClose(Handle);
        return true;
      }
      return false;
   }
   Save(AnsiString File)
   {
      int Handle, i;
      char buffer[20];
      Handle=FileCreate(File);
      for(i=0; i<10; i++)
      {
        FileWrite(Handle,names[i].c_str(),20);
        itoa(scores[i],buffer,10);
        FileWrite(Handle,buffer,20);

      }
      FileClose(Handle);
      
   }
   Print(TListBox *List)
   {
      AnsiString buf;
      for(int i=0; i<count; i++)
         List->Items->Add(buf.sprintf("%d ",i+1)+names[i]+buf.sprintf(" %d",scores[i]));
   }
} TRes;
//---------------------------------------------------------------------------
class TFormMain : public TForm
{
__published:	// IDE-managed Componentsvoid __fastcall FormCreate(TObject *Sender);
        TPanel *Panel1;
        TTimer *Timer1;
        TLabel *Label1;
        TLabel *Label2;
        TCGauge *CGauge1;
        TPanel *Panel2;
        TProgressBar *ProgressBar1;
        TTimer *Timer2;
        TLabel *Label3;
        TLabel *Label4;
        TLabel *Label5;
        TLabel *Label6;
        TLabel *Label7;
        TLabel *Label8;
        TLabel *Label9;
        TLabel *Label10;
        TLabel *Label11;
        TPanel *Panel3;
        TLabel *Label12;
        TPanel *Panel4;
        TLabel *Label13;
        TLabel *Label15;
        TPanel *Panel5;
        TLabel *Label16;
        TLabel *Label17;
        TLabel *Label18;
        TCheckBox *CheckBox3;
        TCheckBox *CheckBox4;
        TLabel *Label19;
        TLabel *Label20;
        TLabel *Label21;
        TPanel *Panel6;
        TListBox *ListBox1;
        TLabel *Label14;
        TLabel *Label22;
        TTimer *Timer3;
        TLabel *Label23;
        TButton *Button1;
        TTimer *Timer4;
    void __fastcall FormPaint(TObject *Sender);
    void __fastcall FormDestroy(TObject *Sender);
    void __fastcall FormCreate(TObject *Sender);
        void __fastcall Timer1Timer(TObject *Sender);
        void __fastcall FormMouseMove(TObject *Sender, TShiftState Shift,
          int X, int Y);
        void __fastcall FormMouseDown(TObject *Sender, TMouseButton Button,
          TShiftState Shift, int X, int Y);
        void __fastcall FormResize(TObject *Sender);
        void __fastcall Timer2Timer(TObject *Sender);
        void __fastcall Panel2Click(TObject *Sender);
        void __fastcall Label10Click(TObject *Sender);
        void __fastcall Label3Click(TObject *Sender);
        void __fastcall Label13Click(TObject *Sender);
        void __fastcall Label11Click(TObject *Sender);
        void __fastcall Label8Click(TObject *Sender);
        void __fastcall Label14Click(TObject *Sender);
        void __fastcall Timer3Timer(TObject *Sender);
        void __fastcall Label17Click(TObject *Sender);
        void __fastcall Label16Click(TObject *Sender);
        void __fastcall Label7Click(TObject *Sender);
        void __fastcall Label5Click(TObject *Sender);
        void __fastcall Button1Click(TObject *Sender);
        void __fastcall Timer4Timer(TObject *Sender);

private:	// User declarations
    HDC hdc;
    HGLRC hrc;
    int PixelFormat;
    struct TBOARD BUFFER;
    struct TRes Res;
    GLuint startoflist;
    GLfloat  w, h;
    GLsizei size;
    GLuint texture[7],bon[7][7],twocolor[21];
    GLUquadricObj *BlueSphere;
    double Angle;
    long Score;
    int Level,col;
    Graphics::TBitmap* bitmap;
    bool Sound, Musik,Pause;
public:		// User declarations
    TPoint select,romb[100];
    __fastcall TFormMain(TComponent* Owner);
    void __fastcall IdleLoop(TObject*, bool&);
    void __fastcall RenderGLScene();
    void __fastcall SetPixelFormatDescriptor();
    void __fastcall DrawObjects();
    void __fastcall CreateInpriseCorporateLogo();
    void __fastcall DrawBlueSphere();
    void __fastcall SetupLighting();
    void __fastcall SetupTextures();
};
//---------------------------------------------------------------------------
extern PACKAGE TFormMain *FormMain;
//---------------------------------------------------------------------------
#endif
