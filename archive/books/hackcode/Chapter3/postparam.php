<form action="postparam.php" method="post">
User Name: <input name="UserName">
 <input type="hidden" name="Password" value="qwerty">
</form>

<?php
 if ($UserName<>"")
  {
   print("<P>���� ��� ������������: ");
   print("$UserName");
   print("<P>������: $Password");
  } 
?>
