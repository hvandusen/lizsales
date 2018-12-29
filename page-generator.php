<?php get_header(); ?>
<a href="<?php bloginfo('wpurl'); ?>" class="pword-back blue"><span>&lt;---</span>
<div>iwriteartiststatements.com</div>
</a>

<a href="<?php bloginfo('wpurl'); ?>" class="pdf blue"><span>DOWNLOAD AS A PDF</span></a>
<br>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

	 <?php //the_content(); ?>

<div class='mobile-header'>NEED AN ARTIST STATEMENT?</div>
<pre class='ascii robot1'>
L          m
	a   *   x     U  
  3      ___|___        !
   |  o o  |  S
|   /   |
\_\_/_/
________| |________
/   /| ***   *** |\   \
/___/ |           | \___\
|  |  | artist    |  |  |
|  |  | statement |  |  |
|  |  | generator |  |  |
|__|  \___________/  |__|
(  )  |   |   |   |  (  )
|---|   |---|
|___|   |___|
/    \  /    \
|_____| |_____|</pre>
 <span class='ascii'>
 <?php
 $title = 'NEED AN ARTIST STATEMENT?';
	asciiBar($title,true);
 ?>
 </span>

<div class='section '>
	<?php the_content();?>
	<div class="email-form"><?php echo do_shortcode('[contact-form-7 id="223" title="Email form"]'); ?></div>
</div>


<?php endwhile; ?>
<?php get_footer(); ?>

<script>
$(document).ready(function(){
	$('.wpcf7-form:eq(0)').submit(function(){
		window.sessionStorage.email = $(".wpcf7-date:eq(0)").val();
		console.log(window.sessionStorage)
	});
})
</script>
