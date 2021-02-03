//---------------------------------------------------------------------------
#ifndef GlSkelH
#define GlSkelH
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
    if(maxbonus>10) maxbonus=10;
    for(int i=0; i<10; i++)
      for(int j=0;j<10; j++)
      {
        color[i][j]=random(7);
        bonus[i][j]=random(maxbonus);
        select[i][j]=false;

      }
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
  int Prov()
  {
     int score=0;
     count=0;
     for(int i=1; i<9; i++)
      for(int j=1;j<9; j++)
      {
        if(color[i-1][j]==color[i+1][j]&&
           color[i-1][j]==color[i][j-1]&&
           color[i][j-1]==color[i][j+1]&&
           color[i][j-1]!=7)
        {
           points[count].x=i-1;
           points[count].y=j;
           points[count+1].x=i+1;
           points[count+1].y=j;
           points[count+2].x=i;
           points[count+2].y=j+1;
           points[count+3].x=i;
           points[count+3].y=j-1;
           count+=4;
           score+=4;

        }

      }
      for(int i=0; i<count; i++)
      {
         if(bonus[points[i].x][points[i].y]==1) score*=2;
         if(bonus[points[i].x][points[i].y]==2) score*=3;
         
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
        names[i]="-------";
        scores[i]=0;
     }
     count=max;
     index=0;
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
        TListBox *ListBox1;
        TLabel *Label3;
        TProgressBar *ProgressBar1;
        TTimer *Timer2;
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

private:	// User declarations
    HDC hdc;
    HGLRC hrc;
    int PixelFormat;
    struct TBOARD BUFFER;
    struct TRes Res;
    GLuint startoflist;
    GLfloat  w, h;
    GLsizei size;
    GLuint texture[7],bon[7][7];
    GLUquadricObj *BlueSphere;
    double Angle;
    long Score;
    int Level;
    Graphics::TBitmap* bitmap;
    
public:		// User declarations
    TPoint select;
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
