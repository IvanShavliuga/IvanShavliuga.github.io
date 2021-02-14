program z1;
uses   dialog,crt;
var a,b:integer;
begin
  clrscr;
  TextWindow(1,1,15,6,1);
  TextWindow(15,1,80,6,0);
  DrawText(1,14,1,1,'Разработал:');
  DrawText(0,15,16,1,'Иванов');
  DrawText(1,14,1,2,'Вариант:');
  DrawText(0,15,16,2,'4');
  DrawText(1,14,1,3,'Задание:');
  DrawText(0,15,16,3,'10');
  DrawText(1,14,1,4,'Условие:');
  DrawText(0,15,16,4,'По вводимой ширине и длине нарисовать в центре');
  DrawText(0,15,16,5,'экрана синий прямоугольник на бирюзовом фоне');
  DrawText(1,13,1,6,'Введите имя файла:');
  DrawText(1,14,1,7,'Результат: ');
  textcolor(15);
  textbackground(0);
  gotoxy(16,5);
  read(A,b);
  gotoxy(16,6);
  writeln(min);

end.