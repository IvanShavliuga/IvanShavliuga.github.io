<?
 setcookie ("user", "admin", time()+5184000);
 setcookie ("pass", "qwerty", time()+5184000);
?>

<HTML>
<HEAD>
<TITLE>XSS test</TITLE>
</HEAD>
<BODY>
<center><h3>XSS test</h3></center>

<hr>
<form name="messageadd" action="xss.php" method="get">
Username: <input name="username" size=50>
<BR>Post text: <textarea cols="65" name="message" rows="10" wrap="virtual"></textarea>
<input type="hidden" name="passws" value="qwerty">
<BR><center><input type="submit" value="Send"></center>
</form>

<hr>
<?
 // Connect to MySQL
 mysql_connect("localhost", "root", "test") 
  or die ("Can't connect to MySQL Server");
 // Select database
 mysql_select_db("minib") 
  or die ("Can't select database");

 // add message
 if (isset($_GET['username']))
 {
  $username=$_GET['username'];
  $message=$_GET['message'];
  $result=mysql_query("INSERT INTO minibbtable_posts VALUES(NULL, 1, 1, 1, '$username', '$message', 1, 1, 1)");
 }

 // View messages
 $result=mysql_query("SELECT poster_name, post_text FROM minibbtable_posts");
 if (mysql_num_rows($result)>0)
 {
  print("<table width=100% border=1>");
  print("<tr bgcolor=\"#AA1B1B\">");
  print("<td><font color=\"#FFFFFF\">User</font></td>");
  print("<td><font color=\"#FFFFFF\">Message</font></td>");
  print("</tr><tr>");
  // Get result columns
  while ($line=mysql_fetch_array($result, MYSQL_ASSOC))
  {
   print("<tr>");
   print("<td>$line[poster_name]</td>");
   print("<td>$line[post_text]</td>");
   print("</tr>");
  }
  print("<table>");
 }
?>
</BODY>
</HTML> 
