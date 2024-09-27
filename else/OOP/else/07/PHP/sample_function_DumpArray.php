<html>
<head>
<?php
function DumpArray($data) // DumpArray関数の定義
{
  for($i=0; $i<count($data); $i++){
    print "$i: $data[$i]<br>";
  }
}
?>
</head>

<body>
<?php
$a = array('a1','b2','a3','b4','a5');
DumpArray($a);
?>
</body>
</html>