uses PT4;
var x: real;  // Аргумент и значение функции
    y,n: integer;
begin
  Task('if27'); // Запуск задачник
  read(x);      // Ввод аргумента
  n:=Trunc(x);
  if odd(n)=true then y:=-1
  else                Y:=1;
  if x<=0 then
    y:=0;
  write(y);
end.
