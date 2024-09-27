<html>

</html>

<body>
    <form action="sample_func_abs_get.php">

        A=
        <input type="text" name="r">
        <input type="submit" value="Query">
        <br>
        <?php

   $r = isset($_GET['r']) ? $_GET['r'] : ''; // issetでエラーチェック

   print "A=".$r.",Abs(A)=".abs($r);

 ?>

    </form>
</body>

</html>