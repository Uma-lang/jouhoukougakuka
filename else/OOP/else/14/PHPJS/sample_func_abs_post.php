<html>
<body>
<form method="post" action="sample_func_abs_post.php">
 
A=
<input type="text" name="r">
<input type="submit" value="Query">
<br>
<?php

   $r = isset($_POST['r']) ? $_POST['r'] : ''; // issetでエラーチェック

   print "A=".$r.",Abs(A)=".abs($r);

 ?>
 
</form>
</body>
</html>