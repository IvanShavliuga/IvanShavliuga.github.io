uses PT4;
var a,b: real;   // Два числа
begin
  Task('Mix2');  // Запуск задачника
  read(a,b);     // Ввод чисел
  if a > b then  // Если a > b
    write(a)     // Вывод наибольшего
  else           // Если b > a
    write(b);    // Вывод наибольшего
end.

