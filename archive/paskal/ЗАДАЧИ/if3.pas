uses PT4;
var a: integer;
begin
  Task('If3');          //  ����� ���������
  read(a);           //  ���� �����
  if a > 0 then inc(a);  //  ��������� 1, ���� �����������
  if a < 0 then a:=a-2;
  if a=0 then a:=10;
  write(a);              //  ����� ����������
end.

