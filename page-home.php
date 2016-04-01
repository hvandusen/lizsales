<?php get_header(); ?>
<div class='nav'>
	<a class='left' href='#services'>Services</a>
	<a class='left'  href='#writers'>Writers</a>
	<a class='left' href='#process'>Process</a>
	<a class='left'  href='#pricing'>Pricing</a>
	<a class='right elementa' href='/form'>O---K</a>
	<a class='right' href='#Contact'>Contact</a>
</div>
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

	 <?php //the_content(); ?>
<div class='ascii typewriter'>
	some centered ish
</div>

<div class='ascii typewriter'>
	<pre>
	    ---------------------        
	    |                   |        
	    |     <span>I WRITE</span>       |        
	    |     <span>ARTIST</span>        |        
	    |     <span>STATEMENTS</span>    |        
	(     |                   |&nbsp;&nbsp;        
	  \  X=====U===========U======D        
	   \___|_______  V ________|___        
	    /      \  ///III\\\  /      \        
	    /------- + ————————— + -------\        
	    |    0 0 0 0 0 0 0 0 0 0 0 0    |        
	    |     0 0 0 0 0 0 0 0 0 0 0     |        
	    |    0 0 0 0 0 0 0 0 0 0 0 0    |        
	    |     0 0 0 0 0 0 0 0 0 0 0     |        
	    |    0 0 0 0 0 0 0 0 0 0 0 0    |        
	    \       (_____________)       /        
	    \___________________________/        
	</pre>
</div>
<div class='ascii section'>
<?php
$headerBar = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~(|––––––––––––|)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';
	$preName = '|(  ';
	$postName = '  )|   ';
	echo '<div>' . $headerBar . '</div>';
	echo '<div>' . $preName . 'Services'. $postName . '</div>';
	echo '<div>' . $headerBar . '</div>'; ?>
</div>
<?php endwhile; ?>

<?php get_footer(); ?>
