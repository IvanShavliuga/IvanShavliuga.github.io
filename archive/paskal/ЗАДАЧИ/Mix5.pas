uses PT4;
var x, y:real;            // координаты точки
       n:integer;         // номер четверти
begin
  Task('Mix5');           // запуск задачника
  read(x,y);              // ввод координат
  if (x>0) and (y>0) then
    n:=1;
  if (x>0) and (y<0) then
    n:=4;
  if (x<0) and (y>0) then
    n:=2;
  if (x<0) and (y<0) then
    n:=3;
  write(n);
end.

