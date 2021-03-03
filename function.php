<?php

if (isset($_POST)&& !empty($_POST['path'])){

  $dir = $_POST['path'];

  // function getFiles($dir) {
    if (is_dir($dir)) {
      if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {
          $dot = ".";
          $dotPos = strpos($file, $dot);
          if ($dotPos !== false && $dotPos > 0) {
            echo "<span class='file'><i class='fas fa-file'></i> $file</span><br/>";
          } else {
            echo "<span class='path' id='$file' style='color: Mediumslateblue;'><i class='fas fa-folder'></i> $file</span><br/>";
            // var_dump($fileDir);
          }
        }
        closedir($dh);
      }
    }
  // }
  
}



