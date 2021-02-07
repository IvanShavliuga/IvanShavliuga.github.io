<form action="arrayparam.php" method="post">
User Name: <input name="UserName">
 <input type="hidden" name="Password" value="qwerty">
</form>

<?php
 if (count($HTTP_GET_VARS)>0)
  {
   die("Неверный параметр");
  }
 
 if ($HTTP_POST_VARS["UserName"]<>"")
  {
   print("<P>Ваше имя пользователя: ");
   print($HTTP_POST_VARS["UserName"]);
   print("<P>Ваш пароль: ");   
   print($HTTP_POST_VARS["Password"]);
  } 
?>
