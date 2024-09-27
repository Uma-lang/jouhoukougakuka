<?php
session_start();
session_destroy();  // セッションを破棄
header('Location: login.php');  // ログインページにリダイレクト
exit();