uses PT4;
var a,b: real;   // ��� �����
begin
  Task('Mix3');  // ������ ���������
  read(a,b);     // ���� �����
  if a > b then  // ���� a > b
  begin
    write(a);    // ����� �����������
    write(b);    // ����� �����������
  end
  else           // ���� b > a
  begin
    write(b);    // ����� �����������
    write(a);    // ����� �����������
  end
end.

