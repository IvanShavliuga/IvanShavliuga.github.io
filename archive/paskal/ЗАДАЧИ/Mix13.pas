uses PT4;
var a,r: real;
    i,n: integer;
begin
  task('mix13');
  read(a,n);
  r:=1;
  for i:=1 to n do
  begin
    r:=r*a;
    write(r);
  end;
end.
