uses PT4;
var a,b: real;
begin
  Task('if7');          //  Вызов задачника
  read(a,b);           //  Ввод чисел
  if a > b then
    write('2')              //  Вывод результата
  else
    write('1');
end.

