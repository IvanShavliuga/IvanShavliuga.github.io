uses PT4;
var day,mont:integer;
begin
  Task('Mix8');
  read(day,mont);
  case mont of
    1,3,5,7,8,10,12:   // ������, ����, ���,
       if day=31 then  // ����, ������, �������,�������
       begin
         inc(mont);
         day:=0;
       end;
    2: if day=28 then  // �������
       begin
         inc(mont);
         day:=0;
       end;
    4,6,9,11:          // ������,����,��������,������
       if day=30 then
       begin
         inc(mont);
         day:=0;
       end;
  end;
  inc(day);
  if mont>12 then  mont:=1;
  write(day,mont);
end.

