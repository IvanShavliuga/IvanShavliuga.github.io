uses PT4;
var a,b,c,n,i:integer;
begin
  Task('Mix16');
  read(n);
  a:=1;
  b:=1;
  write(a,b);
  for i:=3 to n do
  begin
    c:=a+b;
    a:=b;
    b:=c;
    write(c);
  end;
end.

