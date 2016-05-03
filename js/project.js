(function ($) {
	var count = 0;
	var scrolls = {};
	var max_bars = 38;
	function setHeaders(){
		$('.bar').map(function(e,i){
			var bar = $(i).find('div')[0];
			console.log($(bar).text().length);
		});
		if(window.innerWidth>1408)
			return;
		var remove = /*Math.abs(*/Math.floor((window.innerWidth-1108)/7);
		console.log(remove)

		var newString = '';
		for(var i =0;i<remove;i++){
			newString+= '~';
		}

		$('.postBar, .preBar').text(newString);
	}
  $(window).resize(function(){
		setHeaders();
	});

	$('textarea').scroll(function(){
		console.log($(this).scrollTop());
		scrolls[$(this).closest('.input_outer').index()] = $(this).scrollTop();
		$(this).css('background-position-y', -1* $(this).scrollTop());
	});
	count++;
	$('.input_contents').map(function(e,i){
		$(i).wrap($( "<div class='input_outer'><div class='input_inner'></div></div>" ));
		//$(i).remove();
	});
var cart = {};


	$('input').focus(function(){
		//console.log(this)
		$('.clicked').removeClass('clicked');
		$(this).parent().prev().addClass('clicked');
	});
$('.wpcf7-not-valid-tip').map(function(e,i){
	var label = $(i).parent().prev();
	console.log($(i).parent().prev());//.closest('label'));
	label.css('color','red');
	$(this).remove();
});



	$(document).ready(function(){
			setHeaders();
		$('.numbers').map(function(i,e){
			console.log(e);
			$(e).prop('value','<span>1.</span> \n<span>2.</span> \n<span>3.</span>');
			$(e).css('color','#0033cc');
		});

		$('.input_submit').click(function(){
			var sub = $(this).prev().prev();
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
	var cartTotal = 0;

	$('.wpcf7-list-item >label').click(function(e){
		ignoreNextClick = !ignoreNextClick;
		if(ignoreNextClick)
			return;

		var input_group = $(this).closest('p').index();
		var price = parseInt($(this).text().split('$')[1]);
		var allOfTheAbove = $(this).text().indexOf('All of')>-1;
		var inputIndex = $(this).parent().index();
		var box  = $(this).find('.chbox span');

		//setup cart
		if(!cart.hasOwnProperty(input_group))
			cart[input_group] = 0;

		//if already selected
		if(box.html().indexOf('X')>-1){
			box.html(' ');//box.html().replace('X',' '))
			cart[input_group]-= price;
			cartTotal -= price;

		}
		else {
			box.html('X');//box.html(box.html().replace(' ','X'));//box.html().replace(' ','X'))
			cart[input_group]+= price;
			cartTotal += price;
			//$(this).find('input').attr('checked',true);
		}
		console.log("text: "+box.html())

		if(allOfTheAbove && $(this).find('input')[0].checked=== false){
			//console.log('please get rid!!');
			box.html(' ');
			allOfTheAbove = false;

		}

		if(window.ajaxurl){
			//update all checkboxes
			var inputs = $(this).closest('.wpcf7-form-control').find('.wpcf7-list-item');
			var forceAll = true;
			inputs.map(function(i,e){
				var actualCheckbox = 	$(e).find('input');
				var checked = actualCheckbox[0].checked;
				if(i<inputs.length-1){
					if(!checked)
						forceAll = false;
					}
			});

			inputs.map(function(i,e){
				var thisPrice = parseInt($(e).closest('.wpcf7-list-item-label').context.innerText.split('$')[1]);
				//console.log($(e).closest('.wpcf7-list-item-label').context.innerText.split('$')[1]);
			//	console.log($(e).closest('label').text());
					var actualCheckbox = 	$(e).find('input');
					var checked = actualCheckbox[0].checked;
					var checkbox = 	$(e).find('.chbox span');
				if(i<inputs.length-1){
					if(allOfTheAbove === true || forceAll === true){
						$(actualCheckbox).attr('checked',true);
						$(checkbox).text($(checkbox).text().replace(' ','X'));
						$(e).css('opacity',.5);
					}
					else{
						$(e).css('opacity',1);
					}
				}
				else {
					if(allOfTheAbove === true || forceAll === true){
						$(checkbox).text($(checkbox).text().replace(' ','X'));
						$(actualCheckbox).prop('checked',true);
						cart[input_group] = thisPrice;
						cart[input_group].all = true;
					}
					else {
					 $(actualCheckbox).attr('checked',false);
						$(checkbox).text($(checkbox).text().replace('X',' '));
						if(cart[input_group].all === true){
							alert();
							cart[input_group] -= thisPrice;
							cart[input_group].all = false;
						}
					}
				}
			});
			forceAll = true;
			console.log(cart);
			$('#price').attr('value',calculateTotal());
			console.log($('#price').attr('value'));
			}
	});

	$('.radio-409 .last input').click(function(){
		$('.other_text').css('display','block');

	})
	$('.truefalse .wpcf7-list-item').click(function(){

		console.dir($(this).closest('.truefalse').find('.chbox span'));
		$(this).closest('.truefalse').find('.chbox span').map(function(i,e){
			$(e).text(' ');
			console.log($(e))
		});
		$(this).find('.chbox span').text('X');
		return;
		$(this).find('input').prop('checked',true);
		$(this).find('.chbox span').text('X')
		$('.truefalse .last').find('input').prop('checked',false);
		$('.truefalse .last').find('.chbox span').text(' ')
	});
	$('.truefalse .last').click(function(){
		$(this).find('.chbox span').text('X')
		$(this).find('input').prop('checked',true);
		$('.truefalse .first').find('input').prop('checked',false);
		$('.truefalse .first').find('.chbox span').text(' ')
	});
function calculateTotal(){
	var allofem = 0;
	var discount = 0;
	Object.keys(cart).map(function(i,e){
		allofem += parseInt(cart[i]);
		console.log(cart[i])
	});
	if(currentCoupon !== ''){
		console.dir(currentCoupon);
		console.log('from '+allofem);
		if(currentCoupon.percent){
			//allofem = Math.floor(allofem*((1-(currentCoupon.discount/100))));
			discount = Math.floor(allofem*(currentCoupon.discount/100));
		}
		else {
			discount = currentCoupon.discount;
		}
		console.log('to '+(allofem-discount));
	}

	return allofem-discount;
}
function setReal(input,checked){
	input.attr('checked',checked);
}
var currentCoupon = '';
var coupons;// = [];
//update coupon code
$('#coupon').change(function(e){
	console.log('pick this coupon');
	var input = $(this).prop('value');
	currentCoupon = '';
	coupons.map(function(e,i){
		console.log(e);
		if(input === e.name){
			currentCoupon = e;
		}
	});
	if(currentCoupon === '')
		console.log('wrong coupon code');
		//apply it
	$('#price').attr('value',calculateTotal());
});
	if(window.ajaxurl)
	$.ajax({
        url: ajaxurl,
        type: "GET",
        cache: false,
        data: 'data' + '&action=sendmail',//action defines which function to use in add_action,
				success: function(i,e){
					if(e === 'success'){
						coupons = i.substring(0, i.length - 1);//.split(',');
						console.dir(coupons);
						coupons = JSON.parse(coupons);
						console.log(coupons);
					}
				}
});

//});


})(jQuery);
