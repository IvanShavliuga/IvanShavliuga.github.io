uses PT4;
var i:integer;
    thast,cena,res: real;
begin
  Task('Mix9');
  read(cena);
  for i:=1 to 10 do
  begin
    res:=i*cena/10;
    write(res);
  end;
end.

