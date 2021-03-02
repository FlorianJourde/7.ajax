<?php

$dir = "/var/www/html/7.ajax";
$dot = ".";

if (is_dir($dir)) {
  if ($dh = opendir($dir)) {
    while (($file = readdir($dh)) !== false) {
      $dotPos = strpos($file, $dot);
      if ($dotPos !== false && $dotPos > 0) {
        print_r("<span class='file '> $file</span>");
      } 
        print_r( "<span class='folder '> $file</span>");
      }
    }
    closedir($dh);
  }


?>

