uses PT4;
var a,b,c,m: real;
begin
  Task('Mix4');
  read(a,b,c);
  if a<b  then  m:=a
  else m:=b;
  if m>c then   m:=c;
  write(m);
end.

