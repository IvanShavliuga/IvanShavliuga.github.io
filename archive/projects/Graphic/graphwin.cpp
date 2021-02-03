//----------------------------------------------------------------------------
//Borland C++Builder
//Copyright (c) 1987, 1998-2002 Borland International Inc. All Rights Reserved.
//----------------------------------------------------------------------------
//---------------------------------------------------------------------------
#include <vcl.h>
#pragma hdrstop
#include <printers.hpp>

#include "graphwin.h"
#include "bmpdlg.h"
#include <Clipbrd.hpp>
//---------------------------------------------------------------------------
#pragma link "CSPIN"
#pragma resource "*.dfm"
TFormMain* FormMain;
//---------------------------------------------------------------------------
__fastcall TFormMain::TFormMain(TComponent* Owner)
  : TForm(Owner)
{
 Image->Canvas->MoveTo(0,0);
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::SpeedButton2Click(TObject *Sender)
{
        Graphics::TBitmap *Bitmap;
        unsigned long i,j,r,g,b,r1,g1,b1,m;
        TColor c;
        ProgressBar1->Max=Image->Height*Image->Width;
        ProgressBar1->Position=0;
        Bitmap = new Graphics::TBitmap();
        Bitmap = Image->Picture->Bitmap;

        for(i=0; i<Bitmap->Height; i++)
        {
          for(j=0; j<Bitmap->Width; j++)
          {
            c = Bitmap->Canvas->Pixels[i][j];
            r = GetRValue(c) & 0xf0;
            g = GetGValue(c) & 0xf0;
            b = GetBValue(c) & 0xf0;
            if(r<=60) r1=0;
            if(r>60&&r<150) r1=150;
            if(r>=60) r1=255;
            if(g<=60) g1=0;
            if(g>60&&g<150) g1=150;
            if(g>=60) g1=255;
            if(b<=60) b1=0;
            if(b>60&&b<150) b1=150;
            if(b>=60) b1=255;

            Bitmap->Canvas->Pixels[i][j]=RGB(r1,g1,b1);
            ProgressBar1->Position++;
         }
        }

        Image->Picture->Bitmap=Bitmap;
        ProgressBar1->Position=0;
        MessageBeep(1);

}
//---------------------------------------------------------------------------
void __fastcall TFormMain::New1Click(TObject *Sender)
{
Graphics::TBitmap *Bitmap;

     NewBMPForm->ActiveControl = NewBMPForm->WidthEdit;
     NewBMPForm->WidthEdit->Text = IntToStr(Image->Picture->Graphic->Width);
     NewBMPForm->HeightEdit->Text = IntToStr(Image->Picture->Graphic->Height);
//     if (ShowModal() != idCancel){
     if (NewBMPForm->ShowModal() != IDCANCEL){
        Bitmap = new Graphics::TBitmap();
//        Bitmap->Create();
        Bitmap->Width = StrToInt(NewBMPForm->WidthEdit->Text);
        Bitmap->Height = StrToInt(NewBMPForm->HeightEdit->Text);
        Image->Picture->Graphic = Bitmap;
        CurrentFile = EmptyStr;
     }

}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Open1Click(TObject *Sender)
{
if (OpenDialog1->Execute()){
    CurrentFile = OpenDialog1->FileName;
    Image->Picture->LoadFromFile(CurrentFile);
  }

}
//---------------------------------------------------------------------------
void __fastcall TFormMain::SaveAs1Click(TObject *Sender)
{
  if (SaveDialog1->Execute()){
    CurrentFile = SaveDialog1->FileName;
    Image->Picture->SaveToFile(CurrentFile);
  }
}
//---------------------------------------------------------------------

void __fastcall TFormMain::Exit1Click(TObject *Sender)
{
   Close();
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::Print1Click(TObject *Sender)
{
unsigned int BitmapInfoSize, BitmapImageSize;
    long DIBWidth, DIBHeight;
    PChar BitmapImage;
    Windows::PBitmapInfo BitmapInfo;
    Graphics::TBitmap *Bitmap;

    Printer()->BeginDoc();
    Bitmap = new Graphics::TBitmap();
    Bitmap->Assign(Image->Picture);
    GetDIBSizes(Bitmap->Handle, BitmapInfoSize, BitmapImageSize);
    BitmapInfo  = (PBitmapInfo) new char[BitmapInfoSize];
    BitmapImage = (PChar) new char [BitmapImageSize];
    GetDIB(Bitmap->Handle, 0, BitmapInfo, BitmapImage);
    DIBWidth  = BitmapInfo->bmiHeader.biWidth;
    DIBHeight = BitmapInfo->bmiHeader.biHeight;
    StretchDIBits(Printer()->Canvas->Handle,
                0, 0, DIBWidth, DIBHeight,
                0, 0, DIBWidth, DIBHeight,
                BitmapImage, BitmapInfo,
                DIB_RGB_COLORS, SRCCOPY);
    delete [] BitmapImage;
    delete [] BitmapInfo;
    delete Bitmap;

    Printer()->EndDoc();
        
}
//---------------------------------------------------------------------
void __fastcall TFormMain::Cut1Click(TObject *Sender)
{
 TRect ARect;

 Copy1Click(Sender);

 Image->Canvas->CopyMode = cmWhiteness;
 ARect = Rect(0, 0, Image->Width, Image->Height);
 Image->Canvas->CopyRect(ARect, Image->Canvas, ARect);
 Image->Canvas->CopyMode = cmSrcCopy;
}

//---------------------------------------------------------------------
void __fastcall TFormMain::Copy1Click(TObject *Sender)
{
  Clipboard()->Assign(Image->Picture);
}

//---------------------------------------------------------------------
void __fastcall TFormMain::Paste1Click(TObject *Sender)
{

  Graphics::TBitmap *Bitmap;

  if (Clipboard()->HasFormat(CF_BITMAP)){
    Bitmap = new Graphics::TBitmap();
    try{
      Bitmap->Assign(Clipboard());
      Image->Canvas->Draw(0, 0, Bitmap);
      delete Bitmap;
    }
    catch(...){
      delete Bitmap;
    }
  }
}

//---------------------------------------------------------------------


