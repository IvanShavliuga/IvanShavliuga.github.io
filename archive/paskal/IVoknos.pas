{Ivoknos ���� ����� �뢮�� ����� � ����᪮� ����� �� ��-���
 ���ࠡ�⠫: ������ �. �. 
 !!!����஢���� ����� ����饭��!!!}

unit Ivoknos;
interface
uses Crt,Graph;
type Ticon=Array[1..32] Of String[32]; {����᪮� ����ࠦ���� �����஬ 32*32}
type Ivokno=Record {����᪮� ���� ����� �뢮��}
  Icons:Array[1..4] Of Ticon; {� ����ࠦ���ﬨ 4-� ����� }
  Captions:Array[1..4] Of String; {� ����������� 4-� �����}
  Okindex,  {��� ���� (� ��� ����)}
  Left,Top, {��砫�� ���न���� Iv-����}  
  Width,Height:Integer; {��ਭ� � ���� Iv-����}
end;
{���� Iv-����
----------------------------------------------------------
��� ���� | ���������   | ����ࠦ����     | ���᭥���
----------------------------------------------------------
1        | Porol.Exe   | ��� ���        | �ਢ���⢨�
2        | Error       | ���� "�⮯"     | �訡��
3        | Good Run    | ��ᥫ� ��ᯫ�� | �ᯥ�� �����
4        | Information | ���筠� ���. I | ���ଠ��
----------------------------------------------------------
���樠������ ����
�� ����砭��:
-------------
⨯ ����: 1 
��砫�� ���न���� (0,0)
�ਭ�: 250
����: 60
!!!�����⥫쭮 �ᯮ�짮���� � ��砫� �ணࠬ��!!!}
procedure Initivokno(Var Okno:Ivokno);
{����㦠�� ����ࠦ���� Icon �� ����� � ������ Name}
procedure Loadicon(Name:String;Var Icon:Ticon);
{�뢮� ����ࠦ���� Icon � ������� ��࠭� � ��砫�묨 ���न��⠬� (X,Y)}
procedure Drawicon(X,Y:Byte;Icon:Ticon);
{�뢮� ����饣� Iv-����}
procedure Drawokno(Okno:Ivokno);
{����ன�� Iv-����
x,Y - ��砫�� ���न����
w,H - ��ਭ� � ����
tip - ��� ����}
procedure Settypeokno(X,Y,W,H,Tip:Integer;Var Okno:Ivokno);
{�����஢����� Iv-���� �뢮�� ���� Tip. 
�뢮��� ��ப� ����饭�� Tt � ����� ��࠭�}
procedure Message(Tip:Byte;Tt:String);
{�����஢����� Iv-���� ����� �����. 
�뢮��� ��ப� Promt � ����� ��࠭�.
�࣠����� ���� ����� � �뢮��� �� ��࠭ 
�� ������ Enter, Esc ��� �᫨ ������� ����� 15 ��������.
����頥�
0 - �᫨ ����� ������ Esc
1 - �᫨ ����� ������ Enter;
2 - �᫨ ������� ����� 15-� �������� 
⨯ Iv-����: 1
!!!��� ����� !!!
ࠧ��� ����: 200*60
}
function Input(Promt:String;Var Txt:String):Byte;

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
  {����㧪� �㭪��}
  Loadicon('Icon.Ic' ,Icons[1]);
  Loadicon('Error.Ic',Icons[2]);
  Loadicon('Ok.Ic'   ,Icons[3]);
  Loadicon('Info.Ic' ,Icons[4]);
  Okindex:=1;  {���}
  Left   :=0;  {��砫�� ���न����}
  Top    :=0;
  Width  :=250; {��ਭ�}
  Height :=60;  {����}
  End;
