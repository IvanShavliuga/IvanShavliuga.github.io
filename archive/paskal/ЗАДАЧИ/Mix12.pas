uses PT4;
var a,r: real;
    i,n: integer;
begin
  Task('Mix12');
  read(a,n);
  r:=1;
  for i:=1 to n do
    r:=r*a;
  write(r);
end.

