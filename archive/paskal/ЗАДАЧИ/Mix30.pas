uses PT4;
var a: array[1..20] of integer;    // ������ ������
    i,n,k: integer;                // ��������� ����������, ���-�� �����, ���������
begin
  Task('Mix30');                   // ������ ���������
  read(n);                         // ���� n - ����� ��������� �������
  for i:=1 to n do
    read(a[i]);                    // ���� �������� �������
  k:=0;                            // ������������� �������� ���������, ������� ����������
  for i:=2 to n do                 // ��������� �������� �������, ������� �� �������
  begin
    if a[i] < a[i-1] then          // ���� ������� ������� ������ �����������
    begin
      write(a[i]);                 // �� �������� ���
      inc(k);                      // ��������� k �������
    end;
  end;
  write(k);                        // �������� �������� ��������
end.

