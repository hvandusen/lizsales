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
	@media(max-width: 480px){
		.mobile-header {
			display: block;
	    text-align: center;
	    margin-top: 22px;
			font-family: Elementa;
			font-size: 16px;
			padding: 0 10%;
		}
	}

</style>
<br>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

	 <?php //the_content(); ?>

<div class='mobile-header'>ARTIST STATEMENT GENERATOR</div>
 <span class='ascii'>
 <?php
 $title = 'ARTIST STATEMENT GENERATOR';

 asciiBar($title,true);
 ?>
 </span>

<div class='questionnaire section '>
	<?php echo do_shortcode('[contact-form-7 id="223" title="Email form"]'); ?>
	<?php the_content(); ?>
</div>


<?php endwhile; ?>

<?php get_footer(); ?>
<script>
$(document).ready(function(){
	if(window.innerWidth<480){
		$('.preBar, .postBar').text('')
	}
	$(".XXXwpcf7-form").submit(function(e){
		window.sessionStorage.email = $(this).val();
		var now = new Date();
		var day = ("0" + now.getDate()).slice(-2);
		var month = ("0" + (now.getMonth() + 1)).slice(-2);
		var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
		$(".wpcf7-date").val(today+" ");

	});

	var form = $('.wpcf7-form:eq(0)');
	// Hijack form submit
	form.submit(function(event){
		// Set username variable
		var now = new Date();
		var day = ("0" + now.getDate()).slice(-2);
		var month = ("0" + (now.getMonth() + 1)).slice(-2);
		var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
		var info = {
		"your-date": today,
		"your-email": $(".wpcf7-email").val()
		}
		// Check if username value set
		if ( $.trim(info) != '' ) {
			// Process AJAX request
			$.post('/generator/#wpcf7-f223-p219-o1', info, function(data){
				// Append data into #results div
				console.log("data after ",info)
			});
		}

		// Prevent default form action
		event.preventDefault();
	});
})
</script>
