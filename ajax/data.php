<?php
$username = $_POST['username'];
$password = $_POST['password'];


$flag = 1;

if($flag == 1){
    echo '用户名'.$username.'|密码'.$password;
}else{
    echo 0;
}



?>


<script type="text/javascript">
    parent.document.getElementById("showdiv").innerHTML = '我日你麻痹的';
</script>