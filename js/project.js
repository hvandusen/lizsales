(function ($) {
	var count = 0;
	count++;
	$(document).ready(function(){
		$('body').mousemove(function(){
			$('.typewriter pre').css({

				'font-size': 20+ Math.sin(count/6)*3
			});
			count++;
		});
	});
})(jQuery);
