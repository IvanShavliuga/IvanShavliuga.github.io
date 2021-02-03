uses PT4;
var a,b,c,m,n: real;
begin
  Task('if17');
  read(a,b,c);
  if ((a<b)and(b<c))or((c<b)and(b<a)) then
  begin
    a:=2*a;
    b:=2*b;
    c:=2*c;
  end
  else
  begin
    a:=-a;
    b:=-b;
    c:=-c;
  end;
  write(a,b,c);
end.
