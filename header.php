<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<title><?php print trim(wp_title('', false)); ?><?php if(wp_title('', false)) { echo ' | '; } ?><?php bloginfo('name'); ?></title>
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
	<script src="<?php bloginfo('template_directory'); ?>/js/compressed/modernizr.js"></script>
	<?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>

<div id="container">
    <header id="header">

    </header>
    <div id="main" role="main">
			<div id='content'>
				<div class='mobile-title'>I Write Artist Statements</div>
				<div class='nav'>
					<a class='left' href='/#services'>Services</a>
					<a class='left' href='/#writers'>Writers</a>
					<a class='left' href='/#process'>Process</a>
					<a class='left' href='/#pricing'>Pricing</a>
					<a class='right elementa' href='<?php bloginfo('url'); ?>/questionnaire'>O---K</a>
					<a class='right' href='#contact'>Contact</a>
				</div>
