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
	var addedImages = 1;
	$('.img_input input').hide();
	$($('.img_input input')[0]).show();
	$('.img_input input').change(function(){
		$($('.img_input input')[addedImages]).show();
		addedImages++;
	});



	$(document).ready(function(){
		$('.input_submit').click(function(){

			//$(this).find('.wpfc7-submit').submit(function(e){
			var sub = $(this).prev().prev();
				console.dir();
				//submitter.submit(function(){


			//});
		});
		var animateTypewriter = false;
		$('#animateTypewriter').click(function(){
			animateTypewriter = !animateTypewriter;
			$(this).text((animateTypewriter ? 'animate':'dont animate'));

		})
		var cnt = 0;
		$('body').mousemove(function(){

			$('.wpfc7-submit').map(function(e,i){
				console.log(i);
			});
			if(animateTypewriter === true){
				$('.typewriter pre').css({
					'letter-spacing': 2+Math.sin((cnt-.5)/10),
					'font-size': 20+ Math.floor(Math.sin(cnt/10)*10)
				});
				cnt++;
			}
		});

	});
	$('.wpcf7-list-item label').map(function(i,e){
		//$('<span class="xBox">[ ]</span>').prependTo($(e));
		$(e).html('<span class="chbox">[<span> </span>]</span> '+$(e).html())
	});
	var ignoreNextClick = false;
	$('.wpcf7-list-item >label').click(function(e){
	//$('.wpcf7-list-item').click(function(e){
	//e.preventDefault();
	//e.stopPropagation();
	ignoreNextClick = !ignoreNextClick;
	if(ignoreNextClick)
		return;


		console.log('click')
		var box  = $(this).find('.chbox span');
		console.log(box.text().indexOf('X')>0)
		if(box.text().indexOf('X')>0){
			box.text(box.text().replace('X',' '))
		}

		else {
			box.text(box.text().replace(' ','X'))
		}
	})


})(jQuery);
