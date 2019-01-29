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
		window.sessionStorage.email = $(".wpcf7-email").val();
	});

	setInterval(function(){
		var txt = $(".ascii.robot1").html().split('\n');
		var rest = txt.splice(4);
		txt[0] = robotString(12);
		txt[1] = robotString(16);
		txt[2] = robotString(9)+"  ___|___  "+robotString(9);
		txt[3] = robotString(3)+"  |  o o  |  "+robotString(3);
		var out = txt.concat(rest).join("\n");
		$(".ascii.robot1").html(out);
	},500)
})
function robotString(length){
	var out = "";
	var chars = "  a X r t Z s & 8*%#Q(#)$ _             "
	for (var i = 0; i < length; i++) {
		out+=chars.charAt(Math.floor(Math.random()*chars.length))
	}
	return out;
}
</script>
