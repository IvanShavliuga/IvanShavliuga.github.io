uses PT4;
var x, y:real;            // ���������� �����

begin
  Task('if24');           // ������ ���������
  read(x);              // ���� ���������
  if x<=0 then y:=2*sin(x)
  else         y:=6-x;
  write(y);
end.

