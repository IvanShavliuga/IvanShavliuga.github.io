{��� ������ � �������
 ����������: ������ �. �. 
 ��� �������� ������ �� ���������� 
 "������ �������������� � ���������������"
 ������ 1.0
 !!!����������� ������ ����������!!!}
unit parol;                    {������ ������}
interface
uses crt,ivoknos;              {����������� ������� Crt � �������������� 
                                ���� ivoknos}
function getparol:boolean;     {������ ������}
procedure newparol;            {���������� ������}
Implementation
function getparol:boolean;     {������ ������}
var pass,right:string;         {��������� ������, ������ ������}
    ret,i:byte;                {����� ��������� ������, ��������� ����������}
    x:byte;                    {��� �����������}
    result:boolean;            {��������� ������ �������}
    f:text;                    {�������� ����������}
    p:char;                    {��� �����������}
begin
 {������ ����� Iv-����(ivoknos.pas)}
  ret:=input(3,'Hello','Password(15 chars)',pass);
  if ret<>0 then               {�� ������ Esc?}
  begin
    assign(f,'parol.dat');     {������� f � ������ parol.dat}
    reset(f);                  {������� ���� ��� ������}
    readln(f,right);           {��������� ������ ������ �� �����}
    close(f);                  {������� ����}
    {�������� � ��������� ��������� ������}
    result:=true;              {��������, ��� ������ �����}
    for i:=1 to ret do         {������ ������ � ������ ������������}
    begin
      right[i]:=upcase(right[i]);{��������� � ������� �������}
      pass[i]:=upcase(pass[i]);
      {�������� ��������� ������}
      x:=ord(pass[i])-ord('A');{������� ������� � ���, ��� 'A' -- 0}
      inc(x,5);				   {���������� ����� ������}
      if x>26 then x:=x-26;    {�������!}
      p:=chr(x+ord('A'));      {����������� � ������}
      if p<>right[i] then      {�� ����� ������� ���� �����}
      begin
        result:=false;         {������ ��������!!!}
        break;
      end;                     {����� ��������� ������� ��������}
    end;                       {����� ����� ��������}
  end;                         {����� ��������� ������ input}
  getparol:=result;            {������� ���������� Password.pas}
end;
procedure newparol;            {���������� ������}
var 
   password,right:string;      {��������� ������, ������ ������}
    ret,i:byte;                {����� ��������� ������, ��������� ����������}
    x:byte;                    {��� �����������}
    f:text;                    {�������� ����������}
    p:char;                    {��� �����������}
begin
  {������ ����� Iv-����(ivoknos.pas) ����� ������}
  ret:=input(1,'New password','password(15 chars)',password); 
  if ret=0 then exit;          {������ Esc}
  {������ ����� Iv-����(ivoknos.pas) ������ ��� ��������}
  ret:=input(1,'Retry password','password(15 chars)',right);
  if ret=0 then exit;          {������ Esc}
  for i:=1 to ret do           {����� ��� �����}
    if right[i]<>password[i] then 
    begin                      {�-�! �������! ������� ��������� �� ������}
      message(2,'Password not change');
      exit;                    {������� ���������� password.pas}
    end;
  assign(f,'parol.dat');       {������� f � ������ parol.dat}
  rewrite(f);                  {������� ���� ��� ������}
  for i:=1 to ret do           {������� � ��������� ������ ������}
  begin
    right[i]:=upcase(right[i]);{��������� � ������� �������}
    {��������}
    x:=ord(right[i])-ord('A'); {������� ������� � ���, ��� 'A' -- 0}
    inc(x,5);                  {���������� ����� ������}
    if x>26 then x:=x-26;      {��������� �����}
    write(f,chr(x+ord('A')));  {�� ��������� }
  end;
  writeln(f);                  {����� ������}
  close(f);                    {������� ����}
end;                           {������� ���������� password.pas}
end.                           {����� ������}
