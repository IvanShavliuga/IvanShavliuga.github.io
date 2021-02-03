uses PT4;
var a: integer;
begin
  Task('If2');          //  Вызов задачника
  read(a);           //  Ввод чисел
  if a > 0 then inc(a);  //  Прирасить 1, если полжиельное
  if a < 0 then a:=a-2;
  write(a);              //  Вывод результата
end.

