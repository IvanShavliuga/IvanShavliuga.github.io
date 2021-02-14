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
  DrawText(1,14,1,1,'Разработал:');
  DrawText(0,15,19,1,'Иванов');
  DrawText(1,14,1,2,'Вариант:');
  DrawText(0,15,19,2,'4');
  DrawText(1,14,1,3,'Задание:');
  DrawText(0,15,19,3,'9');
  DrawText(1,14,1,4,'Условие:');
  DrawText(0,15,19,4,'Дан файл, содержащий: фамилию абонента,год установки телефона');
  DrawText(0,15,19,5,'и его номер. Выполить:');
  DrawText(0,15,19,6,'По вводимой фамилии абонента выдать ноер его елефона');
  DrawText(0,15,19,7,'Определить кол-во установленных телефонов с вводимого года');
  DrawText(1,13,1,8,'Введите имя файла:');
  DrawText(1,14,1,9,'Результат: ');
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
  DrawText(0,15,19,9,'Файл загруен.');
  gotoxy(19,10);
  n:=i-1;
  writeln('Загружено ',n,' записей.');
newkey:
  DrawText(0,15,19,11,'Выберете команду');
  DrawText(0,15,19,12,'0 - выход');
  DrawText(0,15,19,13,'1 - найти номер телефона по фамилии.');
  DrawText(0,15,19,14,'2 - Определить кол-во установленных телефонов');
  textwindow(1,8,18,8,1);
  DrawText(1,13,1,8,'Номер команды:');
  textwindow(19,8,80,8,0);
  textcolor(15);
  textbackground(0);
  gotoxy(19,8);
  readln(key);
  if Key='1' then
  begin
    textwindow(1,8,18,8,1);
    DrawText(1,13,1,8,'Фамилия:');
    textwindow(19,8,80,8,0);
    textwindow(19,11,80,14,0);
    textcolor(15);
    textbackground(0);
    gotoxy(19,8);
    readln(fam);
    DrawText(0,15,19,11,'Поиск... ');
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
            DrawText(0,15,19,11,'Поиск завершен. Для продолжения нажмите enter');
            readln;
            textwindow(19,11,80,23,0);
            goto newkey;
          end;
        end;
      end;

    end;
    if y=12 then
    begin
      DrawText(0,15,19,12,'Абонент не найден');
      DrawText(0,15,19,11,'Поиск завершен. Для продолжения нажмите enter');
      readln;
      textwindow(19,11,80,17,0);
      goto newkey;
    end
    else
    begin
      DrawText(0,15,19,11,'Поиск завершен. Для продолжения нажмите enter');
      readln;
      textwindow(19,11,80,23,0);
      goto newkey;
    end;
  end;
  if Key='2' then
  begin
    textwindow(1,8,18,8,1);
    DrawText(1,13,1,8,'Год:');
    textwindow(19,8,80,8,0);
    textwindow(19,11,80,14,0);
    textcolor(15);
    textbackground(0);
    gotoxy(19,8);
    readln(year);
    DrawText(0,15,19,11,'Поиск... ');
    k:=0;
    for i:=1 to n do
    begin
      if year<=tsp[i].year then
      inc(k);
      
    end;
    if k>0 then
    begin
      DrawText(0,15,19,12,'Кол-во найденых абонентов: ');
      write(k);
      DrawText(0,15,19,11,'Поиск завершен. Для продолжения нажмите enter');
      readln;
      textwindow(19,11,80,17,0);
      goto newkey;
    end
    else
    begin
      DrawText(0,15,19,12,'Абоненты не найдены.');
      DrawText(0,15,19,11,'Поиск завершен. Для продолжения нажмите enter');
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