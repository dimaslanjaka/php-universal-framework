<?php

$requestData = $_REQUEST;
header('Content-type: application/json');
$class = new GoogleExt\client();
$client = $class->custom_client('blogger', '/auth/google');
$service = new GoogleExt\blogger($client);

if (isset($_REQUEST['blogid'])) {
  $service->byId($_REQUEST['blogid']);
} elseif (isset($_REQUEST['url'])) {
  $service->byUrl($_REQUEST['url']);
} elseif (isset($_SESSION['blogger']['url'])) {
  $service->byUrl($_SESSION['blogger']['url']);
} else {
  e(['error' => true, 'message' => 'Blog url empty']);
}

if (isset($_REQUEST['refresh'])) {
  $service->recrawl = true;
}

if (isset($_REQUEST['postid'])) {
  $post = $service->getPost($_REQUEST['postid']);
  if (is_array_object($post)) {
    e($post);
  }
}
