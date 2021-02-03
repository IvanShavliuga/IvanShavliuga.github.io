uses PT4;
var i,b: integer;
        r: boolean;
begin
  Task('Mix20');
  read(b);
  r:=false;
  i:=3;
  while i<b do
    i:=i*3;
  if (i=b)or(b=1)  then r:=true
  else                  r:=false;
  write(r);
end.

