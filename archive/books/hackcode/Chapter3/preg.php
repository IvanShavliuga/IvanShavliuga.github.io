<HTML>
<HEAD>
<TITLE>Preg test</TITLE>
</HEAD>
<BODY>
<center><h3>Preg test</h3></center>
<hr>
<form name="syst" action="preg.php" method="get">
Command: <input name="command" size=50>
<input type="submit" value="Find">
</form>
<hr>

<?
 if (isset($_GET['command']))
 {
  $command = $_GET['command'];
  $command = $_GET['command'];
  print("Executed command: <b>$command</b><P>");
  preg_replace("/(".$command.")/e", "\\1", $var);
  print($var);
 }
?>

</BODY>
</HTML>
