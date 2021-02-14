uses PT4;
var a,b,c,m,n: real;
begin
  Task('if13');
  read(a,b,c);
  //Минимум
  if a<b  then  m:=a
  else m:=b;
  if m>c then   m:=c;
  //Макимум
  if a>b  then  n:=a
  else n:=b;
  if n<c then   n:=c;
  if ((n=a)and(m=b))or((m=a)and(n=b)) then write(c);
  if ((n=a)and(m=c))or((m=a)and(n=c)) then write(b);
  if ((n=c)and(m=b))or((m=c)and(n=b)) then write(a);

end.
