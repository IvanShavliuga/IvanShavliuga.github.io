uses PT4;
var i,n,z:integer;
    p:real;
begin
  Task('Mix10');
  read(n);
  p:=0;
  z:=1;
  for i:=1 to n do
  begin
    p:=p+z*(i/10+1);
    z:=-z;
  end;
  write(p);
end.

