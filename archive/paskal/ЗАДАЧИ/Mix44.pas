uses PT4;
var a,b:array[1..50] of real;
    i,j,n:integer;
begin
  Task('Mix44');
  readln(n);
  for i:=1 to n do
    read(a[i]);
  for i:=1 to n do
  begin
    for j:=i to n do
      b[i]:=b[i]+a[j];
    write(b[i]);
  end;
end.

