uses PT4;
var a,b,c,n,m: integer;
begin
  Task('if5');          //  Вызов задачника
  read(a,b,c);           //  Ввод чисел
  n:=0;                  //  Кол-во положительных
  m:=0;
  if a > 0 then inc(n);  //  Прирасить 1, если полжиельное
  if a < 0 then inc(m);
  if b > 0 then inc(n);  //  --/-/--
  if b < 0 then inc(m);
  if c > 0 then inc(n);  //  --/-/--
  if c < 0 then inc(m);
  write(n,m);              //  Вывод результата
end.

