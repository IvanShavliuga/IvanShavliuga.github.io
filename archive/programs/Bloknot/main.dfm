object Form1: TForm1
  Left = 333
  Top = 198
  AutoSize = True
  BorderStyle = bsDialog
  Caption = #1054#1076#1085#1086#1088#1072#1079#1086#1074#1099#1081' '#1073#1083#1086#1082#1085#1086#1090
  ClientHeight = 121
  ClientWidth = 233
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  OnCreate = FormCreate
  PixelsPerInch = 96
  TextHeight = 13
  object LabeledEdit1: TLabeledEdit
    Left = 0
    Top = 16
    Width = 121
    Height = 21
    EditLabel.Width = 76
    EditLabel.Height = 13
    EditLabel.Caption = #1048#1089#1093#1086#1076#1085#1099#1081' '#1090#1077#1082#1090
    LabelPosition = lpAbove
    LabelSpacing = 3
    TabOrder = 0
  end
  object LabeledEdit2: TLabeledEdit
    Left = 0
    Top = 56
    Width = 121
    Height = 21
    EditLabel.Width = 26
    EditLabel.Height = 13
    EditLabel.Caption = #1050#1083#1102#1095
    LabelPosition = lpAbove
    LabelSpacing = 3
    TabOrder = 1
  end
  object LabeledEdit3: TLabeledEdit
    Left = 0
    Top = 96
    Width = 121
    Height = 21
    EditLabel.Width = 29
    EditLabel.Height = 13
    EditLabel.Caption = #1064#1080#1092#1088
    LabelPosition = lpAbove
    LabelSpacing = 3
    TabOrder = 2
  end
  object BitBtn1: TBitBtn
    Left = 128
    Top = 16
    Width = 105
    Height = 25
    Caption = #1064#1080#1092#1088#1086#1074#1082#1072
    TabOrder = 3
    OnClick = BitBtn1Click
    Kind = bkOK
  end
  object BitBtn2: TBitBtn
    Left = 128
    Top = 56
    Width = 105
    Height = 25
    Caption = #1056#1072#1089#1096#1080#1092#1088#1086#1074#1082#1072
    ModalResult = 1
    TabOrder = 4
    OnClick = BitBtn2Click
    Glyph.Data = {
      DE010000424DDE01000000000000760000002800000024000000120000000100
      0400000000006801000000000000000000001000000000000000000000000000
      80000080000000808000800000008000800080800000C0C0C000808080000000
      FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF00333333333333
      3333333333333333333333330000333333333333333333333333F33333333333
      00003333344333333333333333388F3333333333000033334224333333333333
      338338F3333333330000333422224333333333333833338F3333333300003342
      222224333333333383333338F3333333000034222A22224333333338F338F333
      8F33333300003222A3A2224333333338F3838F338F33333300003A2A333A2224
      33333338F83338F338F33333000033A33333A222433333338333338F338F3333
      0000333333333A222433333333333338F338F33300003333333333A222433333
      333333338F338F33000033333333333A222433333333333338F338F300003333
      33333333A222433333333333338F338F00003333333333333A22433333333333
      3338F38F000033333333333333A223333333333333338F830000333333333333
      333A333333333333333338330000333333333333333333333333333333333333
      0000}
    NumGlyphs = 2
  end
  object BitBtn3: TBitBtn
    Left = 128
    Top = 96
    Width = 105
    Height = 25
    Caption = #1047#1072#1082#1088#1099#1090#1100
    TabOrder = 5
    Kind = bkClose
  end
end
