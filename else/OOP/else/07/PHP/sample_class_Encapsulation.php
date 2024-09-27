<html>
<head>
<?php
class MyArray {
  public  $data1 = array();    // オブジェクト外から参照可
  private $data2 = array();    // オブジェクト内のみ参照可
  function __construct($new_data)
  {
    $this->data1 = $new_data;
    $this->data2 = $new_data;
  }
  function DumpArray()
  {
    $data = $this->data2;      // private変数の値を代入
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
$obj = new MyArray($a);
$obj->DumpArray();             // private変数の内容を表示

var_dump($obj->data1);         // public 変数参照（成功）
var_dump($obj->data2);         // private変数参照（失敗）
?>
</body>
</html>