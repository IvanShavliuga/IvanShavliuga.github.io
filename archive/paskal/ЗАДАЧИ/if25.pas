uses PT4;
var x, y:real;            // ���������� �����

begin
  Task('if25');           // ������ ���������
  read(x);              // ���� ���������
  if (x<-2)or(x>2) then y:=2*x
  else         y:=-3*x;
  write(y);
end.

