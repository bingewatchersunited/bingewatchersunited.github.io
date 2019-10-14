<?php
	$name = "Binge Watchers United";
	$navigation = (object)[
		"news" => "News"
	];
	$description = "Binge Watchers United is an organization that was created to allow students to show appreciation for television series, films, and streaming services by having fun discussions.";
?>
<!DOCTYPE HTML>
<html class="bwu-site clearfix" id="bwu-site">
	<head>
		<title>Welcome to Binge Watchers United - an organization for people who love streaming!</title>
		<meta charset="UTF-8" />
		//<![CDATA[
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
		//]]>
		<meta name="keywords" content="Binge Watchers United, bwu, BWU" />
		<meta name="viewport" content="width=devide-width; initial-scale=1" />
		<?php if (isset($description)): ?>
		<meta name="description" content="<?php echo $description; ?>" />
		<?php endif; ?>
		<link rel="stylesheet" href="index.css" type="text/css" />
		<script src="index.js" type="text/javascript"></script>
	</head>
	<body class="bwu-content" id="bwu-content">
		<h1><?php echo $name; ?></h1>
	</body>
</html>