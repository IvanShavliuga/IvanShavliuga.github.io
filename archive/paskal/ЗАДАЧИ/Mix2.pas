uses PT4;
var a,b: real;   // ��� �����
begin
  Task('Mix2');  // ������ ���������
  read(a,b);     // ���� �����
  if a > b then  // ���� a > b
    write(a)     // ����� �����������
  else           // ���� b > a
    write(b);    // ����� �����������
end.

