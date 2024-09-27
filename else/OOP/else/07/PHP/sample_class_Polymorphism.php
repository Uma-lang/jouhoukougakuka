<html>
<head>
<?php
abstract class MyArray              // スーパークラス（親クラス）
{
  public $data = array();
  function __construct($new_data)
  {
    $this->data = $new_data;
  }
  function DumpArray()
  {
    $data = $this->data;
    for($i=0; $i<count($data); $i++){
      print "$i: $data[$i]<br>";
    }
  }
  // 抽象メソッド（拡張クラスでの定義を強制 ※空の状態）
  abstract function SortArray();
}
class ExArrayA extends MyArray      // サブクラス（子クラス）
{
  function __exconstructA($new_data)
  {
    parent::__construct($new_data);
  }
  function SortArray()              // 抽象メソッド定義（必須）
  {
    sort($this->data);              // データ並べ替え（昇順）
  }
}
class ExArrayR extends MyArray      // サブクラス（子クラス）
{
  function __exconstructR($new_data)
  {
    parent::__construct($new_data);
  }
  function SortArray()              // 抽象メソッド定義（必須）
  {
    Shuffle($this->data);           // データ並べ替え（ランダム）
  }
}
?>
</head>

<body>
<?php
$a = array('a1','b2','a3','b4','a5');

$objA = new ExArrayA($a);
$objA->DumpArray();
$objA->SortArray();                 // 拡張定義した抽象メソッド実行
$objA->DumpArray();

$objR = new ExArrayR($a);
$objR->DumpArray();
$objR->SortArray();                 // 拡張定義した抽象メソッド実行
$objR->DumpArray();
?>
</body>
</html>