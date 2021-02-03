uses PT4;
var a,b: real;   // Два числа
begin
  Task('Mix3');  // Запуск задачника
  read(a,b);     // Ввод чисел
  if a > b then  // Если a > b
  begin
    write(a);    // Вывод наибольшего
    write(b);    // Вывод наименьшего
  end
  else           // Если b > a
  begin
    write(b);    // Вывод наибольшего
    write(a);    // Вывод наименьшего
  end
end.

