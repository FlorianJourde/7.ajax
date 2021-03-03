<?php

if (isset($_POST)&& !empty($_POST['path'])){
  $path = $_POST['path'];
  getFiles($path);
}

function getFiles($dir) {
  if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
      while (($file = readdir($dh)) !== false) {
        $dot = ".";
        $dotPos = strpos($file, $dot);
        if ($dotPos !== false && $dotPos > 0) {
          echo "<span class='file'><i class='fas fa-file'></i> $file</span>";
        } else {
          echo "<span class='path' id='$file' style='color: rgba(0, 0, 0, 0.5)'><i class='fas fa-folder'></i> $file</span>";
        }
      }
      closedir($dh);
    }
  }
}