<?
 $f = fopen("snif.txt", "a");
 fwrite($f, $REQUEST_URI);
 fwrite($f, "\n");
 fclose($f);
 print("OK");
?>