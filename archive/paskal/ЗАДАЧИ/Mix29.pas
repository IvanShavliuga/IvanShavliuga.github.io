uses PT4;
var a:array[1..50] of real;        // ������� ������
    c: array[1..60] of real;
    b: real;                       // �������� ����� b
    n,i,j: integer;                // ����� ��������� �������, ��������� ����������
    f: boolean;                    // ����, �������� ����� ��� ���
begin
  Task('Mix29');                   // ������ ���������
  read(b,n);                       // ���� ����� b,n
  for i:=1 to n do
    read(a[i]);                    // ���� �������� �������
  j:=n+1;                          // ������������� ������ ��������������� �������� �������
  f:=false;                        // ����� ��� �� ���������
  for i:=n downto 1 do
  begin
    if (b > a[i])and(f=false) then // ���� b>a[i] � �� ��� �� ��������
    begin
      c[j]:=b;                     // �� ���������� ��� � �������������� ������
      dec(j);                      // ��������� ����� ��������������� �������� �������
      f:=true;                     // ���������, ��� �� ��� �������
    end;
    c[j]:=a[i];                    // ����� � �������������� ������ a[i]
    dec(j);                        // ��������� ����� ��������������� �������� �������
  end;
  if f=false then c[1]:=b;         // ���������� � �������������� ������ b, ���� �� ��������
                                   // � �����
  for i:=1 to n+1 do
    write(c[i]);                  // ����� �������� �������

end.

