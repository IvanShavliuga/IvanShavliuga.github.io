uses PT4;
var r,n:integer;
begin
  Task('Mix21');
  read(n);
  r:=0;
  while r*r<=n do inc(r);
  write(r);
end.

