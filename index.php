<?php
	define("NAME", "Binge Watchers United");
	define("VERSION", "v1.0");

	function description($name){
		return `$name is a student organization chartered by Georgia State University. The purpose of the
		organization is to foster a comfortable environment for students to view and have discussions about television
		shows.`;
	}

	$title = constant("NAME");
	$desc = description($title);
?>
<!doctype html>
<html class="BWUDocument bwu-document" id="bwu-document">
	<head id="bwu-head">
		<?php echo "<title>" . $title . "</title>"; ?>
		<?php echo '<meta name="description" content="' . $desc . '" />'; ?>
		<meta charset="UTF-8" />
		<meta name="keywords" content="BWU, Binge Watchers United, binge watchers united, Television and Streaming Club" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="shortcut icon" href="BWULogo.png" type="image/png" sizes="8x8 16x16 32x32 64x64" />
		<link rel="apple-touch-icon" sizes="32x32" href="BWULogo.png" type="image/png" />
		<link rel="stylesheet" href="index.css" type="text/css" />
		<script src="index.js" type="application/javascript"></script>
	</head>
	<body class="BWUBody bwu-body" id="bwu-body">
		<div class="BWUContentWrapper bwu-content__wrapper">
			<figure class="BWULogoContainer bwu-logo__container">
				<div class="BWULogoWrapper bwu-logo__wrapper">
					<picture class="BWULogo bwu-logo">
						<source srcset="BWULogo.png" media="(min-width: 300px)" />
						<img src="BWULogo.png" alt="Binge Watchers United" />
					</picture>
				</div>
				<figcaption class="BWUIndicator bwu-indicator">
					We are now loading content for you guys. We appreciate your patience!
				</figcaption>
			</figure>
		</div>
	</body>
</html>