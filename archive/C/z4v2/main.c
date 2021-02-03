/****************************************************************************
 *                                                                          *
 * File    : main.c                                                         *
 *                                                                          *
 * Purpose : Console mode (command line) program.                           *
 *                                                                          *
 * History : Date      Reason                                               *
 *           00/00/00  Created                                              *
 *                                                                          *
 ****************************************************************************/

#include <conio.h>
#include <string.h>
/****************************************************************************
 *                                                                          *
 * Function: main                                                           *
 *                                                                          *
 * Purpose : Main entry point.                                              *
 *                                                                          *
 * History : Date      Reason                                               *
 *           00/00/00  Created                                              *
 *                                                                          *
 ****************************************************************************/

int main(int argc, char *argv[])
{
  /* TODO: Enter code here */
  char menu[5][30]={"File ","Edit ","Options ","Help ","Exit "};  //������� ����
  int key; //��� �������� �������
  int select=0; //��������� ����
  
  do{
    //�������!!
    int x=1;    //�������� ������ ���� 

    _textbackground(0);
    _clrscr(); //������� ������
    _textbackground(7);
    //������ ����� �����
    //for(int i=1; i<=80; i++) _cprintf(" ");
    _gotoxy(1,1);_clreol();
    for(int i=0; i<5; i++){//����� ����
      if(select==i) _textbackground(2); //������ �����
      else          _textbackground(7);
      _textcolor(0);
      _gotoxy(x,1);
      _cprintf("%s",menu[i]);
      _textcolor(4);
      _gotoxy(x,1);
      _cprintf("%c",menu[i][0]);
      x+=strlen(menu[i]); 
    }
    key=_getch();
    switch(key){
      case 75: //�����
        select--;
        if(select<0) select=4;
        break;
      case 77: //������
        select++;
        if(select>4) select=0;
        break;
      case 13:
        _gotoxy(10,5);
        _textbackground(0);
        _textcolor(15);
        _cprintf("Select is %s\n",menu[select]);
        _getch();
        if(select==4) return 0;
    }
    _textbackground(0);
    _textcolor(15);
    _gotoxy(1,3);
  }while(key!=27); //���� �� ������ Esc  
  return 0;
}

