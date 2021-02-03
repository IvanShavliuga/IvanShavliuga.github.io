uses PT4;
var a,b,r: real;

begin
  Task('Mix18');
  read(a,b);
  r:=0;
  while r < a do
  begin
    r:=r+b;
  end;
  write(abs(r-a-b));
end.

