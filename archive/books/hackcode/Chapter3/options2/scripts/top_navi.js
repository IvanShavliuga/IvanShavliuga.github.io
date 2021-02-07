menunum=0;menus=new Array();_d=document;function addmenu(){menunum++;menus[menunum]=menu;}function dumpmenus(){mt="<script language=javascript>";for(a=1;a<menus.length;a++){mt+=" menu"+a+"=menus["+a+"];"}mt+="<\/script>";_d.write(mt)}



// Properties

if(navigator.appVersion.indexOf("MSIE 6.0")>0)
{
 effect = "Fade(duration=0.2);Alpha(style=0,opacity=88);Shadow(color='#777777', Direction=135, Strength=5)"
}
else
{
 effect = "Shadow(color='#777777', Direction=135, Strength=5)"
}


timegap=100			
followspeed=3			
followrate=30			
suboffset_top=0;		
suboffset_left=-2;		

style1=[				
"FFFFFF",
"AA1B1B",
"FFFFFF",
"294159",
"AA1B1B",
10,
,
,
"Verdana, Arial",
,
,	
,						
,				
,				
,				
,				
,			
,			
,			
]


style2=[				
"ffffff",				
"AA1B1B",
"ffffff",				
"294159",				
"ffffff",				
10,					
"normal",				
,					
"Verdana, Arial",		
5,				
"",			
,
,
,
,
,
,
,
,
]


style3=[
"ffffff",
"FF0000",
"ffffff",
"FF0000",
"ffffff",
10,
"normal",
,
"Verdana, Arial",
4,
,	
,	
,
,
,
,
,
,
,
]

addmenu(menu=[
"mainmenu",
94,
5,
,
1,
,
style1,
1,
"left",
,
,
1,
,
,
,
,
,
,
,
,
,

,"&nbsp;Products&nbsp;","show-menu=1","http://www.cydsoft.com/products.php",,1
,"&nbsp;Buy Now&nbsp;","show-menu=2","http://www.cydsoft.com/register.php",,1
,"&nbsp;Downloads&nbsp;","show-menu=3","http://www.cydsoft.com/download.php",,1
,"&nbsp;Services&nbsp;","show-menu=4","http://www.cydsoft.com/services/index.php",,1
,"&nbsp;Support&nbsp;","show-menu=5","http://www.cydsoft.com/support/index.php",,1
,"&nbsp;About Us&nbsp;","show-menu=6","http://www.cydsoft.com/about.php",,1
])

	addmenu(menu=["1",
	110,,125,1,"",style2,,"left",,,,,,,,,,,,,
	,"Web Design","show-menu=1-1","http://www.cydsoft.com/products.php?cat=3",,1
	,"Internet","show-menu=1-2","http://www.cydsoft.com/products.php?cat=4",,1
	,"Utilities","show-menu=1-3","http://www.cydsoft.com/products.php?cat=5",,1
	,"Network tools","show-menu=1-4","http://www.cydsoft.com/products.php?cat=6",,1
	])
	
	
		addmenu(menu=["1-1",
		110,,170,1,"",style2,,"left",,,,,,,,,,,,,
		,"CyD WEB Development","http://www.cydsoft.com/products.php?product=1",,,1
		,"CyD GIF Studio Pro","http://www.cydsoft.com/products.php?product=2",,,1
		,"CyD WEB Animation Studio","http://www.cydsoft.com/products.php?product=3",,,1
		,"CyD HTML Editor","http://www.cydsoft.com/products.php?product=4",,,1
		,"CyD Image Mapper","http://www.cydsoft.com/products.php?product=5",,,1
		,"CyD WEB Menu Creator","http://www.cydsoft.com/products.php?product=6",,,1
		,"CyD WEB Calendar Creator","http://www.cydsoft.com/products.php?product=7",,,1
		,"CyD FTP Client XP","http://www.cydsoft.com/products.php?product=8",,,1
		])

		addmenu(menu=["1-2",
		132,,170,1,"",style2,,"left",,,,,,,,,,,,,
		,"CyD FTP Client XP","http://www.cydsoft.com/products.php?product=8",,,1
		,"CyD Postman","http://www.cydsoft.com/products.php?product=9",,,1
		])

		addmenu(menu=["1-3",
		154,,170,1,"",style2,,"left",,,,,,,,,,,,,
		,"CyD Archiver XP","http://www.cydsoft.com/products.php?product=10",,,1
		,"CyD Image Viewer","http://www.cydsoft.com/products.php?product=11",,,1
		,"CyD Organizer (Free)","http://www.cydsoft.com/products.php?product=12",,,1
		])

		addmenu(menu=["1-4",
		176,,170,1,"",style2,,"left",,,,,,,,,,,,,
		,"CyD Net Utils","http://www.cydsoft.com/products.php?product=13",,,1
		,"CyD Careful Observer","http://www.cydsoft.com/products.php?product=14",,,1
		])      
	
	addmenu(menu=["2",
	110,,156,1,"",style2,,"left",,,,,,,,,,,,,
	,"Purchase info","http://www.cydsoft.com/reginfo.php",,,1
	,"Purchase on-line","http://www.cydsoft.com/register.php",,,1
	])

	addmenu(menu=["3",
	110,,160,1,"",style2,,"left",,,,,,,,,,,,,
	,"Free Trials","http://www.cydsoft.com/download/trials.php",,,1
	,"Image library","show-menu=3-2","http://www.cydsoft.com/download/library.php",,1
	,"Documents","show-menu=3-3","http://www.cydsoft.com/download/documents.php",,1
	,"Java Applets","http://www.cydsoft.com/download/java.php",,,1
	,"Web site templates","http://www.cydsoft.com/download/design1.php",,,1
	])

		addmenu(menu=["3-2",
		132,,170,1,"",style2,,"left",,,,,,,,,,,,,
		,"Wallpaper","http://www.cydsoft.com/download/wallpaper.php",,,1
		,"WEB images","http://www.cydsoft.com/download/webimages.php",,,1
		])

		addmenu(menu=["3-3",
		154,,170,1,"",style2,,"left",,,,,,,,,,,,,
		,"CyD Software Documents","http://www.cydsoft.com/download/cyddoc.php",,,1
		,"WEB Design Documents","http://www.cydsoft.com/download/webdoc.php",,,1
		])

	addmenu(menu=["4",
	110,,170,1,"",style2,,"left",,,,,,,,,,,,,
	,"WEB Design","http://www.cydsoft.com/services/webdesign.php",,,1
	,"WEB Development","http://www.cydsoft.com/services/webdev.php",,,1
	])

	addmenu(menu=["5",
	110,,170,1,"",style2,,"left",,,,,,,,,,,,,
	,"Support information","http://www.cydsoft.com/support/index.php",,,1
	,"Feedback","http://www.cydsoft.com/support/feedback.php",,,1
	])

	addmenu(menu=["6",
	110,,125,1,"",style2,,"left",,,,,,,,,,,,,
	,"About us","http://www.cydsoft.com/about.php",,,1
	,"Feedback","http://www.cydsoft.com/support/feedback.php",,,1
	,"E-Mail","MailTo:info@cydsoft.com",,,1
	])


dumpmenus()
