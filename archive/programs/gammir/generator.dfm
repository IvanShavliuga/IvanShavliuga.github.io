object Form2: TForm2
  Left = 285
  Top = 183
  BorderIcons = [biSystemMenu, biMinimize]
  BorderStyle = bsDialog
  Caption = #1043#1077#1085#1077#1088#1072#1094#1080#1103' '#1075#1072#1084#1084#1099
  ClientHeight = 152
  ClientWidth = 259
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  Icon.Data = {
    0000010002002020100000000000E80200002600000010101000000000002801
    00000E0300002800000020000000400000000100040000000000800200000000
    0000000000000000000000000000000000000000800000800000008080008000
    0000800080008080000080808000C0C0C0000000FF0000FF000000FFFF00FF00
    0000FF00FF00FFFF0000FFFFFF00666666666666666886666666666666666666
    66666666688CC8866666666666666666666666688FCCCCF88666666666666666
    6666688FFFCCCCFFF88666666666666666688FFFFFCCCCFFFFF8866666666666
    688FFFFFFFCCCCFFFFFAA886666666688FFFFFFFFFCCCCFFFFFAAAA886666889
    9FFFFFFFFFCCCCFFFFFAAAAFF88689999FFFFFFFFFCCCCFAAAAAAAAAAAA88999
    9FFFFFFFFFCCCCFAAAAAAAAAAAA889999FFFFFFFFFCCCCFAAAAAAAAAAAA88999
    9FFFFFFFFFCCCCFAAAFAAAAFAAA889999FFFFFFFFFCCCCFAAAFAAAAFAAA88999
    999999999FCCCCFAAAFAAAAFAAA88999999999999FCCCCFAAAFAAAAFAAA88999
    999999999FCCCCFAAAFAAAAFAAA889999FFFF9999FCCCCFAAAFAAAAFAAA88999
    9FFFF9999FCCCCFAAAFAAAAFAAA889999FFFF9999FCCCCFAAAFAAAAFAAA88999
    9FFFF9999FCCCCFAAAFAAAAFAAA889999FFFF9999FCCCCFAAAFAAAAFAAA88999
    999999999FCCCCFAAAAAAAAAAAA88999999999999FCCCCFAAAAAAAAAAAA88999
    999999999FCCCCFAAAAAAAAAAAA8688FFFFFFFFFFFCCCCFFFFFFFFFFF8866668
    8CCCCCCCCCCCCCCCCCCCCCC886666666688CCCCCCCCCCCCCCCCCC88666666666
    66688CCCCCCCCCCCCCC88666666666666666688FFFFFFFFFF886666666666666
    666666688FFFFFF8866666666666666666666666688FF8866666666666666666
    6666666666688666666666666666000000000000000000000000000000000000
    0000000000000000000000000000000000000000000000000000000000000000
    0000000000000000000000000000000000000000000000000000000000000000
    0000000000000000000000000000000000000000000000000000000000000000
    0000000000000000000000000000280000001000000020000000010004000000
    0000C00000000000000000000000000000000000000000000000000080000080
    00000080800080000000800080008080000080808000C0C0C0000000FF0000FF
    000000FFFF00FF000000FF00FF00FFFF0000FFFFFF0000000008800000000000
    088CC88000000008800CC00880000880000CC000A8808990000CC0AAAAA88990
    000CC0A0A0A88999990CC0A0A0A88990090CC0A0A0A88990090CC0A0A0A88990
    090CC0A0A0A88990090CC0A0A0A88999990CC0AAAAA8088CCCCCCCCCC8800008
    8CCCCCC8800000000880088000000000000880000000FE7F0000F81F0000E667
    00009E7100001E4000001E540000025400001A5400001A5400001A5400001A54
    00000240000080010000E0070000F99F0000FE7F0000}
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 64
    Top = 32
    Width = 18
    Height = 24
    Caption = 'A:'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -19
    Font.Name = 'MS Sans Serif'
    Font.Style = []
    ParentFont = False
  end
  object Label2: TLabel
    Left = 64
    Top = 56
    Width = 18
    Height = 24
    Caption = 'C:'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -19
    Font.Name = 'MS Sans Serif'
    Font.Style = []
    ParentFont = False
  end
  object Label3: TLabel
    Left = 40
    Top = 80
    Width = 41
    Height = 24
    Caption = 'X(0):'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -19
    Font.Name = 'MS Sans Serif'
    Font.Style = []
    ParentFont = False
  end
  object Label4: TLabel
    Left = 64
    Top = 104
    Width = 21
    Height = 24
    Caption = 'm:'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -19
    Font.Name = 'MS Sans Serif'
    Font.Style = []
    ParentFont = False
  end
  object Label5: TLabel
    Left = 0
    Top = 128
    Width = 84
    Height = 24
    Caption = #1040#1083#1092#1072#1074#1080#1090':'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -19
    Font.Name = 'MS Sans Serif'
    Font.Style = []
    ParentFont = False
  end
  object Label6: TLabel
    Left = 24
    Top = 8
    Width = 223
    Height = 20
    Caption = 'X(i) = [A x X(i-1) + C] mod m'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -16
    Font.Name = 'MS Sans Serif'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object BitBtn1: TBitBtn
    Left = 184
    Top = 32
    Width = 75
    Height = 25
    TabOrder = 0
    Kind = bkOK
  end
  object BitBtn2: TBitBtn
    Left = 184
    Top = 64
    Width = 75
    Height = 25
    Caption = #1054#1090#1084#1077#1085#1072
    TabOrder = 1
    Kind = bkCancel
  end
  object CSpinEdit1: TCSpinEdit
    Left = 88
    Top = 32
    Width = 89
    Height = 22
    Increment = 4
    MaxValue = 1000
    MinValue = 5
    TabOrder = 2
    Value = 5
  end
  object CSpinEdit2: TCSpinEdit
    Left = 88
    Top = 56
    Width = 89
    Height = 22
    Increment = 4
    MaxValue = 1000
    MinValue = 1
    TabOrder = 3
    Value = 3
  end
  object CSpinEdit3: TCSpinEdit
    Left = 88
    Top = 80
    Width = 89
    Height = 22
    MaxValue = 31
    TabOrder = 4
    Value = 13
  end
  object CSpinEdit4: TCSpinEdit
    Left = 88
    Top = 104
    Width = 89
    Height = 22
    MaxValue = 256
    MinValue = 1
    TabOrder = 5
    Value = 32
  end
  object ComboBox1: TComboBox
    Left = 88
    Top = 128
    Width = 89
    Height = 21
    ItemHeight = 13
    TabOrder = 6
    Text = #1056#1091#1089#1089#1082#1080#1081
    Items.Strings = (
      #1056#1091#1089#1089#1082#1080#1081
      #1051#1072#1090#1080#1085#1089#1082#1080#1081)
  end
end
