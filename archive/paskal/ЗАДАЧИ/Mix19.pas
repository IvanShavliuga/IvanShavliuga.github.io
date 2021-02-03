uses PT4;
var a,b,r: real;
        i: integer;
begin
  Task('Mix19');
  read(a,b);
  r:=0;
  i:=0;
  while r < a do
  begin
    r:=r+b;
    inc(i);
  end;
  write(abs(i-1));
end.

