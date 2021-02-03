uses PT4;
var str:string;
    r,i:integer;
    x,y:integer;
begin
  Task('Mix76');
  read(str);
  y:=0;
  x:=0;
  for i:=1 to length(str)div 2+1 do
  begin
    case str[2*i-1] of
      '0': r:=0;
      '1': r:=1;
      '2': r:=2;
      '3': r:=3;
      '4': r:=4;
      '5': r:=5;
      '6': r:=6;
      '7': r:=7;
      '8': r:=8;
      '9': r:=9;
    end;
    case str[2*i-2] of
      '+':  y:=y+r;
      '-':  y:=y-r;
      else  y:=y+r;
    end;
  end;
  write(y);
end.

