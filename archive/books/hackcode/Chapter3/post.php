<form action="arrayparam.php" method="post">
User Name: <input name="UserName">
 <input type="hidden" name="Password" value="qwerty">
</form>

<?php
 if (count($HTTP_GET_VARS)>0)
  {
   die("�������� ��������");
  }
 
 if ($HTTP_POST_VARS["UserName"]<>"")
  {
   print("<P>���� ��� ������������: ");
   print($HTTP_POST_VARS["UserName"]);
   print("<P>��� ������: ");   
   print($HTTP_POST_VARS["Password"]);
  } 
?>
