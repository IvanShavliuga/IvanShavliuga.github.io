uses PT4;
var a:array[1..20] of integer;           // суммы слобцов строки
    x,y,k,n,w: integer;                  // текущие координаты, кол-во строчек,столбцов
                                         // текущий элемент
begin
  Task('Mix32');
  read(k,n);
  for y:=1 to k do
  begin
     for x:= 1 to  n do
     begin
       read(w);
       a[y]:=a[y]+w;
     end;
  end;
  for y:=1 to k do
  begin
     write(a[y]);
  end;

end.

