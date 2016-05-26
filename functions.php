<?php
function chipsScripts() {
	if (!is_admin()) {
		wp_register_script('libsJS',get_bloginfo('template_directory') . '/js/compressed/libs.js');
		wp_enqueue_script('libsJS');
		//if(is_page('home')){
			wp_register_script('scriptsJS',get_bloginfo('template_directory') . '/js/compressed/project.js');
			wp_enqueue_script('scriptsJS');
		//}

	}
}
add_action('init', 'chipsScripts');

// URL endpoints let you check if a URL contains a string
//add_rewrite_endpoint( 'archive', EP_PERMALINK | EP_PAGES );
	// Use:
	// if ( isset( $wp_query->query_vars['archive'] )){ do stuff... }

add_filter( 'show_admin_bar', '__return_false' );
/* Change the Stylesheet directory */
add_filter('stylesheet_uri','wpi_stylesheet_uri',10,2);
function wpi_stylesheet_uri($stylesheet_uri, $stylesheet_dir_uri){
	return $stylesheet_dir_uri.'/css/styles.css';
}

/* WORDPRESS WIDGETS */
function chips_widgets_init() {
	register_sidebar( array(
		'name' => __( 'Primary Widget Area', 'chipsstarter' ),
		'id' => 'primary-widget-area',
		'description' => __( 'The primary widget area', 'chipsstarter' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
}
add_action( 'widgets_init', 'chips_widgets_init' );


// ACF OPTIONS PAGES
// if(function_exists('acf_add_options_page')) {
// 	acf_add_options_page();
// 	acf_add_options_sub_page('Header');
// 	acf_add_options_sub_page('Footer');
// }

// Facebook Open Graph
add_action('wp_head', 'add_fb_open_graph_tags');
function add_fb_open_graph_tags() {
	if (is_single()) {
		global $post;
		if(get_the_post_thumbnail($post->ID, 'thumbnail')) {
			$thumbnail_id = get_post_thumbnail_id($post->ID);
			$thumbnail_object = get_post($thumbnail_id);
			$image = $thumbnail_object->guid;
		} else {
			$image = ''; // Change this to the URL of the logo you want beside your links shown on Facebook
		}
		//$description = get_bloginfo('description');
		$description = my_excerpt( $post->post_content, $post->post_excerpt );
		$description = strip_tags($description);
		$description = str_replace("\"", "'", $description);
?>
<meta property="og:title" content="<?php the_title(); ?>" />
<meta property="og:type" content="article" />
<?php if(strlen($image) > 3){ ?><meta property="og:image" content="<?php echo $image; ?>" /><?php } ?>
<meta property="og:url" content="<?php the_permalink(); ?>" />
<meta property="og:description" content="<?php echo $description ?>" />
<meta property="og:site_name" content="<?php echo get_bloginfo('name'); ?>" />

<?php 	}
}

function my_excerpt($text, $excerpt){
	if ($excerpt) return $excerpt;
	$text = strip_shortcodes( $text );
	$text = apply_filters('the_content', $text);
	$text = str_replace(']]>', ']]&gt;', $text);
	$text = strip_tags($text);
	$excerpt_length = apply_filters('excerpt_length', 55);
	$excerpt_more = apply_filters('excerpt_more', ' ' . '[...]');
	$words = preg_split("/[\n
	 ]+/", $text, $excerpt_length + 1, PREG_SPLIT_NO_EMPTY);
	if ( count($words) > $excerpt_length ) {
		array_pop($words);
		$text = implode(' ', $words);
		$text = $text . $excerpt_more;
	} else {
		$text = implode(' ', $words);
	}
	return apply_filters('wp_trim_excerpt', $text, $excerpt);
}

// Remove canonical meta tag
remove_action('wp_head', 'rel_canonical');

// Add Featured Images to Wordpress
// add_theme_support( 'post-thumbnails' );

// Move the JS to the footer
remove_action('wp_head', 'wp_print_scripts');
remove_action('wp_head', 'wp_print_head_scripts', 9);
remove_action('wp_head', 'wp_enqueue_scripts', 1);
add_action('wp_footer', 'wp_print_scripts', 5);
add_action('wp_footer', 'wp_enqueue_scripts', 5);
add_action('wp_footer', 'wp_print_head_scripts', 5);
// Clean up WP header
remove_action( 'wp_head', 'feed_links_extra'); // Display the links to the extra feeds such as category feeds
remove_action( 'wp_head', 'feed_links'); // Display the links to the general feeds: Post and Comment Feed
remove_action( 'wp_head', 'rsd_link'); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action( 'wp_head', 'wlwmanifest_link' ); // Display the link to the Windows Live Writer manifest file.
remove_action( 'wp_head', 'index_rel_link' ); // index link
remove_action( 'wp_head', 'parent_post_rel_link', 10); // prev link
remove_action( 'wp_head', 'start_post_rel_link', 10); // start link
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10); // Display relational links for the posts adjacent to the current post.
remove_action( 'wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version
add_editor_style( 'css/editor-style.css' );
// add_action( 'admin_enqueue_scripts', 'load_admin_style' );
function load_admin_style() {
	wp_enqueue_style( 'admin_css', get_template_directory_uri() . '/css/admin-style.css', false, '1.0.0' );
}

function replace_howdy( $wp_admin_bar ) {
	$my_account=$wp_admin_bar->get_node('my-account');
	$newtitle = str_replace( 'Howdy,', '', $my_account->title );
	$wp_admin_bar->add_node( array(
		'id' => 'my-account',
		'title' => $newtitle,
	) );
}
add_filter( 'admin_bar_menu', 'replace_howdy',25 );

function remove_admin_menu_items() {
	$remove_menu_items = array('Links','Comments');
	global $menu;
	end ($menu);
	while (prev($menu)){
		$item = explode(' ',$menu[key($menu)][0]);
		if(in_array($item[0] != NULL?$item[0]:"" , $remove_menu_items)){
		unset($menu[key($menu)]);}
	}
}
add_action('admin_menu', 'remove_admin_menu_items');

function remove_recent_comment_style() {
	global $wp_widget_factory;
	remove_action(
		'wp_head',
		array( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style' )
	);
}
add_action( 'widgets_init', 'remove_recent_comment_style' );

add_action('wp_dashboard_setup', 'my_custom_dashboard_widgets');
function my_custom_dashboard_widgets() {
	global $wp_meta_boxes;
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);

	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_recent_drafts']);
}



function custom_password_form() {
	//' . __( "THIS IS YOUR NEW PASSWORD INTRO TEXT THAT SHOWS ABOVE THE PASSWORD FORM" ) . '
    global $post;
    $label = 'pwbox-'.( empty( $post->ID ) ? rand() : $post->ID );
    $o = '<div class="key" href="">O---K</div><form class="protected-post-form post-password-form" action="' . get_option('siteurl') . '/wp-login.php?action=postpass" method="post"> <a href="/" class="pword-back"><span><---</span><div>iwriteartiststatements.com</div></a>
		 </label><div class="pp"><div id="pword-box"><span><input class="pword-field button1" name="post_password" id="' . $label . '" type="password" style="" size="20" placeholder="Password: "/><input type="submit" name="Submit" class="button button2" value="' . esc_attr__( "ENTER" ) . '" /></span></div></div>';
  	if (isset($_COOKIE['wp-postpass_' . COOKIEHASH]) and
  	$_COOKIE['wp-postpass_' . COOKIEHASH] != $post->post_password){
   $o = $o . '<p style="color:#C00;">Password Invalid, please try again.</p>';
  }
	 $o = $o . '</form>';

    return $o;
}

add_filter( 'the_password_form', 'custom_password_form' );





//add_filter( 'the_password_form', 'invalid_password',9 );










function asciiBar($title,$short){
  $buildMiddle = '<span class="preBar hold" >';
  $buildTop = '<span class="preBar" >';
  $noTitle = '';
  for ($x = 0; $x <= strlen($title); $x++){
    $noTitle = $noTitle . '-';
  }
  //total bar length!
  $lenBar = 79;
	if($short){
		$lenBar = 79;
	}
  $even = strlen($title) % 2 === 0;
  //this accounts for the "skip" in the middle of the string
  if($even)
    $lenText = strlen($title)+1;
  else {
    $lenText = strlen($title)+2;
  }
  $padding = ($lenBar-$lenText)/2;
  $preName = '(|';
	$postName = '|)<span class="postBar hold" >';
  for ($x = 0; $x <= $lenBar; $x++) {
    if($x<($lenBar-$lenText)/2){
      $newMiddle = ' ';
      $newTop = '~';
    }
    else if ($x===($lenBar-$lenText)/2){
      $newMiddle =  '</span>' . $preName . '<span class="asciiTitle">  &nbsp;' . $title . '&nbsp;</span>  '. $postName;
      $newTop = '</span>' . $preName . '<span>--' . $noTitle . '-</span>'. $postName ;//$newTop . $preName;
      $x = $x + $lenText;
    }
    else{
      $newMiddle = ' ';
      $newTop = '~';
    }

    $buildMiddle = $buildMiddle . $newMiddle;
    $buildTop = $buildTop . $newTop;
}
$buildMiddle = $buildMiddle . '</span>';
$buildTop = $buildTop . '</span>';
// bar total is 67. space+ bars+no space

//$headerBar = '&nbsp;~~~~~~~~~~~~~~~~~~~~~~~~~~~~~(|––––––––––––|)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';
  //echo strlen($headerBar);
	echo '<div class="bar">';
	echo '<div class="bar-top">' . $buildTop . '</div>';
  echo '<div class="bar-middle">' . $buildMiddle . '</div>';
  echo '<div class="bar-bottom">' . $buildTop . '</div>';
	//note hen- services is 8 chars and the rest are 7!!!
echo '</div>';
}
function paypalOutput( $atts ){
	if(isset($atts)){
		if(isset($atts['price'])){
			$price = $atts['price'];
		}
		if(isset($atts['name'])){
			$name = $atts['name'];
		}
		if(isset($atts['label'])){
			$label = $atts['label'];
		}
		else {
			$label = 'BUY NOW';
		}
	}
	ob_start();
	?>

		<div class="paypal-form">
				<div class="paypal-item-single">
					<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
			    <input type="hidden" name="cmd" value="_xclick">
			    <input type="hidden" name="business" value="henry@dusendusen.com">
			    <input type="hidden" name="item_name" value="<?php echo $name; ?>">
			    <input type="hidden" name="item_number" value="1">
			    <input type="hidden" id='price' name="amount" value="0<?php //echo $price; ?>">
			    <input type="hidden" name="no_shipping" value="0">
			    <input type="hidden" name="no_note" value="1">
			    <input type="hidden" name="currency_code" value="USD">
			    <input type="hidden" name="lc" value="AU">
			    <input type="hidden" name="bn" value="PP-BuyNowBF">
					<div class='btn'>
						<div class="button_box">
							<input type="submit" class="paypal-submit" value="<?php echo $label; ?>" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
					  </div>
					</div>
					</form>
				</div>
		</div>



		<?php
	return ob_get_clean();
}
add_shortcode( 'paypal', 'paypalOutput' );

function send_my_mail(){
	$coupons = get_field('coupon_codes', 'option');
	$str = '[  ';//'"name": "joe"';
	$c = 0;
	foreach($coupons as $coupon){
		if(!$c==0){
			$str.= ',';
		}
			$str.= '{"name" :"' . $coupon['coupon_name'] .'",';//'{"name":"' . $coupon['coupon_name'] . '"},';
			$str.= '"discount" :' . $coupon['coupon_discount'] .',';
			if($coupon['type']==''){
				$str.= '"percent" : 0}';
			}
			else {
				$str.= '"percent" : 1}';
			}
			//$str.= '"percent" :' . $coupon['type'] .'}';
			$c = $c+1;
	//	$str = $str + $coupon['coupon_name'];
	//print_r($coupon['coupon_name'].);
	}

	$str.=' ]';
	print_r($str);
	//print_r('{ name: "' . $coupons[0]['coupon_name'] .'", price: '. $coupons[0]['coupon_discount']);
	//echo $str;//'coupon1,coupon2,coupon3,coupon4,blank';
}

add_action('wp_ajax_sendmail', 'send_my_mail');
add_action('wp_ajax_nopriv_sendmail', 'send_my_mail');

if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'coupon codes',
		'menu_title'	=> 'coupon codes',
		'menu_slug' 	=> 'coupons',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));

}
