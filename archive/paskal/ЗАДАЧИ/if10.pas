uses PT4;
var a,b,n: real;
begin
  Task('if10');          //  ����� ���������
  read(a,b);           //  ���� �����
  if a = b then
  begin
    a:=0;
    b:=0;
  end
  else
  begin
    n:=a+b;
    a:=n;
    b:=n;
  end;
  write(a,b);
end.

