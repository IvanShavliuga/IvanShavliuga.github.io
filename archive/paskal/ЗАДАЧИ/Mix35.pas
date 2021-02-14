uses PT4;
var a,b,c,r1,r2: integer;
function f(var x, y:integer):integer;
var i:integer;
begin
  result:=0;
  for i:=x to y do
    result:=result+i;
end;
begin
  Task('Mix35');
  read(a,b,c);
  r1:=f(a,b);
  r2:=f(b,c);
  write(r1,r2);
end.

