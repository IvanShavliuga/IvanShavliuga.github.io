uses PT4;
var x,y: real;  // �������� � �������� �������
begin
  Task('Mix6'); // ������ ��������
  read(x);      // ���� ���������
  if x<=0 then
    y:=-x;
  if (x>0)and(x<2) then
    y:=x*x;
  if x>=2 then
    y:=4;
  write(y);
end.

