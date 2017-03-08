<?php

$callback = $_GET['_jsonp'];
$name = $_GET['name'];

echo $callback.'({"name":"'.$name.'","age":"27"})'
?>