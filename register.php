<?php
// register.php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 入力のサニタイズ
    $username = trim($username);
    $password = trim($password);

    // パスワードのハッシュ化
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // ユーザーデータファイルのパス
    $file = 'users.txt';

    // ファイルが存在しない場合は作成
    if (!file_exists($file)) {
        touch($file);
        chmod($file, 0600); // ファイルの権限を設定
    }

    // ユーザー名の重複チェック
    $users = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($users as $user) {
        list($stored_username, ) = explode(',', $user);
        if ($stored_username === $username) {
            echo "このユーザー名は既に使用されています。";
            exit();
        }
    }

    // ユーザーデータの保存
    $entry = $username . ',' . $hashed_password . PHP_EOL;
    file_put_contents($file, $entry, FILE_APPEND | LOCK_EX);

    echo "登録成功！<a href='login.php'>ログインページへ</a>";
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>ユーザー登録</title>
    <meta charset="UTF-8">
</head>
<body>
    <h2>ユーザー登録フォーム</h2>
    <form action="register.php" method="post">
        ユーザー名: <input type="text" name="username" required><br><br>
        パスワード: <input type="password" name="password" required><br><br>
        <input type="submit" value="登録">
    </form>
</body>
</html>
