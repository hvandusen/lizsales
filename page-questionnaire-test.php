<?php get_header(); ?>
<a href="<?php bloginfo('wpurl'); ?>" class="pword-back blue"><span>&lt;---</span>
<div>iwriteartiststatements.com</div>
</a>
<a href="<?php bloginfo('wpurl'); ?>" class="pdf blue"><span>DOWNLOAD AS A PDF</span></a>
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
		  margin-bottom: 5.6em;
	}
	@media(max-width: 480px){
		.bar {
			display: none;
		}
	}
	.mobile-header {
		  display: none;
	}


</style>
<br>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

	 <?php //the_content(); ?>

<div class='mobile-header'>ARTIST STATEMENT QUESTIONNAIRE</div>
 <span class='ascii'>
 <?php
 $title = 'ARTIST STATEMENT QUESTIONNAIRE';

 asciiBar($title,true);
 ?>
 </span>
<div class='output hidden'></div>
<div class='questionnaire test section '>
	<?php the_content(); ?>
</div>

<?php endwhile; ?>

<?php get_footer(); ?>
<script>
$(document).ready(function(){
	if(window.innerWidth<480){
		$('.preBar, .postBar').text('')
	}

})
</script>
