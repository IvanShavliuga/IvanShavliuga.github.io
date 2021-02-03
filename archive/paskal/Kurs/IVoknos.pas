{Ivoknos Окна Ввода Вывода Текста В Графическом Режим Ос Мс-Дос
 Разработал: Иванов И. С. 
 Для курсовой работы по дисциплине 
 "Основы алгаритмизации и прграммирования"
 Версия 1.0
 !!!Копирование Текста Запрещенно!!!}

unit Ivoknos;
interface
uses Crt,Graph;
type Ticon=Array[1..32] Of String[32]; {Графическое Изображение Размером 32*32}
type Ivokno=Record {Графическое Окно Ввода Вывода}
  Icons:Array[1..4] Of Ticon; {С Изображениями 4-Х Типов }
  Captions:Array[1..4] Of String; {С Заголовками 4-Х Типов}
  Okindex,  {Тип Окна (О Них Ниже)}
  Left,Top, {Начальные Координаты Iv-Окна}  
  Width,Height:Integer; {Ширина И Высота Iv-Окна}
end;
{Типы Iv-Окон
----------------------------------------------------------
код Типа | Заголовок   | Изображение     | Пояснение
----------------------------------------------------------
1        | hello       | Герб Ртф        | Приветствие
2        | Error       | Знак "Стоп"     | Ошибка
3        | Good Run    | Веселый Дисплей | Успешный Запуск
4        | Information | Строчная Лат. I | Информация
----------------------------------------------------------
инициализация Окна
по Умолчанию:
-------------
тип Окна: 1
начальные Координаты (0,0)
ширина: 250
высота: 60
!!!Обезательно Использовать В Начале Программы!!!}
procedure Initivokno(Var Okno:Ivokno);
{Загружает Изображение Icon Из Файла С Именем Name}
procedure Loadicon(Name:String;Var Icon:Ticon);
{Вывод Изображения Icon В Область Экрана С Начальными Координатами (X,Y)}
procedure Drawicon(X,Y:Byte;Icon:Ticon);
{Вывод Текущего Iv-Окна}
procedure Drawokno(Okno:Ivokno);
{Настройка Iv-Окна
x,Y - Начальные Координаты
w,H - Ширина И Высота
tip - Тип Окна}
procedure Settypeokno(X,Y,W,H,Tip:Integer;Var Okno:Ivokno);
{Анимированное Iv-Окно Вывода Типа Tip.
выводит Строку Сообщения Tt В Центр Экрана}
procedure Message(Tip:Byte;Tt:String);
{Анимированное Iv-Окно Ввода Текста с загоовком caption.
выводит Строку Promt В Центре Экрана.
организует Ввод Текста С Выводом На Экран
до Нажатия Enter, Esc Или Если Введено Более 15 Символов.
возращает
0 - Если Нажата Клавиша Esc
длина слова - Если Нажата Клавиша Enter;
15 - Если Введено Более 15-И Символов
тип Iv-Окна: 1
!!!Для Обеих !!!
размер Окна: 200*60
}
function Input(tip:byte;caption,Promt:String;Var Txt:String):Byte;

implementation
procedure Initivokno(Var Okno:Ivokno);
begin
  With Okno Do
  Begin
  {Заголовки окон}
  Captions[1]:='Hello';
  Captions[2]:='Error';
  Captions[3]:='Good Run';
  Captions[4]:='Information';
  {Загрузка риунков}
  Loadicon('Icon.Ic' ,Icons[1]);
  Loadicon('Error.Ic',Icons[2]);
  Loadicon('Ok.Ic'   ,Icons[3]);
  Loadicon('Info.Ic' ,Icons[4]);
  Okindex:=1;  {Тип}
  Left   :=0;  {Начальные координаты}
  Top    :=0;
  Width  :=250; {Ширина}
  Height :=60;  {Высота}
  End;
end;
procedure Drawokno(Okno:Ivokno);
begin
  With Okno Do
  Begin
  Setfillstyle(Solidfill, 4); {Красный фон у}
  Bar(Left,Top,Left+Width,Top+10); {Заголовка}
  Bar(Left,Top+Height-10,Left+Width,Top+Height);{и строки подсказки}
  Setfillstyle(Solidfill, 7); {Белый фон}
  Bar(Left,Top+10,Left+Width,Top+Height-10);{у рабочего поля}
  Drawicon(Left+5,Top+15,Icons[Okindex]);{Выводим изображение}
  Setcolor(15); {Белым цветом выводим}
  Outtextxy(Left+3,Top+1,Captions[Okindex]); {Заголовок окна}
  Outtextxy(Left+3,Top+Height-8,'Press Enter To Continue');{СТРОКА подсказки}
  End;

end;
procedure Settypeokno(X,Y,W,H,Tip:Integer;Var Okno:Ivokno);
begin
  With Okno Do
  Begin
    Left:=X;
    Top:=Y;
    Width:=W;
    Height:=H;
    Okindex:=Tip;
  End;
