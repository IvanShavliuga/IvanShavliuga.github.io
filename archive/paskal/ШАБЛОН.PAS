program z1;
uses   dialog,crt;
var a,b:integer;
begin
  clrscr;
  TextWindow(1,1,15,6,1);
  TextWindow(15,1,80,6,0);
  DrawText(1,14,1,1,'���ࠡ�⠫:');
  DrawText(0,15,16,1,'������');
  DrawText(1,14,1,2,'��ਠ��:');
  DrawText(0,15,16,2,'4');
  DrawText(1,14,1,3,'�������:');
  DrawText(0,15,16,3,'10');
  DrawText(1,14,1,4,'�᫮���:');
  DrawText(0,15,16,4,'�� �������� �ਭ� � ����� ���ᮢ��� � 業��');
  DrawText(0,15,16,5,'��࠭� ᨭ�� ��אַ㣮�쭨� �� ������ 䮭�');
  DrawText(1,13,1,6,'������ ��� 䠩��:');
  DrawText(1,14,1,7,'�������: ');
  textcolor(15);
  textbackground(0);
  gotoxy(16,5);
  read(A,b);
  gotoxy(16,6);
  writeln(min);

end.