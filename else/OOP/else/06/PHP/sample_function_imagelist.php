<html>

<!-- 本文の文字コードを"UTF-8"（Unicode Transformation Format、世界共通文字符号形式、8ビット版）に指定 -->
<head>
<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
</head>

<body>
<?php
include("./sample_function_mylib2.php");

$txtlist = glob('{./*.txt}',GLOB_BRACE);
foreach($txtlist as $file){
  print "<p>";                                // <p>：段落（Paragraph）
  PutTextJpg($file);                          // 各ファイルの内容と画像を表示
  print "</p>";
}
?>
</body>
</html>