end;
procedure Message(Tip:Byte;Tt:String);
var Okno:Ivokno;
    I,J,N,X,Y:Integer;
label Fin;
begin
  X:=Getmaxx Div 2;  {Центр Экрана}
  Y:=Getmaxy Div 2;
  For I:=1 To 3 Do   {Анимация}
  Begin
    Setfillstyle(Solidfill, 4);  {Красным цветом}
    Bar(X-100,Y-10*I,X+100,Y+i*10); {рисуем прямоугольник}
    Sound(I*1000);   {включаем звук}
    Delay(100);      {Ничего не делаем 0.1 сек.}
    Nosound;         {Выключаем звук}
  End;
  Initivokno(Okno);	 {Инициализируем iv-окно}
   {Установка окна шириной 200 высотой 60 в центре экрана}
  Settypeokno(X-100,Y-30,200,60,Tip,Okno);
  {Риуем окно}
  Drawokno(Okno);
  {Вывод Сообщения черным цветом}
  setcolor(0);
  N:=1;   {Номер символа в строке}
  I:=Y-15;{Ордината точки}
  While I<Y+20 Do 
  Begin
    J:=X-60;
    While J<X+90 Do
    Begin
      Outtextxy(J,I,Tt[N]); {Вывод текущего символа}
      J:=J+9;               {абсцисса точки}
      Inc(N);				{следующий символ}
      If N >Length(Tt) Then {Все символы вывели?}
        Goto Fin;			{Да - прекращаем вывод}
    End;
    I:=I+9;{размер символов 8х8}
  End;
fin:{Ожидание Нажатия Клавиши}
  Repeat
  Until (Ord(Readkey)=13)or(Ord(Readkey)=27);

end;
function Input(tip:byte;caption,Promt:String;Var Txt:String):Byte;
var Okno:Ivokno;
    I,N,X,Y:Integer;
    K:Char;
    R:Byte;
begin
  X:=Getmaxx Div 2;{Центр Экрана}
  Y:=Getmaxy Div 2;
 For I:=1 To 3 Do   {Анимация}
  Begin
    Setfillstyle(Solidfill, 4);  {Красным цветом}
    Bar(X-100,Y-10*I,X+100,Y+i*10); {рисуем прямоугольник}
    Sound(I*1000);   {включаем звук}
    Delay(100);      {Ничего не делаем 0.1 сек.}
    Nosound;         {Выключаем звук}
  End;
  Initivokno(Okno);	 {Инициализируем iv-окно}
   {Установка окна шириной 200 высотой 60 в центре экрана}
  Settypeokno(X-100,Y-30,200,60,Tip,Okno);
  okno.captions[tip]:=caption;
  {Риуем окно}
  Drawokno(Okno);
  {Вывод Сообщения черным цветом}
  Setcolor(0);
  Outtextxy(X-60,Y-15,Promt);
  Setfillstyle(Solidfill, 0); {Область ввода}
  Bar(X-60,Y,X+90,Y+10);
  Setcolor(15);
  N:=1;
  Repeat
    {Ожидание Нажатия Клавиши}
    Repeat  
      if n<15 then
      begin
        Outtextxy(X-60+10*(N-1),Y+2,'_');{Вывод курсора}
        Delay(100);
        Bar(X-60+10*(N-1),Y,X-50+10*(N-1),Y+10);{Замазать курсор}
        Delay(100);
      end; 
    Until Keypressed;
    
    K:=Readkey;
    if ord(k)=8 then {backspace}
    begin
      Bar(X-60+10*(N-1),Y,X-50+10*(N-1),Y+10);{Замазать курсор}
      dec(N);
      if n=0 then n:=1;
      Bar(X-60+10*(N-1),Y,X-50+10*(N-1),Y+10);{Замазать курсор}
    end;
    If (K>='A')And(K<='z')and(n<=15) Then
    Begin
      Txt[N]:=K;
      Outtextxy(X-60+10*(N-1),Y+2,'*');
      Insert(K,Txt,N);
      Inc(N);
    End;

  Until ((Ord(K)=13)and(N>15))Or(Ord(K)=27);
  If Ord(K)=13 Then R:=N;
  If Ord(K)=27 Then R:=0;
  If N>15      Then R:=15;
  Input:=R;
end;
procedure Loadicon(Name:String;Var Icon:Ticon);
var Files:Text;
    I:Byte;
begin
 Assign(Files,Name);
 Reset(Files);
 For I:=1 To 32 Do
   Begin
     Read(Files,Icon[I]);
     Readln(Files);
   End;
 Close(Files);
end;
procedure Drawicon(X,Y:Byte;Icon:Ticon);
var I,J:Byte;
begin
 For I:=1 To 32 Do
   Begin
     For J:=1 To 32 Do
       If Icon[I,J] <> '*' Then 
         Putpixel(X+J,I+Y,Ord(Icon[I,J])-48);

   End;
end;

end.{Конец файла}
