program z1;
uses   dialog,crt,graph;
var a,b:integer;
    Gd,Gm: Integer;
 
begin
  clrscr;
  TextWindow(1,1,17,7,1);
  TextWindow(18,1,80,7,0);
  DrawText(1,14,1,1,'Разработал:');
  DrawText(0,15,18,1,'Иванов');
  DrawText(1,14,1,2,'Вариант:');
  DrawText(0,15,18,2,'4');
  DrawText(1,14,1,3,'Задание:');
  DrawText(0,15,18,3,'10');
  DrawText(1,14,1,4,'Условие:');
  DrawText(0,15,18,4,'По вводимой ширине и высоте нарисовать в центре');
  DrawText(0,15,18,5,'экрана синий прямоугольник на бирюзовом фоне');
  DrawText(0,15,18,6,'После последовательно увеличивать размеры до размеров экрана');
  DrawText(1,13,1,7,'Ширина и высота:');
  textcolor(15);
  textbackground(0);
  gotoxy(18,7);
  read(A,b);
  Gd := Detect;
 InitGraph(Gd, Gm,' ');
 if GraphResult <> grOk then
   Halt(1);
 setbkcolor(3);
 Setfillstyle(Solidfill, 1); 
 Bar(getmaxx div 2-a div 2, getmaxy div 2-b div 2,getmaxx div 2+a div 2, getmaxy div 2+b div 2);
 delay(1000);
 repeat
   if a<getmaxx then a:=a+50;
   if b<getmaxy then b:=b+50;
   Bar(getmaxx div 2-a div 2, getmaxy div 2-b div 2,getmaxx div 2+a div 2, getmaxy div 2+b div 2);
 delay(100);
 
 until (A>=getmaxx)AND(B>=getmaxy);
 Repeat
 until keypressed;
 CloseGraph;
end.