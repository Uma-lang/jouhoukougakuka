<html>
<head>
<?php
class DumpArray {               // クラスの定義
  function __construct($data)     // オブジェクト生成時に実行（特別な関数）
  {
    for($i=0; $i<count($data); $i++){
      print "$i: $data[$i]<br>";
    }
  }
}
?>
</head>

<body>
<?php
$a = array('a1','b2','a3','b4','a5');
$obj = new DumpArray($a);       // クラスの定義からオブジェクトを生成
?>
</body>
</html>