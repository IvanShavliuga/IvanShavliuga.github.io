uses PT4;
var data:array[1..3,1..3] of real;
    i:integer;
procedure SP(var a, s, p: real);
begin
  s:=a*a*sqrt(3)/4;
  p:=a*3;
end;
begin
  Task('Mix33');
  for i:=1 to 3 do
  begin
    read(data[i,1]);
    SP(data[i,1],data[i,2],data[i,3]);
  end;
  for i:=1 to 3 do
  begin
    write(data[i,3],data[i,2]);
  end;
end.

