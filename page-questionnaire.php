<?php get_header(); ?>
<a href="<?php bloginfo('wpurl'); ?>" class="pword-back blue"><span>&lt;---</span>
<div>iwriteartiststatements.com</div>
</a>

<style>
	.left, .right{
		display: none;
	}
	.right.elementa {
		display: none;
	}
	.pword-back div {
		/*color: #0033cc;
		border-bottom: solid 1px #0033cc;*/
	}
	.bar {
		  margin-top: 3em;
	}

</style>
<br>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

	 <?php //the_content(); ?>


 <span class='ascii'>
 <?php
 $title = 'ARTIST STATEMENT QUESTIONNAIRE';
 asciiBar($title);
 ?>
 </span>

<div class='questionnaire section '>
	<?php the_content(); ?>
</div>


<?php endwhile; ?>

<?php get_footer(); ?>
