uses PT4;
var x, y:real;            // координаты точки

begin
  Task('if25');           // запуск задачника
  read(x);              // ввод координат
  if (x<-2)or(x>2) then y:=2*x
  else         y:=-3*x;
  write(y);
end.

