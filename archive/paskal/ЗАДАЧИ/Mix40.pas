uses PT4;
Var a:array[1..20] of real;        // ������ ������
    i,n:integer;                   // ��������� ����������, ����� ���������
    min:real;                      // ���. �����. �����
begin
  Task('Mix40');                   // ������ ���������
  read(n);                         // ���� ����� ���������
  for i:=1 to n do
    read(a[i]);                    // ���� ��������� �������
  Min:=a[1];                       // ���� ������ �������
  for i:=2 to  n do
    if (a[i]<Min)and(a[i]>0)
       then Min:=a[i];             // ���� ���. ������� ������ ���. (��� 1-�� 0)
  if min<0 then min:=0;            // �����. - 0
  write(Min);                      // ����� ���.
  
end.

