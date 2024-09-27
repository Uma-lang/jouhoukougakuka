<?php
// login.php

session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 入力のサニタイズ
    $username = trim($username);
    $password = trim($password);

    // ユーザーデータファイルのパス
    $file = 'users.txt';

    if (!file_exists($file)) {
        echo "ユーザーが存在しません。";
        exit();
    }

    // ユーザーの認証
    $users = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $login_success = false;
    foreach ($users as $user) {
        list($stored_username, $stored_password) = explode(',', $user);

        if ($stored_username === $username && password_verify($password, $stored_password)) {
            // セッションIDの再生成
            session_regenerate_id(true);

            // ログイン成功
            $_SESSION['username'] = $username;

            // ユーザーエージェントとIPアドレスを保存
            $_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
            $_SESSION['user_ip'] = $_SERVER['REMOTE_ADDR'];

            header("Location: home.php");
            exit();
        }
    }

    echo "ユーザー名またはパスワードが間違っています。";
    exit();
}
?>
