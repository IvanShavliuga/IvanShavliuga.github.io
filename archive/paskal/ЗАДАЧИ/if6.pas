uses PT4;
var a,b: real;
begin
  Task('if6');          //  ����� ���������
  read(a,b);           //  ���� �����
  if a > b then
    write(a)              //  ����� ����������
  else
    write(b);
end.

