uses PT4;
var a: integer;
begin
  Task('If2');          //  ����� ���������
  read(a);           //  ���� �����
  if a > 0 then inc(a);  //  ��������� 1, ���� �����������
  if a < 0 then a:=a-2;
  write(a);              //  ����� ����������
end.

