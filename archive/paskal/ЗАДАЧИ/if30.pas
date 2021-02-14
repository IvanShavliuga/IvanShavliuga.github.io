uses PT4;
var y: integer;
begin
  Task('if30'); // Çàïóñê çàäà÷íèê
  read(y);      // Ââîä àğãóìåíòà
  if y>=100 then write('Òğåõçíà÷íîå ');
  if (y>=10)and(y<100)   then write('äâóçà÷íîå ');
  if (y<0)and(odd(Y) =false) then write('×åòíîå ÷èñëî');
  if (y<0)and(odd(Y) =true) then write('Íå÷åòíîå ÷èñëî');

end.
