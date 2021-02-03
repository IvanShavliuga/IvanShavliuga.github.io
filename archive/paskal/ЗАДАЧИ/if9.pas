uses PT4;
var a,b,n: real;
begin
  Task('if9');          //  Вызов задачника
  read(a,b);           //  Ввод чисел
  if a > b then
  begin
    n:=a;
    a:=b;
    b:=n;
  end;

  write(a,b);
end.

