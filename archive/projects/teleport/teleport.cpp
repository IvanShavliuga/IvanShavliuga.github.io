//---------------------------------------------------------------------------
#include <vcl.h>
#pragma hdrstop
USEFORM("main.cpp", FormMain);
USEFORM("splash.cpp", SplashForm);
//---------------------------------------------------------------------------
#include "splash.h"
//---------------------------------------------------------------------------
WINAPI WinMain(HINSTANCE, HINSTANCE, LPSTR, int)
{
    try
    {
        SplashForm = new TSplashForm(Application);
                 SplashForm->Show();
                 SplashForm->ProgressBar1->Position=30;
                 SplashForm->Update();
                 Application->Initialize();
        Application->Title = "Телепортация";
                 SplashForm->ProgressBar1->Position=60;
                 SplashForm->Update();
                 Application->CreateForm(__classid(TFormMain), &FormMain);
                 Application->CreateForm(__classid(TSplashForm), &SplashForm);
                 SplashForm->ProgressBar1->Position=100;
                 SplashForm->Update();
                 SplashForm->Hide();
                 SplashForm->Close();
                 Application->Run();
    }
    catch (Exception &exception)
    {
        Application->ShowException(&exception);
    }
    return 0;
}
//---------------------------------------------------------------------------








