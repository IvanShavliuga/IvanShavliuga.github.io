{��������� �������� �������
 ����������: ������ �. �. 
 ��� �������� ������ �� ���������� 
 "������ �������������� � ���������������"
 ������ 1.0
 !!!����������� ������ ����������!!!}
program password;
uses Graph,ivoknos,parol,crt;
var
 Gd, Gm: Integer;                 {��� ������������� �������}
 x,y,r:integer;                   {��������� ������ ���������� � �� ������}
 cx,cy:integer;                   {����� ������}
 key:char;                        {��� �������}
 cmp:boolean;                     {������ �����?}
label quit;                       {����� ������ ������� ������}
begin
 Gd := Detect;                    {���������� ��� ��������}
 InitGraph(Gd, Gm,' ');           {������������� �������}
 if GraphResult <> grOk then      {�� ����������}
   Halt(1);                       {����� � �������}
 cmp:=getparol;                   {�������� ������}
 if cmp=true then                 {���� ������ �����}
 begin
  Repeat                          {������ ������}
   cleardevice;                   {������� �����}
   cx:=getmaxx div 2;             {��������� ����� ������}
   cy:=getmaxy div 2;
   randomize;                     {�������������� ��������� ����. �����}
   repeat
     setcolor(random(16));        {���������� ����}
     x:=random(cx);               {��������� ������ ����������}
     y:=random(cy);
     r:=random(100);              {������ ����������}
     circle(cx-x,cy-y,r);         {���������}
     circle(cx+x,cy-y,r);
     circle(cx-x,cy+y,r);
     circle(cx+x,cy+y,r);
     delay(100);                  {���������}
     Setfillstyle(Solidfill, 4);  {��� ������}
     Bar(0,0,cx*2,10);            {��� ���������}
     Bar(0,cy*2-10,cx*2,getmaxy); {����� ���������}
     setcolor(15);                {���������� ����}
     outtextxy(5,1,'Password.exe');{��� ���������}
                                  {������ ���������}
     outtextxy(5,cy+cy-9,'space - change password i - information of program  esc - exit');
   until keypressed;              {���� �� ������ �������}
   key:=readkey;                  {������� ��� �������}
   case ord(key) of               {��� ������?}
     27: goto quit;               {����� ���� ESC=27}
     32: newparol;                {�������� ������ ���� ������}
ord('i'):                    {���������� � ���������}
       message(4,'  Radio technical faculty polotsk state university   Ivanov 06-IT-2')
    else                          {�� �� �������}
    begin
      sound(1000);                {����}
      delay(100);                 {���������}
      nosound;                    {��������� ����}
    end;
   end;
   until false;                    {������}

 end
 else                             {������ �������}
   message(2,'Password invalid'); {��������� �� ������}
quit:                             {����� ������}
 CloseGraph;                      {������� ����������� �����}

end.