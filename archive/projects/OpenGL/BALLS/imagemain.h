//---------------------------------------------------------------------------

#ifndef imagemainH
#define imagemainH
//---------------------------------------------------------------------------
#include <Classes.hpp>
#include <Controls.hpp>
#include <StdCtrls.hpp>
#include <Forms.hpp>
#include <Buttons.hpp>
#include <ComCtrls.hpp>
#include <Dialogs.hpp>
#include <ExtCtrls.hpp>
#include <ExtDlgs.hpp>
#include <Graphics.hpp>
#include <ImgList.hpp>
//---------------------------------------------------------------------------
class TForm1 : public TForm
{
__published:	// IDE-managed Components
        TImageList *ImageList1;
        TImage *Image1;
        TBitBtn *BitBtn1;
        TBitBtn *BitBtn2;
        TLabeledEdit *LabeledEdit1;
        TLabeledEdit *LabeledEdit2;
        TProgressBar *ProgressBar1;
        TOpenPictureDialog *OpenPictureDialog1;
        TLabeledEdit *LabeledEdit3;
        void __fastcall BitBtn1Click(TObject *Sender);
        void __fastcall BitBtn2Click(TObject *Sender);
private:	// User declarations
public:		// User declarations
        __fastcall TForm1(TComponent* Owner);
        Graphics::TBitmap* bitmap;
};
//---------------------------------------------------------------------------
extern PACKAGE TForm1 *Form1;
//---------------------------------------------------------------------------
#endif
