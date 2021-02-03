//----------------------------------------------------------------------------
//Borland C++Builder
//Copyright (c) 1987, 1998-2002 Borland International Inc. All Rights Reserved.
//----------------------------------------------------------------------------
//---------------------------------------------------------------------------
#ifndef graphwinH
#define graphwinH
//---------------------------------------------------------------------------
#include <Forms.hpp>
#include <ExtCtrls.hpp>
#include <Controls.hpp>
#include <Classes.hpp>
#include <Menus.hpp>
#include <Dialogs.hpp>
#include <ComCtrls.hpp>
#include <Buttons.hpp>
#include <StdCtrls.hpp>
#include "CSPIN.h"
#include <ExtDlgs.hpp>
#include <jpeg.hpp>
//---------------------------------------------------------------------------

enum TDrawingTool {dtLine, dtRectangle, dtEllipse, dtRoundRect};

class TFormMain : public TForm
{
__published:
    TScrollBox *ScrollBox1;
    TImage *Image;
    TMainMenu *MainMenu1;
    TMenuItem *File1;
    TMenuItem *New1;
    TMenuItem *Open1;
    TMenuItem *Saveas1;
    TMenuItem *Print1;
    TMenuItem *N1;
    TMenuItem *Exit1;
    TMenuItem *Edit1;
    TMenuItem *Cut1;
    TMenuItem *Copy1;
    TMenuItem *Paste1;
    TSaveDialog *SaveDialog1;
        TOpenPictureDialog *OpenDialog1;
        TProgressBar *ProgressBar1;
        TMenuItem *N2;
    void __fastcall SpeedButton2Click(TObject *Sender);
        void __fastcall New1Click(TObject *Sender);
        void __fastcall Open1Click(TObject *Sender);
        void __fastcall SaveAs1Click(TObject *Sender);
        void __fastcall Exit1Click(TObject *Sender);
        void __fastcall Print1Click(TObject *Sender);
        void __fastcall Cut1Click(TObject *Sender);
        void __fastcall Copy1Click(TObject *Sender);
        void __fastcall Paste1Click(TObject *Sender);
private:        // private user declarations

        
public:         // public user declarations
        AnsiString CurrentFile;
        virtual __fastcall TFormMain(TComponent* Owner);
};
//---------------------------------------------------------------------------
extern TFormMain *FormMain;
//---------------------------------------------------------------------------
#endif
