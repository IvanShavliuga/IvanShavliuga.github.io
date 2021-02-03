uses PT4;
var i,n:integer;
    r  :real;
begin
  Task('Mix14');
  read(n);
  r:=1;
  for i:=1 to n do
    r:=r*i;
  write(r);
end.

