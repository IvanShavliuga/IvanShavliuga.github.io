uses PT4;
var x1, y1:real;            // ���������� �����
    x2, y2:real;            // ���������� �����
    x3, y3:real;            // ���������� �����
    x4, y4:real;            // ���������� �����
    r1, r2:real;
{   x2, y2 *
          / \
  x1, y1 *   \
         |\   *--------*
         | \ /         r2
         |  * x3,y3----*
         |  |
         *r1*
}
begin
  Task('if23');           // ������ ���������
  read(x1,y1,x2,y2,x3,y3);              // ���� ���������
  r1:=x1-x2;
  r2:=y2-y3;
  x4:=x3+r1;
  y4:=y3-r2;
  write(x4,y4);
end.

