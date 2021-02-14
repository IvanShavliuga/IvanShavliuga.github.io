uses PT4;
var a,b: real;
begin
  Task('if8');          //  Вызов задачника
  read(a,b);           //  Ввод чисел
  if a > b then
    write(a,b)              //  Вывод результата
  else
    write(b,a);
end.


