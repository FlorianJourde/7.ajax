<?php

$dir = "/var/www/html/7.ajax";

if (is_dir($dir)) {
  if ($dh = opendir($dir)) {
    while (($file = readdir($dh)) !== false) {
      echo $file . "<br/>";
    }
    closedir($dh);
  }
}

?>
