uses PT4;
var massiv:array[1..20]  of real;
var index,nelem:integer;
begin
  Task('Mix42');
  read(nelem);
  for index:=1 to nelem do read(massiv[index]);
  for index:=nelem downto 1 do write(massiv[index]);
end.

