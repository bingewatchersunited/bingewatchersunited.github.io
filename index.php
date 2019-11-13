<?php
	include "news/news.php";
	include "";
	
	define(NAME, "Binge Watchers United");
	define(ALIASES, array("BWU", "Television Lovers Club"));
	define(KEYWORDS, array_merge(ALIASES, (array) NAME));
	define(VERSION, "1.1.0 beta");
	define(DESCRIPTION, "${name} is an organization geared towards students that need a safe space to show appreciation for television, film, and modern events related to media by attending meetings, participating in fun activities, and of course, having viewings.");
	define(TITLE, "Welcome to ${name} - A Safe Place to Discuss Your Favorite Shows!!!");
	$desc = constant("DESCRIPTION");
	$name = constant("NAME");
	$nav = [
		"Home" => "index.php",
		"News" => "news.php",
		"Contact" => "contact.php",
		"About" => "about.php",
		"More" => [
			"Timer" => "timer.php",
			"Jeopardy Board" => "jeopardy-board.php"
		]
	];
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
				<nav class="BWUNavigation bwu-navigation" id="BWUNavigation">
					<ul class="BWUNav bwu-nav" id="BWUNav">
						<?php 
							foreach ($nav as $t => $a){
								if (!isset($a) || !isset($t)) continue;

								if ($a === "" || $t === "") continue;

								echo "<li class=\"BWUNavItem bwu-nav__item\">";
								
								if (is_object($a) || is_array($a)){
									$link = "#";

									if (isset($a["__link"])){
										$ol = $link;
										$link = $a["__link"];

										if ($link === "" || !isset($link) || !is_string($link)){
											$link = $ol;
										}

										unset($ol, $a["__link"]);
									}

									echo "<a href=\"${link}\" class=\"BWUNavLink bwu-nav__link\">${t}</a>";
									echo "<section class=\"BWUNavSubnav bwu-nav__subnav\"><ul class=\"BWUSubnav bwu-subnav\">";

									foreach ($a as $k => $v){

										if (!isset($k) || !isset($v)) continue;

										if ($v === "" || $k === "") continue;

										echo "<li class=\"BWUSubnavItem bwu-subnav__item\">";

										if (is_object($v) || is_array($v)){
											$l = "#";

											if (isset($v["__link"])){
												$olink = $l;
												$l = $v["__link"];

												if ($l === "" || !isset($l) || !is_string($l)){
													$l = $olink;
												}

												unset($olink, $v["__link"]);
											}

											echo "<a href=\"${l}\" class=\"BWUSubnavLink bwu-subnav__link\">${k}</a>";
											echo "<section class=\"BWUNavSubnav2 bwu-nav__subnav2\"><ul class=\"BWUSubnav2 bwu-subnav2\">";

											foreach ($v as $key => $value){
												if (!isset($value) || !isset($key)) continue;

												if ($value === "" || $key === "") continue;

												echo "<li class=\"BWUSubnav2Item bwu-subnav2__item\">";
												
												if (!is_string($value)){
													$value = "#";
												}

												echo "<a href=\"${value}\" class=\"BWUSubnav2Link bwu-subnav2__link\">${key}</a>";
												echo "</li>";

												unset($value);
											}

											echo "</ul></section>";
										} else {
											if (!is_string($v)){
												$v = "#";
											}

											echo "<a href=\"${v}\" class=\"BWUSubnavLink bwu-subnav__link\">${k}</a>";
										}

										echo "</li>";
										unset($v);
									}

									echo "</ul></section>";
								} else {
									if (!is_string($a)){
										$a = "#";
									}

									echo "<a href=\"${a}\" class=\"BWUNavLink bwu-nav__link\">${t}</a>";
								}

								unset($a);
							}
						?>
					</ul>
				</nav>
			</header>
		</div>
	</body>
</html>