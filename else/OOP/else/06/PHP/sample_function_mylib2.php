<?php
// PutTextJpg関数を追加
function PutTextJpg($file){
  print file_get_contents($file);             // 説明文（.txtファイル）表示（file_get_contents関数）
  print "<br>";                               // <br>：改行（Break）
  $jpeg = str_replace('.txt','.jpg',$file);   // 拡張子「.txt」を「.jpg」に変更（str_replace関数）
  print "<img src='$jpeg'>";                  // JPEG画像（ファイル）表示
}
?>