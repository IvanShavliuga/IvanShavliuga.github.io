uses PT4;
var a,b,c,n,m: integer;
begin
  Task('if5');          //  ����� ���������
  read(a,b,c);           //  ���� �����
  n:=0;                  //  ���-�� �������������
  m:=0;
  if a > 0 then inc(n);  //  ��������� 1, ���� �����������
  if a < 0 then inc(m);
  if b > 0 then inc(n);  //  --/-/--
  if b < 0 then inc(m);
  if c > 0 then inc(n);  //  --/-/--
  if c < 0 then inc(m);
  write(n,m);              //  ����� ����������
end.

