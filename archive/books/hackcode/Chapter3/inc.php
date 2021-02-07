<HTML>
<HEAD>
<TITLE>Injection test</TITLE>
</HEAD>
<BODY>
<center><h3>Injection test</h3></center>
<hr>
<a href="inc.php?dir=news&file=netutils">Read news</a>
<hr>

<?
 if (isset($_GET['file']))
 {
  include($_GET['dir']."/".$_GET['file']);
 }
?>

</BODY>
</HTML>