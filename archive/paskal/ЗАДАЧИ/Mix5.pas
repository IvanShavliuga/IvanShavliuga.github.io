uses PT4;
var x, y:real;            // ���������� �����
       n:integer;         // ����� ��������
begin
  Task('Mix5');           // ������ ���������
  read(x,y);              // ���� ���������
  if (x>0) and (y>0) then
    n:=1;
  if (x>0) and (y<0) then
    n:=4;
  if (x<0) and (y>0) then
    n:=2;
  if (x<0) and (y<0) then
    n:=3;
  write(n);
end.

