program z7;
uses   dialog,crt;
var symbol:string;
    i:integer;
    r:boolean;
begin
  clrscr;
  TextWindow(1,1,17,8,1);
  TextWindow(18,1,80,8,0);
  DrawText(1,14,1,1,'���ࠡ�⠫:');
  DrawText(0,15,18,1,'������');
  DrawText(1,14,1,2,'��ਠ��:');
  DrawText(0,15,18,2,'4');
  DrawText(1,14,1,3,'�������:');
  DrawText(0,15,18,3,'7');
  DrawText(1,14,1,4,'�᫮���:');
  DrawText(0,15,18,4,'���� ᨬ���� S1,.., Sn. �����⭮, �� ᨬ��� S1 �⫨祭 �� ');
  DrawText(0,15,18,5,'! � �� �।� s2, s3,.. ���� ��� �� ���� !. ����� s1,..sn ');
  DrawText(0,15,18,6,'ᨬ����, �।�����騥 !. ���� �।� ��� �� ��� ��.');
  DrawText(1,13,1,7,'������ ᨬ����:');
  DrawText(1,14,1,8,'�������: ');
  textcolor(15);
  textbackground(0);
  gotoxy(18,7);
  readln(symbol);
  i:=1;
  r:=false;
  while (symbol[i]<>'!')or(i<>length(symbol)) do
  begin
    if ((symbol[i]='�')and(symbol[i+1]='�'))or((symbol[i]='�')and(symbol[i+1]='�'))or
((symbol[i]='�')and(symbol[i+1]='�'))or((symbol[i]='�')and(symbol[i+1]='�'))then
    begin
      r:=true;
      break;
    end;
    inc(i);    
  end;
  gotoxy(18,8);
  writeln(r);
end.