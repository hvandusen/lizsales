(function ($) {
	var count = 0;
	count++;
	$('.input_contents').map(function(e,i){
		$(i).wrap($( "<div class='input_outer'><div class='input_inner'></div></div>" ));
		//$(i).remove();
	});
	

	$('input').focus(function(){
		console.log(this)
		$('.clicked').removeClass('clicked');
		$(this).parent().prev().addClass('clicked');
	});



	$(document).ready(function(){
		$('.input_submit').click(function(){

			//$(this).find('.wpfc7-submit').submit(function(e){
			var sub = $(this).prev().prev();
				console.dir();
				//submitter.submit(function(){


			//});
		});

		$('body').mousemove(function(){

			$('.wpfc7-submit').map(function(e,i){
				console.log(i);
			});
			//$('.typewriter pre').css({
				//'letter-spacing': 2+Math.sin((count-.5)/10),
			//	'font-size': 20+ Math.floor(Math.sin(count/10)*10)
			//});
			count++;
		});

	});

})(jQuery);
