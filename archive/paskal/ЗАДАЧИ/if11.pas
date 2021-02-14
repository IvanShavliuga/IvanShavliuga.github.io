uses PT4;
var a,b,n: real;
begin
  Task('if11');          //  Вызов задачника
  read(a,b);           //  Ввод чисел
  if a = b then
  begin
    a:=0;
    b:=0;
  end
  else
  begin
    if a>b then
      n:=a
    else
      n:=b;
    a:=n;
    b:=n;
  end;
  write(a,b);
end.
