�
 TKEYBOARDFORM 0b	  TPF0TKeyboardFormKeyboardFormLeft� ToplWidth�Height�Caption#TeeChart Keyboard Scrolling ExampleColor	clBtnFaceFont.CharsetDEFAULT_CHARSET
Font.ColorclWindowTextFont.Height�	Font.NameMS Sans Serif
Font.Style 
KeyPreview	OldCreateOrderPositionpoScreenCenterScaledOnCreate
FormCreate	OnKeyDownFormKeyDownPixelsPerInch`
TextHeight TChartChart1Left� Top Width�Height�AnimatedZoom	AnimatedZoomStepsBackWall.ColorclWhiteBottomWall.Color��� BottomWall.SizeFoot.Font.CharsetDEFAULT_CHARSETFoot.Font.ColorclRedFoot.Font.Height�Foot.Font.NameArialFoot.Font.StylefsItalic Foot.Frame.ColorclScrollBarFoot.Text.Strings9The Form::OnKeyDown event does the job. See source code.  LeftWall.Size	MarginTopTitle.Brush.Color �� Title.Font.CharsetDEFAULT_CHARSETTitle.Font.ColorclBlackTitle.Font.Height�Title.Font.NameArialTitle.Font.StylefsBold Title.Frame.Color� � Title.Frame.Width	Title.Frame.Visible	Title.Text.StringsKThis example shows how to handle keyboard events to scroll TChart contents.DUse the keyboard arrow keys and  page up / page down keys to scroll.9Press SPACE to reset. Press SHIFT and arrow keys to ZOOM. 	BackColorclWhiteBottomAxis.Grid.ColorclScrollBarChart3DPercentLeftAxis.Grid.ColorclScrollBarLegend.VisibleRightAxis.Grid.ColorclScrollBarTopAxis.Grid.ColorclScrollBarAlignalClientColor��� TabOrder TabStop	 TLineSeriesLineSeries1Marks.ArrowLengthMarks.VisibleSeriesColorclRedPointer.InflateMargins	Pointer.StylepsRectanglePointer.VisibleXValues.DateTime	XValues.NameXXValues.MultiplierXValues.OrderloAscendingYValues.DateTimeYValues.NameYYValues.MultiplierYValues.OrderloNoneLeft� Topy   TPanelPanel1Left Top Width� Height�AlignalLeftCaptionPanel1TabOrder TBitBtnBitBtn1LeftTopWidthYHeight!TabOrder KindbkClose  	TCheckBoxInvertScrollLeftTopWidthtHeightCaption&Inverted ScrollingTabOrderOnClickInvertScrollClick  	TCheckBoxCheckLimitsLeftTop WidthaHeightCaptionCheck &LimitsTabOrderOnClickCheckLimitsClick  TMemoMemo1LeftTopLWidthyHeight� Lines.StringsScrolling and zoomingcan also be done usingthe keyboard. This example shows how to scroll and zooma Chart using the FormOnKeyDown event.  TabOrder    