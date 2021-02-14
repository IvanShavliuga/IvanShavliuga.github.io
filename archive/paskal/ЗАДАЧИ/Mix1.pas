uses PT4;
var a,b,c,n: integer;
begin
  Task('Mix1');          //  Вызов задачника
  read(a,b,c);           //  Ввод чисел
  n:=0;                  //  Кол-во положительных
  if a > 0 then inc(n);  //  Прирасить 1, если полжиельное
  if b > 0 then inc(n);  //  --/-/--
  if c > 0 then inc(n);  //  --/-/--
  write(n);              //  Вывод результата
end.

