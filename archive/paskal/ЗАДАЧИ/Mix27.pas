uses PT4;
var a: Array[1..30] of integer;   // ������ ������
    i,n,k,q: integer;             // ��������� ����������, ���-�� ��������� � �������
                                  // �������� �����, ��������� - ����� �������� > k
begin
  Task('Mix27');                  // ������ ���������
  read(k);                        // ���� ����� k
  i:=1;                           // ������������� �������� ����������
  repeat
    read(a[i]);                   // ���� �������� �������
    inc(i);                       // ���������� �� 1
  until a[i-1]=0;                 // ���� ����� 0 - �������
  n:=i-1;                         // ���-�� ���������
  q:=0;                           // ����� �������� ������� > k
  for i:=1 to n do                // ��������� ��� ��������
  begin
    if a[i] > k then              // ���� i-�� ������� > k
    begin
      q:=i;                       // ���������� ����� ����� �������
      break;                      // ������� �� �����
    end;
  end;
  write(q);                       // �������� ���������
end.

