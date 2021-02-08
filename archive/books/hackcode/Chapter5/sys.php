<HTML>
<HEAD>
<TITLE>Injection test</TITLE>
</HEAD>
<BODY>
<center><h3>Injection test</h3></center>
<hr>
<form name="syst" action="sys.php" method="get">
Command: <input name="command" size=50>
<input type="submit" value="Find">
</form>
<hr>

<?
 if (isset($_GET['command']))
 {
  $command = $_GET['command'];
  print("Executed command: <b>$command</b><P>");
  print(system("ping ".$command));
 }
?>

</BODY>
</HTML>