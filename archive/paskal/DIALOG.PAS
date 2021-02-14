unit DIALOG;
interface
uses crt;
type commands=array[0..24] of string;
{Вывод прямоугольной области с начальными координатами Startx starty И 
конечными координатами Endx endy Цветом Color} 
procedure TextWindow(startx,starty,endx,endy, color:byte);
{Вывод текста s Цветом C фоном B С начальными координатами X,y}
procedure DrawText(b,c,x,y:byte;s:string);
{Ожидание нажатия клавиши}
procedure kbHit;
{Вывод прямоугольной области С рамками с начальными координатами Startx starty И 
конечными координатами Endx endy Цветом рамки C, фоном b и заголовком s } 
procedure ramka(startx,starty,endx,endy,b,c:byte;s:string);
{Окно ввода текста s Цвета c, Фоном b длиной len с начальными координатами x,y}
procedure edit(c,b,x,y,len:byte;var s:string);
{Вывод списка команд strings Цвета C На фоне b Вначальной точке x,y
Возращает номер выбранной команды}
function menu(x,y,color,fon,count:byte;strings:commands) : integer;
{Окно ввода текста  Sдлиной len С пояснением Promt и заголовком caption
Цветом C Фоном b в начальной точке x,y}
procedure input(x,y,c,f,len:byte;CAPTION,promt:STRING;var s:string);
{Вывод окна с заголовком Caption И с сообщением Promt длиной len цветом C Фоном B
В начальной точке x,y}
procedure message(x,y,c,f,len:byte;CAPTION,promt:STRING);
{Вывод строки состояния}
procedure status(s:STRING);
Implementation
procedure TextWindow(startx,starty,endx,endy, color:byte);
var x,y:byte;
      c:char;
begin
  textbackground(color);
  c:=' ';
  for x:=startx to endx do
    for y:=starty to endy do
    begin
      gotoxy(x,y);
      write(c);
    end;
end;
procedure DrawText(b,c,x,y:byte;s:string);
begin
  TextColor(c);
  TextBackground(B);
  gotoxy(x,y);
  write(s);
end;
procedure kbHit;
begin
  repeat
  until KeyPressed;
  {KeyPressed;}
end;
procedure ramka(startx,starty,endx,endy,b,c:byte;s:string);
var x:byte;
begin
  TextColor(c);
  TextBackground(B);
  gotoxy(startx,starty);
  write('*');
  gotoxy(endx,starty);
  write('*');
  gotoxy(startx,endy);
  write('*');
  gotoxy(endx,endy);
  write('*');
  for x:=startx+1 to endx-1 do
  begin
    gotoxy(x,starty);
    write('*');
    gotoxy(x,endy);
    write('*');
  end;
  for x:=starty+1 to endy-1 do
  begin
    gotoxy(startx,x);
    write('*');
    gotoxy(endx,x);
    write('*');
  end;
  textwindow(startx+1,starty+1,endx-1,endy-1,b);
  DrawText(b,c,(endx-startx) div 2-length(s) div 2,starty,s);
end;
procedure edit(c,b,x,y,len:byte;var s:string);
begin
  TextColor(c);
  TextBackground(B);
  textwindow(x,y,len+x,y,b);
  gotoxy(x,y);
  TextColor(c);
  read(S);
  
end;
function menu(x,y,color,fon,count:byte;strings:commands) : integer;
label sled,kon,ex;
var i,key,len,select:integer;
begin
  len:=1;
  for i:=0 to count do
  begin
    if Length(strings[i])>len then
      len:=Length(strings[i]);
  end;
  status('UP-вверх DOWN-вниз HOME-начало END-конец ESC-отмена ENTER-выбор');

  select:=1;
  TextWindow(x,y,len+x,y, 4);
  DrawText(4,15,x,y,strings[0]);
sled:
  TextWindow(x,y+1,len+x,count+y, fon);
  for i:=1 to count do
  begin
    if i<>select then
      DrawText(fon,color,x,y+i,strings[i])
    else
      DrawText(fon,11,x,y+i,strings[i]);
  end;
  gotoxy(1,25);
  i:=ord(readkey);
  case i of
    48..56:
      goto ex;
    72:
      dec(select);
    79:
      select:=count;
    71:
      select:=1;
    80:
      inc(select);
    27:
      select:=-1;
 13,32:
      goto kon;
  end;
  if select=-1 then goto kon;
  if select=0 then select:=1;
  if select>count then select:=count;
  goto sled;
ex:
  select:=i-48;
kon:
  MEnu:=select;

end;
procedure input(x,y,c,f,len:byte;CAPTION,promt:STRING;var s:string);
begin
  TextWindow(x,y,len+x+2,y, 4);
  DrawText(4,15,x,y,caption);
  TextWindow(x,y+1,len+x+2,y+3, f);
  DrawText(f,c,x+1,y+1,promt);
  status('Нажмите ENTER для продолжения'); 
  
  edit(15,0,x+1,y+2,len,s);
end;
procedure message(x,y,c,f,len:byte;CAPTION,promt:STRING);
begin
  TextWindow(x,y,len+x+2,y, 4);
  DrawText(4,15,x,y,caption);
  TextWindow(x,y+1,len+x+2,y+3, f);
  DrawText(f,c,x+1,y+2,promt);
  status('Нажмите любую клавишу'); 
  kbhit;
end;
procedure status(s:STRING);
BEGIN

  textwindow(1,25,79,25,0);
  drawtext(0,15,1,25,s);
end;
end.
