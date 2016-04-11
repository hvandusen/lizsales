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


 <span class='ascii'>
 <?php
 $title = 'Artist Statement Questionnaire';
 asciiBar($title);
 ?>
 </span>

<div class='questionnaire section '>

	<?php the_content(); ?>


</div>



<?php endwhile; ?>

<?php get_footer(); ?>
