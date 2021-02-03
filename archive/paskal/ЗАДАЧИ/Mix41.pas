uses PT4;
var massiv:array[1..30] of integer;
    indexmass,indexpol,kolpol,nelem:integer;
begin
  Task('Mix41');
  read(nelem);
  for indexmass:=1 to nelem do read(massiv[indexmass]);
  indexpol:=0;  // Счетик положительных элементов
  kolpol:=0;    // макс. кол-во переменных
  for indexmass:=1 to nelem do
  begin
    if (massiv[indexmass]mod 2)=0 then  inc(indexpol)  // есть положительный элемент
    else
    begin
      if kolpol < indexpol then  // Если счетчик пол. элементов больше макс.
         kolpol:=indexpol;
      indexpol:=0;
    end;
  end;
  write(kolpol);
end.

