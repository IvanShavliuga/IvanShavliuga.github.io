{программа проверка доступа
 Разработал: Иванов И. С. 
 Для курсовой работы по дисциплине 
 "Основы алгаритмизации и прграммирования"
 Версия 1.0
 !!!Копирование Текста Запрещенно!!!}
program password;
uses Graph,ivoknos,parol,crt;
var
 Gd, Gm: Integer;                 {Для инициализации графики}
 x,y,r:integer;                   {Положение центра окружности и ее радиус}
 cx,cy:integer;                   {Центр экрана}
 key:char;                        {Код клавиши}
 cmp:boolean;                     {Пароль верен?}
label quit;                       {Метка выхода повтора вывода}
begin
 Gd := Detect;                    {Определяем тип монитора}
 InitGraph(Gd, Gm,' ');           {Инициализация графики}
 if GraphResult <> grOk then      {Не получилось}
   Halt(1);                       {Выход с ошибкой}
 cmp:=getparol;                   {спросить пароль}
 if cmp=true then                 {Если пароль верен}
 begin
  Repeat                          {повтор вывода}
   cleardevice;                   {очищаем экран}
   cx:=getmaxx div 2;             {Вычисляем центр экрана}
   cy:=getmaxy div 2;
   randomize;                     {Инициализируем генератор случ. чисел}
   repeat
     setcolor(random(16));        {Установить цвет}
     x:=random(cx);               {Положение центра окружности}
     y:=random(cy);
     r:=random(100);              {Радиус окружности}
     circle(cx-x,cy-y,r);         {Симметрия}
     circle(cx+x,cy-y,r);
     circle(cx-x,cy+y,r);
     circle(cx+x,cy+y,r);
     delay(100);                  {Заморозка}
     Setfillstyle(Solidfill, 4);  {Для помощи}
     Bar(0,0,cx*2,10);            {Имя программы}
     Bar(0,cy*2-10,cx*2,getmaxy); {Стока подсказки}
     setcolor(15);                {Установить цвет}
     outtextxy(5,1,'Password.exe');{Имя программы}
                                  {Строка подсказки}
     outtextxy(5,cy+cy-9,'space - change password i - information of program  esc - exit');
   until keypressed;              {Пока не нажата клавиша}
   key:=readkey;                  {Считать код клавиши}
   case ord(key) of               {Что нажали?}
     27: goto quit;               {Выход если ESC=27}
     32: newparol;                {Изменить пароль если пробел}
ord('i'):                    {Информация о программе}
       message(4,'  Radio technical faculty polotsk state university   Ivanov 06-IT-2')
    else                          {Не та клавиша}
    begin
      sound(1000);                {звук}
      delay(100);                 {Заморозка}
      nosound;                    {Отключить звук}
    end;
   end;
   until false;                    {Повтор}

 end
 else                             {Пароль неверен}
   message(2,'Password invalid'); {Сообщение об ошибке}
quit:                             {Метка выхода}
 CloseGraph;                      {Закрыть графический режим}

end.