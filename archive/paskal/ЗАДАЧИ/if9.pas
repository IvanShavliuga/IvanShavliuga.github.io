uses PT4;
var a,b,n: real;
begin
  Task('if9');          //  ����� ���������
  read(a,b);           //  ���� �����
  if a > b then
  begin
    n:=a;
    a:=b;
    b:=n;
  end;

  write(a,b);
end.

