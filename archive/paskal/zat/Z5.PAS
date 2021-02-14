program z5;
uses   dialog,crt;
var r:real;
    i,n,px,py:integer;
    a,b:array[1..160] of real;
begin
  clrscr;
  TextWindow(1,1,21,24,1);
  TextWindow(22,1,80,24,0);
  DrawText(1,14,1,1,'Разработал:');
  DrawText(0,15,22,1,'Иванов');
  DrawText(1,14,1,2,'Вариант:');
  DrawText(0,15,22,2,'4');
  DrawText(1,14,1,3,'Задание:');
  DrawText(0,15,22,3,'5');
  DrawText(1,14,1,4,'Условие:');
  DrawText(0,15,22,4,'Записать в B[i] среднее арифметическое a без a[i] i=[1..n]');
  DrawText(1,13,1,5,'Введите Кол-во чисел:');
  DrawText(1,14,1,6,'Результат: ');
  textcolor(15);
  textbackground(0);
  gotoxy(22,5);
  read(n);
  if n>160 then n:=160;
  r:=0;
  for i:=1 to n do
  begin
    TextWindow(1,5,21,5,1);
    TextWindow(22,5,80,5,0);
    DrawText(1,13,1,5,'Введите   -е число:');
    gotoxy(9,5);
    write(I:2);
    textcolor(15);
    textbackground(0);
    gotoxy(22,5);
    read(a[i]);
    r:=r+a[i];
  end;
  px:=22;
  py:=6;
  for i:=1 to n do
  begin
    b[i]:=(r-a[i])/(n-1);
    gotoxy(px,py);
    write(I,' ',b[i]:2:2);
    inc(py);
    if py>24 then
    begin
      py:=7;
      px:=px+6;
    end;

  end;

end.
