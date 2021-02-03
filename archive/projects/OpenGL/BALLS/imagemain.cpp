//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "imagemain.h"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"
TForm1 *Form1;
//---------------------------------------------------------------------------
__fastcall TForm1::TForm1(TComponent* Owner)
        : TForm(Owner)
{
}
//---------------------------------------------------------------------------
void __fastcall TForm1::BitBtn1Click(TObject *Sender)
{
        if(OpenPictureDialog1->Execute())
        {
          Image1->Picture->LoadFromFile(OpenPictureDialog1->FileName);
          ImageList1->Clear();
          ImageList1->Width=LabeledEdit1->Text.ToInt();
          ImageList1->Height=LabeledEdit2->Text.ToInt();
          ImageList1->AddMasked(Image1->Picture->Bitmap,clBlack);
        }
}
//---------------------------------------------------------------------------
void __fastcall TForm1::BitBtn2Click(TObject *Sender)
{
        int i;
        AnsiString str;
        ProgressBar1->Max=ImageList1->Count;
        ProgressBar1->Position=0;
        bitmap = new Graphics::TBitmap;
        for(i=0; i<ImageList1->Count; i++)
        {
           str=LabeledEdit3->Text+str.sprintf("%d.bmp",i);
           ProgressBar1->Position=i;
           for(int t=0; t<ImageList1->Height;t++)  bitmap->Canvas->Pixels[0][t]=clBlack;
           ImageList1->GetBitmap(i,bitmap);
           bitmap->SaveToFile(str);
        }
}
//---------------------------------------------------------------------------
