program z1;
uses   dialog,crt;
type Abonent = record
    fam:string;
    year:integer;
    fone:string;
end;
var f:text;
    name,fam:string;
    tsp:array[1..100] of abonent;
    i,y,year,n,k:integer;
    key:char;
    cmp:boolean;
label newkey,quit;
begin
  clrscr;
  TextWindow(1,1,18,24,1);
  TextWindow(19,1,80,24,0);
  DrawText(1,14,1,1,'���ࠡ�⠫:');
  DrawText(0,15,19,1,'������');
  DrawText(1,14,1,2,'��ਠ��:');
  DrawText(0,15,19,2,'4');
  DrawText(1,14,1,3,'�������:');
  DrawText(0,15,19,3,'9');
  DrawText(1,14,1,4,'�᫮���:');
  DrawText(0,15,19,4,'��� 䠩�, ᮤ�ঠ騩: 䠬���� �������,��� ��⠭���� ⥫�䮭�');
  DrawText(0,15,19,5,'� ��� �����. �믮����:');
  DrawText(0,15,19,6,'�� �������� 䠬���� ������� �뤠�� ���� ��� ���䮭�');
  DrawText(0,15,19,7,'��।����� ���-�� ��⠭�������� ⥫�䮭�� � ��������� ����');
  DrawText(1,13,1,8,'������ ��� 䠩��:');
  DrawText(1,14,1,9,'�������: ');
  textcolor(15);
  textbackground(0);
  gotoxy(19,8);
  readln(name);
  Assign(F,Name);
  Reset(F);
  i:=1;
  repeat
    with tsp[i] do
    begin
      readln(f,fam);
      readln(f,year);
      readln(f,fone);
      
    end;
    inc(i);
  until (eof(f))or(i=101);
  DrawText(0,15,19,9,'���� ����㥭.');
  gotoxy(19,10);
  n:=i-1;
  writeln('����㦥�� ',n,' ����ᥩ.');
newkey:
  DrawText(0,15,19,11,'�롥�� �������');
  DrawText(0,15,19,12,'0 - ��室');
  DrawText(0,15,19,13,'1 - ���� ����� ⥫�䮭� �� 䠬����.');
  DrawText(0,15,19,14,'2 - ��।����� ���-�� ��⠭�������� ⥫�䮭��');
  textwindow(1,8,18,8,1);
  DrawText(1,13,1,8,'����� �������:');
  textwindow(19,8,80,8,0);
  textcolor(15);
  textbackground(0);
  gotoxy(19,8);
  readln(key);
  if Key='1' then
  begin
    textwindow(1,8,18,8,1);
    DrawText(1,13,1,8,'�������:');
    textwindow(19,8,80,8,0);
    textwindow(19,11,80,14,0);
    textcolor(15);
    textbackground(0);
    gotoxy(19,8);
    readln(fam);
    DrawText(0,15,19,11,'����... ');
    y:=12;
    for i:=1 to n do
    begin
      if length(fam)=length(tsp[i].fam) then
      begin
        cmp:=true;
        for k:=1 to length(fam) do
          if fam[k]<>tsp[i].fam[k] then begin cmp:=false; break; end;
        if cmp=true then
        begin
          DrawText(0,15,19,y,fam);
          write(' - ',tsp[i].fone);
          inc(y);
          if y=25 then
          begin
            DrawText(0,15,19,11,'���� �����襭. ��� �த������� ������ enter');
            readln;
            textwindow(19,11,80,23,0);
            goto newkey;
          end;
        end;
      end;

    end;
    if y=12 then
    begin
      DrawText(0,15,19,12,'������� �� ������');
      DrawText(0,15,19,11,'���� �����襭. ��� �த������� ������ enter');
      readln;
      textwindow(19,11,80,17,0);
      goto newkey;
    end
    else
    begin
      DrawText(0,15,19,11,'���� �����襭. ��� �த������� ������ enter');
      readln;
      textwindow(19,11,80,23,0);
      goto newkey;
    end;
  end;
  if Key='2' then
  begin
    textwindow(1,8,18,8,1);
    DrawText(1,13,1,8,'���:');
    textwindow(19,8,80,8,0);
    textwindow(19,11,80,14,0);
    textcolor(15);
    textbackground(0);
    gotoxy(19,8);
    readln(year);
    DrawText(0,15,19,11,'����... ');
    k:=0;
    for i:=1 to n do
    begin
      if year<=tsp[i].year then
      inc(k);
      
    end;
    if k>0 then
    begin
      DrawText(0,15,19,12,'���-�� �������� ������⮢: ');
      write(k);
      DrawText(0,15,19,11,'���� �����襭. ��� �த������� ������ enter');
      readln;
      textwindow(19,11,80,17,0);
      goto newkey;
    end
    else
    begin
      DrawText(0,15,19,12,'�������� �� �������.');
      DrawText(0,15,19,11,'���� �����襭. ��� �த������� ������ enter');
      readln;
      textwindow(19,11,80,23,0);
      goto newkey;
    end;
  end;
  if key='0' then goto quit;
  goto newkey;
quit:
  close(f);
end.