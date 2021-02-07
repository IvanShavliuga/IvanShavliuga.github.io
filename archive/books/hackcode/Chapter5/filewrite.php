<HTML>
<HEAD>
<TITLE>Injection test</TITLE>
</HEAD>
<BODY>
<center><h3>Injection test</h3></center>
<hr>
<form name="syst" action="file.php?command=questions/user" method="get">
<BR>Question: <input name="param" size=50>
<input type="submit" value="Find">
</form>
<hr>

<?
 if (isset($_GET['command']))
 {
  if($f=fopen($_GET['command'], "w+"))
   print("File: ($f)");
  else 
   die("Error");

  $s = fwrite($f, $_GET['param']);
  fclose($f); 
 }

?>

</BODY>
</HTML>