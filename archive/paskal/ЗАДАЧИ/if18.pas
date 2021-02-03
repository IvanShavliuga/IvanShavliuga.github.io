uses PT4;
var a,b,c: real;
    n:integer;
begin
  Task('if18');
  read(a,b,c);
  if a=b then n:=3;
  if a=c then n:=2;
  if c=b then n:=1;
  write(n);
end.
