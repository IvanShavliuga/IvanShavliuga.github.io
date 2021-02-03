uses PT4;
var x,y: integer;

begin
  Task('if21');
  read(x,y);
  if(x=0)and(y=0)   then  write('0');
  if(x=0)and(y<>0)  then  write('1');
  if(x<>0)and(y=0)  then  write('2');
  if(x<>0)and(y<>0) then  write('3');

end.