end;
procedure Drawokno(Okno:Ivokno);
begin
  With Okno Do
  Begin
  Setfillstyle(Solidfill, 4); {���� 䮭 �}
  Bar(Left,Top,Left+Width,Top+10); {���������}
  Bar(Left,Top+Height-10,Left+Width,Top+Height);{� ��ப� ���᪠���}
  Setfillstyle(Solidfill, 7); {���� 䮭}
  Bar(Left,Top+10,Left+Width,Top+Height-10);{� ࠡ�祣� ����}
  Drawicon(Left+5,Top+15,Icons[Okindex]);{�뢮��� ����ࠦ����}
  Setcolor(15); {���� 梥⮬ �뢮���}
  Outtextxy(Left+3,Top+1,Captions[Okindex]); {��������� ����}
  Outtextxy(Left+3,Top+Height-8,'Press Enter To Continue');{������ ���᪠���}
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
  X:=Getmaxx Div 2;  {����� ��࠭�}
  Y:=Getmaxy Div 2;
  For I:=1 To 3 Do   {�������}
  Begin
    Setfillstyle(Solidfill, 4);
    Bar(X-100,Y-10*I,X+100,Y+(I-1)*10);
    Bar(X-100,Y+(I-1)*10,X+100,Y+10*I);
    Sound(I*1000);
    Delay(100);
    Setfillstyle(Solidfill, 7);
    Bar(X-100,Y-10*I,X+100,Y+(I-1)*10);
    Bar(X-100,Y+(I-1)*10,X+100,Y+10*I);
    Nosound;
  End;
  Initivokno(Okno);
  Settypeokno(X-100,Y-30,200,60,Tip,Okno);
  Drawokno(Okno);
  N:=1;  {�뢮� ����饭��}
  I:=Y-15;
  While I<Y+20 Do
  Begin
    J:=X-60;
    While J<X+90 Do
    Begin
      Outtextxy(J,I,Tt[N]);
      J:=J+9;
      Inc(N);
      If N >Length(Tt) Then
        Goto Fin;
    End;
    I:=I+9;
  End;
fin:{�������� ������ ������}
  Repeat
  Until Ord(Readkey)=13;

end;
function Input(Promt:String;Var Txt:String):Byte;
var Okno:Ivokno;
    I,J,N,X,Y:Integer;
    K:Char;
    R:Byte;
label Fin;
begin
  X:=Getmaxx Div 2;{����� ��࠭�}
  Y:=Getmaxy Div 2;
  For I:=1 To 3 Do{�������}
  Begin
    Setfillstyle(Solidfill, 4);
    Bar(X-100,Y-10*I,X+100,Y+(I-1)*10);
    Bar(X-100,Y+(I-1)*10,X+100,Y+10*I);
    Sound(I*1000);
    Delay(100);
    Setfillstyle(Solidfill, 7);
    Bar(X-100,Y-10*I,X+100,Y+(I-1)*10);
    Bar(X-100,Y+(I-1)*10,X+100,Y+10*I);
    Nosound;
  End;
  Initivokno(Okno);
  Settypeokno(X-100,Y-30,200,60,1,Okno);
  Drawokno(Okno);
  N:=1;
  J:=X-60;
  Setcolor(0);
  Outtextxy(J,Y-15,Promt);
  Setfillstyle(Solidfill, 0); {������� �����}
  Bar(X-60,Y,X+90,Y+10);
  Setcolor(15);
  N:=1;
  Repeat
    {�������� ������ ������}
    Repeat  
      Outtextxy(X-60+10*(N-1),Y+2,'_');{�뢮� �����}
      Delay(100);
      Bar(X-60+10*(N-1),Y,X-50+10*(N-1),Y+10);{�������� �����}
      Delay(100);

    Until Keypressed;
    
    K:=Readkey;
    if ord(k)=8 then {backspace}
    begin
      Bar(X-60+10*(N-1),Y,X-50+10*(N-1),Y+10);{�������� �����}
      dec(N);
      if n=0 then n:=1;
      Bar(X-60+10*(N-1),Y,X-50+10*(N-1),Y+10);{�������� �����}
    end;
    If (K>='A')And(K<='z') Then
    Begin
      Txt[N]:=K;
      Outtextxy(X-60+10*(N-1),Y+2,Txt[N]);
      Insert(K,Txt,N);
      Inc(N);
    End;

  Until (Ord(K)=13)Or(Ord(K)=27)Or(N>15);
  If Ord(K)=13 Then R:=1;
  If Ord(K)=27 Then R:=0;
  If N>15      Then R:=2;
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

end.
