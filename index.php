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
	define(DESCRIPTION, "${NAME} is an organization geared towards students that need a safe space to show appreciation for television, film, and modern events related to media by attending meetings, participating in fun activities, and of course, having viewings.");
	define(TITLE, "Welcome to ${NAME} - A Safe Place to Discuss Your Favorite Shows!!!");
?>
<!doctype html>
<html class="BWUSite" id="BWUSite">
	<head>
		<title><?php echo TITLE; ?></title>
		<meta charset="UTF-8" />
		<?php
			$j = implode(", ", KEYWORDS);
			echo "<meta name=\"keywords\" content=\"${j}\" />";
			echo "<meta name=\"description\" content=\"${DESCRIPTION}\" />";
		?>
		<link rel="stylesheet" href="index.css" type="text/css" />
		<link rel="manifest" href="manifest.json" type="text/json" />
		<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
		<script src="index.js"></script>
		<script src="main.js"></script>
	</head>
	<body class="BWUContent" id="BWUContent">
		Hello World
	</body>
</html>