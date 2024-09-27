<?php
// login.php

session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // ユーザーデータファイルのパス
    $file = 'users.txt';

    if (!file_exists($file)) {
        echo "ユーザーが存在しません。";
        exit();
    }

    // ユーザーの認証
    $users = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($users as $user) {
        list($stored_username, $stored_password) = explode(',', $user);

        if ($stored_username === $username && password_verify($password, $stored_password)) {
            // ログイン成功
            $_SESSION['username'] = $username;
            echo "ログイン成功！<a href='home.php'>ホームページへ</a>";
            exit();
        }
    }

    echo "ユーザー名またはパスワードが間違っています。";
}
?>
