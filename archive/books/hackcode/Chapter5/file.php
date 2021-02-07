<HTML>
<HEAD>
<TITLE>Injection test</TITLE>
</HEAD>
<BODY>
<center><h3>Injection test</h3></center>
<hr>
<form name="syst" action="file1.php" method="get">
Command: <input name="command" size=50>
<input type="submit" value="Find">
</form>
<hr>

<?
 if (isset($_GET['command']))
 {
 if ($arr=file($_GET['command']))
  {
   for ($i=0; $i<count($arr); $i++)
     { 
       printf("<BR>%s", $arr[$i]);
     }
  }
 }
?>

</BODY>
</HTML>