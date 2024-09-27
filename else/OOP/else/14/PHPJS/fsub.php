<html>
<head>
<meta charset="UTF-8">
</head>
<body>
 
<?php

 $a = isset($_GET['a']) ? $_GET['a'] : ''; // issetでエラーチェック

 echo $a."<br>";

 file_put_contents("data", $a, FILE_APPEND | LOCK_EX);

 $b = file_get_contents("data");

 echo $b."<br>";

 echo "1:".substr_count($b, "1")."<br>";

 echo "2:".substr_count($b, "2")."<br>";

 echo "3:".substr_count($b, "3")."<br>";

 echo "4:".substr_count($b, "4")."<br>";

 ?>
 
</body>
</html>