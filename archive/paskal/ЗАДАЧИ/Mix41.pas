uses PT4;
var massiv:array[1..30] of integer;
    indexmass,indexpol,kolpol,nelem:integer;
begin
  Task('Mix41');
  read(nelem);
  for indexmass:=1 to nelem do read(massiv[indexmass]);
  indexpol:=0;  // ������ ������������� ���������
  kolpol:=0;    // ����. ���-�� ����������
  for indexmass:=1 to nelem do
  begin
    if (massiv[indexmass]mod 2)=0 then  inc(indexpol)  // ���� ������������� �������
    else
    begin
      if kolpol < indexpol then  // ���� ������� ���. ��������� ������ ����.
         kolpol:=indexpol;
      indexpol:=0;
    end;
  end;
  write(kolpol);
end.

