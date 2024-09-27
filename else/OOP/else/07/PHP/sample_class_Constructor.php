<html>
<head>
<?php
class MyArray {
  public $data = array();      // メンバ変数  ※クラススコープ
  function __construct($new_data)  // コンストラクタで処理する値の受け取り
  {
    $this->data = $new_data;   // 初期設定  ※this：現オブジェクト
  }
  function DumpArray()         // メソッド（引数不要）
  {
    $data = $this->data;       // メンバ変数をローカル変数に代入して処理
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
$obj = new MyArray($a);        // オブジェクト生成と同時に初期（値）設定
$obj->DumpArray();             // メソッド実行（引数無し、メンバ変数利用）
?>
</body>
</html>