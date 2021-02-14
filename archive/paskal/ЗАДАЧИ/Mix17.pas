uses PT4;

var y,x    :real;
    i,n,k,p:integer;
begin
  Task('Mix17');
  read(n,k);
  y:=0;

  for i:=1 to n do
  begin
    x:=1;
    for p:=1 to k do
     x:=x*i;
    y:=y+x;
  end;
  write(y);
end.

