uses PT4;
var a,b,c,n: integer;
begin
  Task('Mix1');          //  ����� ���������
  read(a,b,c);           //  ���� �����
  n:=0;                  //  ���-�� �������������
  if a > 0 then inc(n);  //  ��������� 1, ���� �����������
  if b > 0 then inc(n);  //  --/-/--
  if c > 0 then inc(n);  //  --/-/--
  write(n);              //  ����� ����������
end.

