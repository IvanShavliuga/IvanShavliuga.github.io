uses PT4;
var y: integer;
begin
  Task('if29'); // Запуск задачник
  read(y);      // Ввод аргумента
  if y=0 then write('Нулевое число');
  if (y<0)and(odd(Y) =false) then write('Четное отрицательное число');
  if (y<0)and(odd(Y) =true) then write('Нечетное отрицательное число');
  if (y>0)and(odd(Y) =false) then write('Четное положительное число');
  if (y<>0)and(odd(Y) =true) then write('Нечетное положительное число');
end.
