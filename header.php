<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<title><?php print trim(wp_title('', false)); ?><?php if(wp_title('', false)) { echo ' | '; } ?><?php bloginfo('name'); ?></title>
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="description" content="We write artist statements, biographies, project statements, press releases, and social media blurbs for artists!" />
<meta name="keywords" content="artist statement, artist statements, blurbs, biographies, press releases" />
	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
	<script src="<?php bloginfo('template_directory'); ?>/js/compressed/modernizr.js"></script>
	<?php wp_head(); ?>
</head>
<div class='pleaseRotate'>Please rotate your phone.</div>

<body <?php
body_class();
?>>
<?php include_once("analyticstracking.php") ?>
<div id="container">
    <header id="header">

    </header>
    <div id="main" role="main">
			<div id='content'>
				<div class='mobile-title'>I WRITE ARTIST STATEMENTS</div>
				<div class='nav'>
					<a class='left' href='<?php bloginfo('wpurl')?>/#services'>Services</a>
					<a class='left' href='<?php bloginfo('wpurl')?>/#writers'>Writers</a>
					<a class='left' href='<?php bloginfo('wpurl')?>/#process'>Process</a>
					<a class='left' href='<?php bloginfo('wpurl')?>/#pricing'>Pricing</a>
					<a class='right elementa' href='<?php bloginfo('url'); ?>/generator'>ARTIST STATEMENT GENERATOR</a>
					<a class='left' href='mailto:info@iwriteartiststatements.com'>Contact</a>
				</div>
