<?php get_header(); ?>
<script type="text/javascript">
var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
</script>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

	 <?php //the_content(); ?>
<div class='ascii typewriter'>
<pre>
	    ---------------------
	    |                   |
	    |     <span class='asciiTitle'>I WRITE</span>       |
	    |     <span class='asciiTitle'>ARTIST</span>        |
	    |     <span class='asciiTitle'>STATEMENTS</span>    |
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


<?php
	$sections = get_field('sections');
	if(is_array($sections))
	foreach($sections as $section){
		echo "<div id='" . strtolower($section['name']) . "' class='ascii section'>";
		asciiBar(strtoupper($section['name']));
		echo $section['text'];
		echo "</div>";
	}
?>



<div id='contact' class='ascii section'>
<?php asciiBar('CONTACT'); ?>
<p>For all inquires including writing samples please email us.</p>
</div>
<div class='ascii thankyou'>
<pre>
<span class='ty-1'>	______ _                    _                        </span>
<span class='ty-2'>(_) |  | |                  | |                      |</span>
<span class='ty-3'>|  | |     __,   _  _   | |           __         |</span>
<span class='ty-4'>_|  |/ \   /  |  / |/ |  |/_)   |   | /  \_|   |  |</span>
<span class='ty-5'>(_/  |   |_/\_/|_/  |  |_/| \_/   \_/|/\__/  \_/|_/O</span>
<span class='ty-6'>/|</span>
<span class='ty-7'>\|</span>
	</pre>
</div>
<?php endwhile; ?>


<?php get_footer(); ?>
