<?php
// register.php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // パスワードのハッシュ化
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // ユーザーデータファイルのパス
    $file = 'users.txt';

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
}
?>
