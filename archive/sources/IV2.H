#include <stdio.h>
#include <conio.h>
#include <stdarg.h>
#include <string.h>
/*������� ������ ��������������� ����
  c -- ���������� ������� (�������� 10)
  ... -- ������ ����
*/
int gmenu(int c, ...)
{
  char menu[10][30];  //������� ����
  int key; //��� �������� �������
  int select=0; //��������� ����
  int i;
  va_list ap;
  va_start(ap,c);
  if(c>10) c=10;
  for( i=0; i<c; i++){
    strcpy(menu[i],va_arg(ap,char *));
  }
  va_end(ap);
  do{
    //�������!!
    int x=1;    //�������� ������ ����
    gotoxy(1,1);
    clreol();
    for( i=0; i<c; i++){//����� ����
      gotoxy(x,1);
      if(select==i) printf(" *%s* ",menu[i]); //������ �����
      else          printf("  %s  ",menu[i]);
      
      x+=strlen(menu[i])+3;
    }
    key=getch();
    switch(key){
      case '4': //�����
	select--;
	if(select<0) select=c-1;
	break;
      case '6': //������
	select++;
	if(select>c-1) select=0;
	break;
      case '5':
        return select;
    }
  }while(key!=27); //���� �� ������ Esc
  gotoxy(1,2);
  return select;
}
void hexcode(char str[],int len)
{
	printf("\n");
	for(int i=0; i<len; i++) 	printf("%2x ",str[i]);
	printf("\t%s\n",str);
	return;
}
//�������������� �� ��������� Windows � ��������� DOS
char * WinToDos(char *source)
{
    char *result;   
	for(int i=0; i<strlen(source); i++){
		if(source[i]>='�'&&source[i]<='�') 
			result[i]=source[i]-0x40;
		else if(source[i]>='�'&&source[i]<='�')
			result[i]=source[i]-0x10;
		else result[i]=source[i];
	}
	result[strlen(source)]=0;
	return(result);
}
