uses PT4;
var a,b: real;
begin
  Task('if8');          //  ����� ���������
  read(a,b);           //  ���� �����
  if a > b then
    write(a,b)              //  ����� ����������
  else
    write(b,a);
end.


