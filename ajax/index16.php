<?php

$callback = $_GET['_jsonp'];

echo $callback.'({"name":"张三","age":"27"})'
?>