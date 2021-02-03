{Ivoknos ���� ����� ������ ������ � ����������� ����� �� ��-���
 ����������: ������ �. �. 
 ��� �������� ������ �� ���������� 
 "������ �������������� � ���������������"
 ������ 1.0
 !!!����������� ������ ����������!!!}

unit Ivoknos;
interface
uses Crt,Graph;
type Ticon=Array[1..32] Of String[32]; {����������� ����������� �������� 32*32}
type Ivokno=Record {����������� ���� ����� ������}
  Icons:Array[1..4] Of Ticon; {� ������������� 4-� ����� }
  Captions:Array[1..4] Of String; {� ����������� 4-� �����}
  Okindex,  {��� ���� (� ��� ����)}
  Left,Top, {��������� ���������� Iv-����}  
  Width,Height:Integer; {������ � ������ Iv-����}
end;
{���� Iv-����
----------------------------------------------------------
��� ���� | ���������   | �����������     | ���������
----------------------------------------------------------
1        | hello       | ���� ���        | �����������
2        | Error       | ���� "����"     | ������
3        | Good Run    | ������� ������� | �������� ������
4        | Information | �������� ���. I | ����������
----------------------------------------------------------
������������� ����
�� ���������:
-------------
��� ����: 1
��������� ���������� (0,0)
������: 250
������: 60
!!!����������� ������������ � ������ ���������!!!}
procedure Initivokno(Var Okno:Ivokno);
{��������� ����������� Icon �� ����� � ������ Name}
procedure Loadicon(Name:String;Var Icon:Ticon);
{����� ����������� Icon � ������� ������ � ���������� ������������ (X,Y)}
procedure Drawicon(X,Y:Byte;Icon:Ticon);
{����� �������� Iv-����}
procedure Drawokno(Okno:Ivokno);
{��������� Iv-����
x,Y - ��������� ����������
w,H - ������ � ������
tip - ��� ����}
procedure Settypeokno(X,Y,W,H,Tip:Integer;Var Okno:Ivokno);
{������������� Iv-���� ������ ���� Tip.
������� ������ ��������� Tt � ����� ������}
procedure Message(Tip:Byte;Tt:String);
{������������� Iv-���� ����� ������ � ��������� caption.
������� ������ Promt � ������ ������.
���������� ���� ������ � ������� �� �����
�� ������� Enter, Esc ��� ���� ������� ����� 15 ��������.
���������
0 - ���� ������ ������� Esc
����� ����� - ���� ������ ������� Enter;
15 - ���� ������� ����� 15-� ��������
��� Iv-����: 1
!!!��� ����� !!!
������ ����: 200*60
}
function Input(tip:byte;caption,Promt:String;Var Txt:String):Byte;

implementation
procedure Initivokno(Var Okno:Ivokno);
begin
  With Okno Do
  Begin
  {��������� ����}
  Captions[1]:='Hello';
  Captions[2]:='Error';
  Captions[3]:='Good Run';
  Captions[4]:='Information';
  {�������� �������}
  Loadicon('Icon.Ic' ,Icons[1]);
  Loadicon('Error.Ic',Icons[2]);
  Loadicon('Ok.Ic'   ,Icons[3]);
  Loadicon('Info.Ic' ,Icons[4]);
  Okindex:=1;  {���}
  Left   :=0;  {��������� ����������}
  Top    :=0;
  Width  :=250; {������}
  Height :=60;  {������}
  End;
end;
procedure Drawokno(Okno:Ivokno);
begin
  With Okno Do
  Begin
  Setfillstyle(Solidfill, 4); {������� ��� �}
  Bar(Left,Top,Left+Width,Top+10); {���������}
  Bar(Left,Top+Height-10,Left+Width,Top+Height);{� ������ ���������}
  Setfillstyle(Solidfill, 7); {����� ���}
  Bar(Left,Top+10,Left+Width,Top+Height-10);{� �������� ����}
  Drawicon(Left+5,Top+15,Icons[Okindex]);{������� �����������}
  Setcolor(15); {����� ������ �������}
  Outtextxy(Left+3,Top+1,Captions[Okindex]); {��������� ����}
  Outtextxy(Left+3,Top+Height-8,'Press Enter To Continue');{������ ���������}
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
  X:=Getmaxx Div 2;  {����� ������}
  Y:=Getmaxy Div 2;
  For I:=1 To 3 Do   {��������}
  Begin
    Setfillstyle(Solidfill, 4);  {������� ������}
    Bar(X-100,Y-10*I,X+100,Y+i*10); {������ �������������}
    Sound(I*1000);   {�������� ����}
    Delay(100);      {������ �� ������ 0.1 ���.}
    Nosound;         {��������� ����}
  End;
  Initivokno(Okno);	 {�������������� iv-����}
   {��������� ���� ������� 200 ������� 60 � ������ ������}
  Settypeokno(X-100,Y-30,200,60,Tip,Okno);
  {����� ����}
  Drawokno(Okno);
  {����� ��������� ������ ������}
  setcolor(0);
  N:=1;   {����� ������� � ������}
  I:=Y-15;{�������� �����}
  While I<Y+20 Do 
  Begin
    J:=X-60;
    While J<X+90 Do
    Begin
      Outtextxy(J,I,Tt[N]); {����� �������� �������}
      J:=J+9;               {�������� �����}
      Inc(N);				{��������� ������}
      If N >Length(Tt) Then {��� ������� ������?}
        Goto Fin;			{�� - ���������� �����}
    End;
    I:=I+9;{������ �������� 8�8}
  End;
fin:{�������� ������� �������}
  Repeat
  Until (Ord(Readkey)=13)or(Ord(Readkey)=27);

end;
function Input(tip:byte;caption,Promt:String;Var Txt:String):Byte;
var Okno:Ivokno;
    I,N,X,Y:Integer;
    K:Char;
    R:Byte;
begin
  X:=Getmaxx Div 2;{����� ������}
  Y:=Getmaxy Div 2;
 For I:=1 To 3 Do   {��������}
  Begin
    Setfillstyle(Solidfill, 4);  {������� ������}
    Bar(X-100,Y-10*I,X+100,Y+i*10); {������ �������������}
    Sound(I*1000);   {�������� ����}
    Delay(100);      {������ �� ������ 0.1 ���.}
    Nosound;         {��������� ����}
  End;
  Initivokno(Okno);	 {�������������� iv-����}
   {��������� ���� ������� 200 ������� 60 � ������ ������}
  Settypeokno(X-100,Y-30,200,60,Tip,Okno);
  okno.captions[tip]:=caption;
  {����� ����}
  Drawokno(Okno);
  {����� ��������� ������ ������}
  Setcolor(0);
  Outtextxy(X-60,Y-15,Promt);
  Setfillstyle(Solidfill, 0); {������� �����}
  Bar(X-60,Y,X+90,Y+10);
  Setcolor(15);
  N:=1;
  Repeat
    {�������� ������� �������}
    Repeat  
      if n<15 then
      begin
        Outtextxy(X-60+10*(N-1),Y+2,'_');{����� �������}
        Delay(100);
        Bar(X-60+10*(N-1),Y,X-50+10*(N-1),Y+10);{�������� ������}
        Delay(100);
      end; 
    Until Keypressed;
    
    K:=Readkey;
    if ord(k)=8 then {backspace}
    begin
      Bar(X-60+10*(N-1),Y,X-50+10*(N-1),Y+10);{�������� ������}
      dec(N);
      if n=0 then n:=1;
      Bar(X-60+10*(N-1),Y,X-50+10*(N-1),Y+10);{�������� ������}
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

end.{����� �����}
