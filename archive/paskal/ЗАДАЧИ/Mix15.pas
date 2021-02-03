uses PT4;
var y,x:real;
    i,n:integer;
begin
  Task('Mix15');
  read(n);
  y:=0;
  x:=1;
  for i:=1 to n do
  begin
    x:=x*i;
    y:=y+x;
  end;
  write(y);
end.

