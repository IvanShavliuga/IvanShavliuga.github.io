uses PT4;
var a,b,c,r1,r2: real;

begin
  Task('if20');
  read(a,b,c);
  r1:=abs(a-b);
  r2:=abs(a-c);
  if r1<r2 then write(b,r1)
  else          write(c,r2);

end.
