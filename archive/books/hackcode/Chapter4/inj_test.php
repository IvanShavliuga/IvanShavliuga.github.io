<HTML>
<HEAD>
<TITLE>Injection test</TITLE>
</HEAD>
<BODY>
<center><h3>Injection test</h3></center>
<hr>
<form name="dbquery" action="inj_test.php" method="get">
User name: <input name="username" size=50>
<input type="submit" value="Find">
</form>
<hr>

<?
 // Connect to MySQL
 mysql_connect("localhost", "root", "test") 
   or die ("Can't connect to MySQL Server");

 // Select database
 mysql_select_db("test") 
   or die ("Can't select database");

 // Execute Query
 $username=$_GET['username'];
 print("Search: $username");
 $result=mysql_query("SELECT * FROM smf_polls WHERE posterName='$username'");

 if (mysql_num_rows($result)>0)
 {
  print("<table width=100% border=1>");
  print("<tr bgcolor=\"#AA1B1B\">");

  // Get result columns
  for ($i=0; $i<mysql_num_fields($result); $i++)
  {
   $field_name = mysql_field_name($result, $i);
   print("<td><font color=\"#FFFFFF\"><B>$field_name</b></font></td>");
  }
  print("</tr><tr>");

  // Get result lines
  while ($line=mysql_fetch_array($result, MYSQL_ASSOC))
  {
   print("<tr>");
   foreach($line as $key => $value) 
   print("<td>$value</td>");
   print("</tr>");
  }
  print("<table>");
 }
?>

</BODY>
</HTML>
