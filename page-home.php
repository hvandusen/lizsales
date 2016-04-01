<?php get_header(); ?>
<div class='nav'>
	<a class='left' href='#services'>services</a>
	<a class='left'  href='#writers'>writers</a>
	<a class='left' href='#process'>process</a>
	<a class='right' href='/contact'>O---K</a>
	<a class='right'  href='#pricing'>pricing</a>
</div>
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

	 <?php //the_content(); ?>

	<div class='ascii'>
<pre>

 \       (_____________)       /
	  \___________________________/
</pre>
	</div>

<?php endwhile; ?>

<?php get_footer(); ?>
