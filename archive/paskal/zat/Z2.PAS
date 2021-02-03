program z2;
uses   dialog,crt;
var x,r:real;
    i,n:integer;
begin
  clrscr;
  TextWindow(1,1,20,6,1);
  TextWindow(20,1,80,6,0);
  DrawText(1,14,1,1,'Разработал:');
  DrawText(0,15,21,1,'Иванов');
  DrawText(1,14,1,2,'Вариант:');
  DrawText(0,15,21,2,'4');
  DrawText(1,14,1,3,'Задание:');
  DrawText(0,15,21,3,'2');
  DrawText(1,14,1,4,'Условие:');
  DrawText(0,15,21,4,'Найти sin(x)+sin(sin(x))+..+sin(..sin(x))');
  DrawText(1,13,1,5,'Введите число x, n:');
  DrawText(1,14,1,6,'Результат: ');
  textcolor(15);
  textbackground(0);
  gotoxy(21,5);
  read(x,n);
  r:=0;
  for i:=1 to n do
  begin
    r:=r+sin(x);
    x:=sin(x);
  end;
  gotoxy(21,6);
  writeln(r:3:3);

end.
