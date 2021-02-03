program z7;
uses   dialog,crt;
var symbol:string;
    i:integer;
    r:boolean;
begin
  clrscr;
  TextWindow(1,1,17,8,1);
  TextWindow(18,1,80,8,0);
  DrawText(1,14,1,1,'Разработал:');
  DrawText(0,15,18,1,'Иванов');
  DrawText(1,14,1,2,'Вариант:');
  DrawText(0,15,18,2,'4');
  DrawText(1,14,1,3,'Задание:');
  DrawText(0,15,18,3,'7');
  DrawText(1,14,1,4,'Условие:');
  DrawText(0,15,18,4,'Даны символы S1,.., Sn. Известно, что символ S1 отличен от ');
  DrawText(0,15,18,5,'! и что среди s2, s3,.. есть хотя бы один !. Пусть s1,..sn ');
  DrawText(0,15,18,6,'символы, предшествующие !. Найти среди них НО или ОН.');
  DrawText(1,13,1,7,'Введите символы:');
  DrawText(1,14,1,8,'Результат: ');
  textcolor(15);
  textbackground(0);
  gotoxy(18,7);
  readln(symbol);
  i:=1;
  r:=false;
  while (symbol[i]<>'!')or(i<>length(symbol)) do
  begin
    if ((symbol[i]='Н')and(symbol[i+1]='О'))or((symbol[i]='О')and(symbol[i+1]='Н'))or
((symbol[i]='н')and(symbol[i+1]='о'))or((symbol[i]='о')and(symbol[i+1]='н'))then
    begin
      r:=true;
      break;
    end;
    inc(i);    
  end;
  gotoxy(18,8);
  writeln(r);
end.