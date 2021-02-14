uses PT4;
var n,i,s:integer;
begin
  Task('Mix23');
  read(n);
  s:=0;
  i:=1;
  repeat
    s:=s+i;
    inc(i);
  until s>n;
  write(i-1,s);
end.

