program z4;
uses   dialog,crt;
var x,r,p:real;
    i:integer;
begin
  clrscr;
  TextWindow(1,1,20,6,1);
  TextWindow(20,1,80,6,0);
  DrawText(1,14,1,1,'���ࠡ�⠫:');
  DrawText(0,15,21,1,'������');
  DrawText(1,14,1,2,'��ਠ��:');
  DrawText(0,15,21,2,'4');
  DrawText(1,14,1,3,'�������:');
  DrawText(0,15,21,3,'4');
  DrawText(1,14,1,4,'�᫮���:');
  DrawText(0,15,21,4,'���� x/1+x^2/2!+..+x^n/n! � �筮���� �� 0.00001');
  DrawText(1,13,1,5,'������ �᫮ x:');
  DrawText(1,14,1,6,'�������: ');
  textcolor(15);
  textbackground(0);
  gotoxy(21,5);
  read(x);
  r:=0;
  p:=1;
  i:=1;
  while p>=0.00001 do
  begin
    p:=p*x/i;
    r:=r+p;
    inc(i);
  end;
  gotoxy(21,6);
  writeln(r:4:5);

end.
