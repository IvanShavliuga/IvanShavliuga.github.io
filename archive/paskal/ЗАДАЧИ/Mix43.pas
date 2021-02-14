uses PT4;
var a,b:array[1..50] of integer;
var i,n,k:integer;
begin
  Task('Mix43');
  readln(n);
  for i:=1 to n do
    read(a[i]);
  for i:=1 to n do
    b[a[i]]:=1;
  k:=0;
  for i:=1 to 50 do
    if b[i]=1 then inc(k);
  writeLn(k);
end.

