uses PT4;
var x: real;  // �������� � �������� �������
    y,n: integer;
begin
  Task('if27'); // ������ ��������
  read(x);      // ���� ���������
  n:=Trunc(x);
  if odd(n)=true then y:=-1
  else                Y:=1;
  if x<=0 then
    y:=0;
  write(y);
end.
