uses PT4;
var a: integer;
begin
  Task('If1');          //  Вызов задачника
  read(a);           //  Ввод чисел
  if a > 0 then inc(a);  //  Прирасить 1, если полжиельное
  write(a);              //  Вывод результата
end.

