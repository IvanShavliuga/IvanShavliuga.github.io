{Для работы с паролем
 Разработал: Иванов И. С. 
 Для курсовой работы по дисциплине 
 "Основы алгаритмизации и прграммирования"
 Версия 1.0
 !!!Копирование Текста Запрещенно!!!}
unit parol;                    {Модуль пароль}
interface
uses crt,ivoknos;              {Подключение модулей Crt и разработанного 
                                мной ivoknos}
function getparol:boolean;     {Узнать пароль}
procedure newparol;            {Установить пароль}
Implementation
function getparol:boolean;     {Узнать пароль}
var pass,right:string;         {Введенная строка, верный пароль}
    ret,i:byte;                {Длина введенной строки, индексная переменная}
    x:byte;                    {Для кодирования}
    result:boolean;            {Результат работы функции}
    f:text;                    {Файловая переменная}
    p:char;                    {Для кодирования}
begin
 {Вводим через Iv-окно(ivoknos.pas)}
  ret:=input(3,'Hello','Password(15 chars)',pass);
  if ret<>0 then               {Не нажали Esc?}
  begin
    assign(f,'parol.dat');     {Связать f с файлом parol.dat}
    reset(f);                  {Открыть файл для чтения}
    readln(f,right);           {Считываем верный пароль из файла}
    close(f);                  {Закрыть файл}
    {Шифровка и сравнение введенной строки}
    result:=true;              {Допустим, что строки равны}
    for i:=1 to ret do         {Каждый символ с каждым сравнивается}
    begin
      right[i]:=upcase(right[i]);{Переводим в верхний регистр}
      pass[i]:=upcase(pass[i]);
      {Шифровка введенной строки}
      x:=ord(pass[i])-ord('A');{Перевод символа в код, где 'A' -- 0}
      inc(x,5);				   {Используем метод Цезаря}
      if x>26 then x:=x-26;    {Перебор!}
      p:=chr(x+ord('A'));      {Преобразуем в символ}
      if p<>right[i] then      {Не равны символы двух строк}
      begin
        result:=false;         {Прощай взломщик!!!}
        break;
      end;                     {конец сравнения текущих символов}
    end;                       {конец цикла проверки}
  end;                         {конец обработки функии input}
  getparol:=result;            {Передаю управление Password.pas}
end;
procedure newparol;            {Установить пароль}
var 
   password,right:string;      {Введенная строка, верный пароль}
    ret,i:byte;                {Длина введенной строки, индексная переменная}
    x:byte;                    {Для кодирования}
    f:text;                    {Файловая переменная}
    p:char;                    {Для кодирования}
begin
  {Вводим через Iv-окно(ivoknos.pas) новый пароль}
  ret:=input(1,'New password','password(15 chars)',password); 
  if ret=0 then exit;          {Нажали Esc}
  {Вводим через Iv-окно(ivoknos.pas) повтор для проверки}
  ret:=input(1,'Retry password','password(15 chars)',right);
  if ret=0 then exit;          {Нажали Esc}
  for i:=1 to ret do           {Равны оба ввода}
    if right[i]<>password[i] then 
    begin                      {А-а! неравны! Выводим сообщение об ошибке}
      message(2,'Password not change');
      exit;                    {передаю управление password.pas}
    end;
  assign(f,'parol.dat');       {Связать f с файлом parol.dat}
  rewrite(f);                  {Открыть файл для записи}
  for i:=1 to ret do           {Шифруем и зписываем каждый символ}
  begin
    right[i]:=upcase(right[i]);{Переводим в верхний регистр}
    {шифровка}
    x:=ord(right[i])-ord('A'); {Перевод символа в код, где 'A' -- 0}
    inc(x,5);                  {Используем метод Цезаря}
    if x>26 then x:=x-26;      {Многовато будет}
    write(f,chr(x+ord('A')));  {Ну записываю }
  end;
  writeln(f);                  {Конец строки}
  close(f);                    {Закрыть файл}
end;                           {передаю управление password.pas}
end.                           {конец модуля}
