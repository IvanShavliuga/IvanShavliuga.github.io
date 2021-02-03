program z6;
uses   dialog,crt;
var r:real;
    m,n,i,j:integer;
    a:array[1..25,1..25] of real;
    b:array[1..12] of real;
begin
  clrscr;
  TextWindow(1,1,24,24,1);
  TextWindow(25,1,80,24,0);
  DrawText(1,14,1,1,'Разработал:');
  DrawText(0,15,25,1,'Иванов');
  DrawText(1,14,1,2,'Вариант:');
  DrawText(0,15,25,2,'4');
  DrawText(1,14,1,3,'Задание:');
  DrawText(0,15,25,3,'6');
  DrawText(1,14,1,4,'Условие:');
  DrawText(0,15,25,4,'Найти среднее арифметическое четных столбцов матрцы n*m');
  DrawText(1,13,1,5,'Введите n и m:');
  DrawText(1,14,1,6,'Результат: ');
  textcolor(15);
  textbackground(0);
  gotoxy(25,5);
  read(n,m);
  if n>25 then n:=25;
  if m>25 then m:=25;
  for j:=1 to n do
  begin
    for i:=1 to m do
    begin
      TextWindow(1,5,21,5,1);
      TextWindow(22,5,80,5,0);
      DrawText(1,13,1,5,'  -й столбец   -я строка');
      gotoxy(1,5);
      write(I:2);
      gotoxy(14,5);
      write(j:2);
      textcolor(15);
      textbackground(0);
      gotoxy(25,5);
      read(a[j,i]);
    end;
  end;
  for i:=1 to m div 2 do
  begin
    r:=0;
    for j:=1 to n do
      r:=r+a[2*i,j];
    r:=r/n;
    DrawText(1,14,1,7+i,'  -й столбец');
    gotoxy(1,7+i);
    write(2*I:2);
    textcolor(15);
    textbackground(0);
    gotoxy(25,7+i);
    write(r);
  end;
end.
