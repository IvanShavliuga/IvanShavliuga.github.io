uses PT4;
var y: integer;
begin
  Task('if29'); // ������ ��������
  read(y);      // ���� ���������
  if y=0 then write('������� �����');
  if (y<0)and(odd(Y) =false) then write('������ ������������� �����');
  if (y<0)and(odd(Y) =true) then write('�������� ������������� �����');
  if (y>0)and(odd(Y) =false) then write('������ ������������� �����');
  if (y<>0)and(odd(Y) =true) then write('�������� ������������� �����');
end.
