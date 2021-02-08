<?
 setcookie ("dir", "news", time()+5184000);
 setcookie ("file", "netutils.html", time()+5184000);
?>

<HTML>
<HEAD>
<TITLE>Injection test</TITLE>
</HEAD>
<BODY>
<center><h3>Injection test</h3></center>
<hr>

<?
 if (isset($file))
 {
  print($dir."/".$file);
  include($dir."/".$file);
 }
?>

</BODY>
</HTML>
