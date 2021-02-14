uses PT4;
var n,i,s:integer;
begin
  Task('Mix22');
  read(n);
  s:=0;
  i:=1;
  while s<= n do
  begin
    s:=s+i;
    inc(i);
  end;
  write(i-1,s);
end.

