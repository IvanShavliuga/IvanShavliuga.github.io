uses PT4;
var x, y:real;            // координаты точки

begin
  Task('if24');           // запуск задачника
  read(x);              // ввод координат
  if x<=0 then y:=2*sin(x)
  else         y:=6-x;
  write(y);
end.

