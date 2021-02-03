program z3;
uses   dialog,crt;
var x,a,b,r,s,f:real;
    i,p,n,px,py:integer;
begin
  clrscr;
  TextWindow(1,1,20,24,1);
  TextWindow(21,1,80,24,0);
  DrawText(1,14,1,1,'Разработал:');
  DrawText(0,15,21,1,'Иванов');
  DrawText(1,14,1,2,'Вариант:');
  DrawText(0,15,21,2,'4');
  DrawText(1,14,1,3,'Задание:');
  DrawText(0,15,21,3,'3');
  DrawText(1,14,1,4,'Условие:');
  DrawText(0,15,21,4,'Найти n значений sin(1-e^-x)sin(4Пx) на [a;b]');
  DrawText(0,15,21,5,'Вычислить среднее арфметическое положительных чисел');
  DrawText(1,13,1,6,'Введите числа a,b,n:');
  DrawText(1,14,1,7,'Результат: ');
  DrawText(1,14,1,24,'Среднее: ');
  textcolor(15);
  textbackground(0);
  gotoxy(21,6);
  read(a,b,n);
  x:=a;
  s:=(b-a)/n;
  r:=0;
  p:=0;
  px:=21;
  py:=7;
  for i:=1 to n do
  begin
    f:=(1-exp(-x))*sin(4*pi*x);
    if f>0 then
    begin
      r:=r+f;
      p:=p+1;
    end;
    gotoxy(px,py);
    write(x:2:2,' ',f:2:2);
    inc(py);
    if py>23 then
    begin
      py:=7;
      px:=px+12;
    end;
    x:=x+s;
  end;
  r:=r/p;
  gotoxy(21,24);
  writeln(r:3:3);

end.
