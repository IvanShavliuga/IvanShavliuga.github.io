#!/usr/bin/perl -w
use CGI qw(:standard);

print "Content-type: text/html\n\n";

print "<H4>Test form</H4>";
print '<form action="http://www.vr-online.ru/cgi-bin/test.cgi" method="get">';
print '<input name="file" size="15">';
print '<input type="submit" value="Submit">';
print '</form>';

$file = param('file');
{
 print("<h4>File: $file</h4>");
 open(F, $file);
 while (<F>)
 {
  print;
 }
 close(F);
}
