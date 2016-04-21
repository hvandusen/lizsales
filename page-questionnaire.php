<?php get_header(); ?>

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
