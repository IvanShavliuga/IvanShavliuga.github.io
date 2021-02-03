program z1;
uses   dialog,crt;
var a,b,c,d,m1,m2:real;
begin
  clrscr;
  TextWindow(1,1,15,6,1);
  TextWindow(15,1,80,6,0);
  DrawText(1,14,1,1,'Разработал:');
  DrawText(0,15,16,1,'Иванов');
  DrawText(1,14,1,2,'Вариант:');
  DrawText(0,15,16,2,'4');
  DrawText(1,14,1,3,'Задание:');
  DrawText(0,15,16,3,'1');
  DrawText(1,14,1,4,'Условие:');
  DrawText(0,15,16,4,'Найти ммнимум из 4-х чисел');
  DrawText(1,13,1,5,'Введите числа:');
  DrawText(1,14,1,6,'Минимум: ');
  textcolor(15);
  textbackground(0);
  gotoxy(16,5);
  read(A,b,c,d);
  if A>B THEN M1:=b
  else        m1:=a;
  if c>d THEN M2:=d
  else        m2:=c;
  gotoxy(16,6);
  if m1>m2 THEN writeln(m2:3:3)
  else          writeln(m1:3:3);

end.
