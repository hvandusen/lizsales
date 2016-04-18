<?php get_header(); ?>
<div class='nav'>
	<a class='left' href='#services'>Services</a>
	<a class='left'  href='#writers'>Writers</a>
	<a class='left' href='#process'>Process</a>
	<a class='left'  href='#pricing'>Pricing</a>
	<a class='right elementa' href='<?php bloginfo('url'); ?>/questionnaire'>O---K</a>
	<a class='right' href='#Contact'>Contact</a>
</div>
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

	 <?php //the_content(); ?>
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



<div id='services' class='ascii section'>
<?php asciiBar('SERVICES'); ?>
<p>We write biographies, project statements, press releases, and social media blurbs for artists.</p>
</div>

<div id='writers' class='ascii section'>
<?php asciiBar('WRITERS'); ?>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.</p>
</div>

<div id='process' class='ascii section'>
<?php asciiBar('PROCESS'); ?>
<p>You will be assigned a writer based on your request. After you supply your assigned writer with images of your artwork and answers to
a general questionnaire. Then he or she will reach out to you with more specific follow up questions by phone or email, depending on your preference. This call may last up to one hour. A draft of your statement will be written and sent to you for your review. A second edit will be sent to you based on your feedback on this draft. You are allowed up to two revisions. Finally, your customized artist statement, biography, project statement and/or press release will be finished and ready to share.
Writings created by I Write Artist Statements automatically become the property of the artist they were created for. This is commonly referred to as the “work-for-hire” doctrine. You may alter or use the writing in any way you wish without crediting I Write Artist Statements.
Sorry, we do not accept current art students as clients. Sorry, we are not comfortable doing your homework for you.</p>
</div>

<div id='pricing' class='ascii section'>
	<?php asciiBar('PRICING'); ?>
<?php the_field('buy-form'); ?>
</div>

<div id='contact' class='ascii section'>
<?php asciiBar('CONTACT'); ?>
<p>For all inquires including writing samples please email us.</p>
</div>
<div class='ascii thankyou'>
<pre>
<span class='ty-1'>	______ _ _</span>
<span class='ty-2'>(_) | | | | | |</span>
<span class='ty-3'>|||__,__|| __       |</span>
<span class='ty-4'>_ | |/ \ / | / |/ | |/_)   |   | /  \_|   |  |</span>
<span class='ty-5'>(_/ | |_/\_/|_/ | |_/| \_/   \_/|/\__/  \_/|_/O</span>
<span class='ty-6'>/|</span>
<span class='ty-7'>\|</span>
	</pre>
</div>
<?php endwhile; ?>


<?php get_footer(); ?>
