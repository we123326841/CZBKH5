<?php

$username = $_GET['username'];
$password = $_GET['password'];


echo  '账号'.$username.'密码'.$password;

header("location:./index05.html?falg=1");

?>