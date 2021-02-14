uses PT4;
var a,b,c,d: real;
    n:integer;
begin
  Task('if19');
  read(a,b,c,d);
  n:=4;
  if (a=b)and(a=d) then n:=3;
  if (a=c)and(a=d) then n:=2;
  if (c=b)and(b=d) then n:=1;
  write(n);
end.
