<?php
	define(NAME, "Binge Watchers United");
	define(ALIASES, array("BWU", "Television Lovers Club"));
	define(KEYWORDS, array_merge(ALIASES, (array) NAME));
	define(VERSION, "1.1.0 beta");
	define(NAV, (object) array(
		"Home" => "index.php",
		"News" => "news.php",
		"Contact" => "contact.php",
		"About" => "about.php",
		"More" => (object) array(
			"Timer" => "timer.php",
			"Jeopardy Board" => "jeopardy-board.php"
		)
	));
	$desc = constant("DESCRIPTION");
	$name = constant("NAME");
	define(DESCRIPTION, "${desc} is an organization geared towards students that need a safe space to show appreciation for television, film, and modern events related to media by attending meetings, participating in fun activities, and of course, having viewings.");
	define(TITLE, "Welcome to ${name} - A Safe Place to Discuss Your Favorite Shows!!!");
?>
<!doctype html>
<html class="BWUSite" id="BWUSite">
	<head>
		<title><?php echo TITLE; ?></title>
		<meta charset="UTF-8" />
		<?php
			$j = implode(", ", KEYWORDS);
			echo "<meta name=\"keywords\" content=\"${j}\" />";
			echo "<meta name=\"description\" content=\"${desc}\" />";
		?>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="index.css" type="text/css" />
		<link rel="manifest" href="manifest.json" type="text/json" />
		<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
		<script src="index.js"></script>
		<script src="main.js"></script>
	</head>
	<body class="BWUContent" id="BWUContent">
		<div class="BWUContentWrapper" id="BWUContentWrapper">
			<header class="BWUHeader" id="BWUHeader">
				<h1 class="BWUHeading" id="BWUHeading">
					<a href="index.php" class="BWULogoLink bwu-logo__link" id="BWULogoLink">
						<img src="BWULogo.png" class="BWULogoImage bwu-logo__image" id="BWULogoImage" />
						<span class="BWULogoText" id="BWULogoText">
							<?php echo constant("NAME"); ?>
						</span>
					</a>
				</h1>
				<nav class="BWUNavigation" id="BWUNavigation"></nav>
			</header>
		</div>
	</body>
</html>4