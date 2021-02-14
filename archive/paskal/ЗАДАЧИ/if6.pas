uses PT4;
var a,b: real;
begin
  Task('if6');          //  Вызов задачника
  read(a,b);           //  Ввод чисел
  if a > b then
    write(a)              //  Вывод результата
  else
    write(b);
end.

