uses PT4;
var a,b,c,m,n: real;
begin
  Task('if14');
  read(a,b,c);
  //Минимум
  if a<b  then  m:=a
  else m:=b;
  if m>c then   m:=c;
  //Макимум
  if a>b  then  n:=a
  else n:=b;
  if n<c then   n:=c;
  write(m,n);

end.
