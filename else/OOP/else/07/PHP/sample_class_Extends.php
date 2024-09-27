<html>
<head>
<?php
class MyArray {
  public $data = array();          // スーパークラス（親クラス）

  // コンストラクタ
  function __construct($new_data) {
    $this->data = $new_data;
  }

  // 配列の内容を出力するメソッド
  function DumpArray() {
    for($i = 0; $i < count($this->data); $i++) {
      print "$i: " . $this->data[$i] . "<br>";
    }
  }
}

class ExArray extends MyArray {    // サブクラス（子クラス）

  // サブクラスのコンストラクタ
  function __exconstruct($new_data) {
    parent::__construct($new_data);    // スーパークラスのコンストラクタを呼び出す
  }

  // サブクラスで新しいメソッドを追加
  function SortArray() {
    sort($this->data);             // 配列の並べ替え
  }
}
?>
</head>

<body>
<?php
// サブクラス ExArray を用いてオブジェクトを生成
$a = array('a1', 'b2', 'a3', 'b4', 'a5');
$obj = new ExArray($a);            // オブジェクトを生成し、配列を渡す

// スーパークラスのメソッドで配列の内容を表示
$obj->DumpArray();

// サブクラスで追加したメソッドで配列を並べ替え
$obj->SortArray();

// 並べ替え後の配列を再度表示
$obj->DumpArray();
?>
</body>
</html>