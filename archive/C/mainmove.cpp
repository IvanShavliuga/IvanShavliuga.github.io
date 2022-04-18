//---------------------------------------------------------------------------
#include <conio.h>     
#include <string.h>    
#include <dos.h>     
#pragma hdrstop

//---------------------------------------------------------------------------

#pragma argsused
int main(int argc, char* argv[])
{
   char string[]="PROGRMMIRUNG";
   int len=strlen(string); 
   textcolor(15);          
   do {
     gotoxy(1,2);          
     cprintf(string);      
     char b=string[0];
     for(int i=1; i<len; i++) string[i-1]=string[i];
     string[len-1]=b;
     sleep(1);             
   } while(!kbhit());      
   getch();
   return 0;
}
//---------------------------------------------------------------------------
 
