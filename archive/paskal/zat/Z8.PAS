program z1;
uses   dialog,crt;
var a,min:real;
    i:boolean;
    f:text;
    name:string;
begin
  clrscr;
  TextWindow(1,1,18,6,1);
  TextWindow(19,1,80,6,0);
  DrawText(1,14,1,1,'���ࠡ�⠫:');
  DrawText(0,15,19,1,'������');
  DrawText(1,14,1,2,'��ਠ��:');
  DrawText(0,15,19,2,'4');
  DrawText(1,14,1,3,'�������:');
  DrawText(0,15,19,3,'8');
  DrawText(1,14,1,4,'�᫮���:');
  DrawText(0,15,19,4,'�� 䠩�� ���� ��������� ������� � ��� ����஬');
  DrawText(1,13,1,5,'������ ��� 䠩��:');
  DrawText(1,14,1,6,'�������: ');
  textcolor(15);
  textbackground(0);
  gotoxy(19,5);
  read(name);
  Assign(F,Name);
  Reset(F);
  read(f,a);
  read(f,a);
  i:=false;
  min:=a;
  repeat
    read(f,a);
    if (i=true)and(a<min) then
      min:=a;
    i:=not i;
  until eof(f);
  gotoxy(19,6);
  writeln(min:3:3);
  close(f);
end.