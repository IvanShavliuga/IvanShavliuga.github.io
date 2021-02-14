uses PT4;
Var a:array[1..20] of real;        // массив данных
    i,n:integer;                   // индексная переменная, число элементов
    min:real;                      // мин. полож. число
begin
  Task('Mix40');                   // запуск задачника
  read(n);                         // Ввод числа элементов
  for i:=1 to n do
    read(a[i]);                    // Ввод элементов массива
  Min:=a[1];                       // пока первый элемент
  for i:=2 to  n do
    if (a[i]<Min)and(a[i]>0)
       then Min:=a[i];             // Если тек. элемент больше мин. (для 1-го 0)
  if min<0 then min:=0;            // Отриц. - 0
  write(Min);                      // вывод мин.
  
end.

