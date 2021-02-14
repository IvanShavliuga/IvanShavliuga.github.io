uses PT4;
var a,b,c,m,n: real;
begin
  Task('if15');
  read(a,b,c);
  //min
  if a<b  then  n:=a
  else n:=b;
  if n>c then  n:=c;
  if n=c then  m:=a+b;
  if n=a then  m:=b+c;
  if n=b then  m:=a+b;
  write(m);
end.
