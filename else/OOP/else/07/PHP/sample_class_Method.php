<html>
<head>
<?php
class MyArray {
  function MyArray()
  {
    // オブジェクト生成時に実行（処理なし）
  }
  function DumpArray($data)    // メソッド
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
$obj = new MyArray;
$obj->DumpArray($a);           // オブジェクト内のメソッド実行                
?>
</body>
</html>