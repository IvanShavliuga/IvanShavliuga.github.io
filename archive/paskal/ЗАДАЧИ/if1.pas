uses PT4;
var a: integer;
begin
  Task('If1');          //  ����� ���������
  read(a);           //  ���� �����
  if a > 0 then inc(a);  //  ��������� 1, ���� �����������
  write(a);              //  ����� ����������
end.

