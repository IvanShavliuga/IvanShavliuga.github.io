function checkvar ($var)
{
 $var = addslashes($var);
 $var = htmlspecialchars($var);
 return $var;
}

function checknum($var)
{
 $var=preg_replace("/[^0-9]/i", "", $var);
 return $var;
}
