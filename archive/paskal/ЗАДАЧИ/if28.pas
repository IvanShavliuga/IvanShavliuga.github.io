uses PT4;
var y: integer;
begin
  Task('if28'); // ������ ��������
  read(y);      // ���� ���������
  if (y mod 100 =0)and(y mod 400 <>0) then write('365');
  if (y mod 400 =0)or(y mod 4=0)and(y mod 100 <>0) then write('366');
end.
