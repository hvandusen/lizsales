(function ($) {
	var count = 0;
	var scrolls = {};
	var max_bars = 38;
	var mobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		mobile = true;
}

	function setHeaders(){
		$('.bar').map(function(e,i){
			var bar = $(i).find('div')[0];
			//console.log($(bar).text().length);
		});
		return;

		if(window.innerWidth>1408)
			return;
		var remove = /*Math.abs(*/Math.floor((window.innerWidth-1108)/7);
		//console.log(remove)

		var newString = '';
		for(var i =0;i<remove;i++){
			newString+= '~';
		}

		$('.postBar, .preBar').text(newString);
	}
	if(window.location.pathname.indexOf('questionnaire')>-1 && window.innerWidth<850){
		//alert();
		$('.postBar, .preBar').text('~~~~~~~~~');
		//$('.postBar, .preBar').text('~~~~~~~~~~~~~~~');
	}

  $(window).resize(function(){
		if(window.innerWidth< 1193)
		$('.postBar, .preBar').text('~~~~~~~~~~~~~');
		else {
			$('.postBar, .preBar').text(bigSquigs);
		}
		if(window.innerWidth< 480)
		$('.postBar, .preBar').text('~~~~~~');

		//setHeaders();
		// if(mobile && window.innerWidth>480){
		// 	$('.pleaseRotate').css('display','block');
		// }
	});
	if(window.innerWidth< 1193)
		$('.postBar, .preBar').text('~~~~~~~~');


	$('textarea').scroll(function(){
		//console.log($(this).scrollTop());
		scrolls[$(this).closest('.input_outer').index()] = $(this).scrollTop();
		$(this).css('background-position-y', -1* $(this).scrollTop());
	});
	count++;
	$('.input_contents').map(function(e,i){
		$(i).wrap($( "<div class='input_outer'><div class='input_inner'></div></div>" ));
		//$(i).remove();
	});
var cart = {};
var words = {};


	$('input').focus(function(){
		////console.log(this)
		$('.clicked').removeClass('clicked');
		$(this).parent().prev().addClass('clicked');
	});
$('.wpcf7-not-valid-tip').map(function(e,i){
	var label = $(i).parent().prev();
	//console.log($(i).parent().prev());//.closest('label'));

	label.addClass('input-error')
	$(this).remove();
});


var bigSquigs;
	$(document).ready(function(){
			//setHeaders();
			bigSquigs = $($('.preBar')[0]).text();
			if(window.innerWidth< 1193)
			$('.postBar, .preBar').text('~~~~~~~~~~~~~');
			if(window.innerWidth< 480)
			$('.postBar, .preBar').text('~~~~~~');
			//numbered input area
		$('.numbers').map(function(i,e){
			//console.log('fuck');
			$(e).prop('value','<span >1.</span> \n<span>2.</span> \n<span>3.</span>');
			$(e).css('color','#0033cc');
		});

		$('.input_submit').click(function(){
			var sub = $(this).prev().prev();
		});
		var cnt = 0;

	});
	//checkboxes
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
		var wordCount = $(this).text().split('] ')[1].split(' ')[0];
		console.log(wordCount)
		var allOfTheAbove = $(this).text().indexOf('All of')>-1;
		var inputIndex = $(this).parent().index();
		var box  = $(this).find('.chbox span');
		var removeAll = box.html().indexOf('X')>-1 && $(this).text().indexOf('All of')>-1;
		// if(removeAll)
		// //console.log('remove all please');
		//setup cart
		if(!cart.hasOwnProperty(input_group))
			cart[input_group] = 0;

			if(!words.hasOwnProperty(input_group))
				words[input_group] = '';

		//if already selected
		if(box.html().indexOf('X')>-1){
			box.html(' ');//box.html().replace('X',' '))
			cart[input_group]-= price;
			cartTotal -= price;
			if(wordCount==='All'){
				console.log('already selected')
				words[input_group] = '';
			}
			else
			words[input_group] = words[input_group].replace(wordCount+', ','')
			//if selected from select all, and price needs to be readjusted
		}
		else {
			box.html('X');//box.html(box.html().replace(' ','X'));//box.html().replace(' ','X'))
			cart[input_group]+= price;
			cartTotal += price;
			console.log(words)
			if(wordCount==='All')
				words[input_group] = 'All';
				else
			words[input_group] += wordCount+', ';
			//$(this).find('input').attr('checked',true);
		}
		//console.log("text: "+box.html())

		//undo all of the above
		if(allOfTheAbove && ($(this).find('input')[0].checked=== false )){
			//console.log('please get rid!!');
			box.html(' ');
			allOfTheAbove = false;
		}
		 //console.log(allOfTheAbove);

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
			var turnOffDeal = 0;
			inputs.map(function(i,e){
				var thisPrice = parseInt($(e).closest('.wpcf7-list-item-label').context.innerText.split('$')[1]);
				////console.log($(e).closest('.wpcf7-list-item-label').context.innerText.split('$')[1]);
			//	//console.log($(e).closest('label').text());
					var actualCheckbox = 	$(e).find('input');
					var checked = actualCheckbox[0].checked;
					var checkbox = 	$(e).find('.chbox span');
					//first inputs
				if(i<inputs.length-1){
					if(allOfTheAbove === true || forceAll === true){
						$(actualCheckbox).attr('checked',true);
						$(checkbox).text($(checkbox).text().replace(' ','X'));
						$(e).css('opacity',.5);
					}
					else{
						//console.log('opacity is '+ $(e).css('opacity'));
						//if(they were transparent )
						if($(e).css('opacity')=== '0.5' && checked)
							{
								//console.log('yeah')
								turnOffDeal += thisPrice;
							}
						$(e).css('opacity',1);
					}

					if(removeAll){
						//console.log('remove '+i)
						$(e).css('opacity',1);
						 $(actualCheckbox).attr('checked',false);
					  $(checkbox).text($(checkbox).text().replace('X',' '));
					}
				}
				//all of the above  input
				else {
					if(allOfTheAbove === true || forceAll === true){
						$(checkbox).text($(checkbox).text().replace(' ','X'));
						$(actualCheckbox).prop('checked',true);
						cart[input_group] = thisPrice;
						cart[input_group].all = true;
						//console.log('do it all please')
					}
					else {
					 $(actualCheckbox).attr('checked',false);
						$(checkbox).text($(checkbox).text().replace('X',' '));
						//console.log('dont do it all please');
					}
					if(removeAll){
						//console.log('remove '+i)
						$(e).css('opacity',1);
						 $(actualCheckbox).attr('checked',false);
					  $(checkbox).text($(checkbox).text().replace('X',' '));
						cart[input_group] = 0;
					}
				}
				if(turnOffDeal>0){
					//console.log('guys we gotta reset the price to '+turnOffDeal)
					cart[input_group] = turnOffDeal;
				}
			});
			forceAll = true;
			//console.log(cart);
			var calcTotal = calculateTotal().toFixed(2);
			$('#price').attr('value',calcTotal);
			$('#amt').text(calcTotal);
			$('#realTotal').text(calcTotal);
			//console.log('the price is now '+$('#price').attr('value'));
			}
	});

	$('.radio-409 .last input').click(function(){
		$('.other_text').css('display','block');
	})
	$('.truefalse .wpcf7-list-item').click(function(){


		$(this).closest('.truefalse').find('.chbox span').map(function(i,e){
			$(e).text(' ');
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
		//console.log(cart[i])
	});
	if(currentCoupon !== ''){
		//console.dir(currentCoupon);
		//console.log('from '+allofem);
		if(currentCoupon.percent){
			discount = Math.floor(allofem*(currentCoupon.discount/100));
		}
		else {
			discount = currentCoupon.discount;
		}
		$('#couponAmt').text(discount.toFixed(2));
		//console.log('to '+(allofem-discount).toFixed(2));
	}
	$('#amt').text(allofem.toFixed(2));
	$('#realTotal').text((allofem-discount).toFixed(2));
	$('#package').val('Artist statement: 100 words, Press Release/Blurb: 400 words');
	//console.log($('#package').val());
	//$('.pricing-fields p').map(function(e,i){
	var productText = '';
	for(var i=0;i<4;i++){
		var field = $('.pricing-fields > p')[i];
		var buyType = $(field).text().split(/(\d+)/g)[0].split('[')[0];
		//console.log(buyType);
		if(cart[i]!==undefined && cart[i] > 0){
			productText += buyType + ': $'+cart[i]+','
			//console.log(buyType);
			// if(words[i] === 'All')
			// 	productText += 'All,';
			// else
			// productText +=words[i].slice(0, -2)+ ' words,';
			//console.log($(field).find('.wpcf7-list-item-label').length);
		}
	}
		console.log("Prod text: "+productText)
		$('#package').val(productText);
	//})
	return allofem-discount;
}
function setReal(input,checked){
	input.attr('checked',checked);
}
var currentCoupon = '';
var coupons;// = [];
//update coupon code
$('#coupon').on('input',function(e){
	//console.log('pick this coupon');
	var input = $(this).prop('value');
	currentCoupon = '';
	coupons.map(function(e,i){
		//console.log(e);
		if(input === e.name){
			currentCoupon = e;
			$('#total,#discount').css('display','block');
		}
	});
	if(currentCoupon === ''){
		//console.log('wrong coupon code');
		$('#total').css('display','none');
		$('#discount').css('display','block');
		$('#couponAmt').text('0');
	}
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
						//console.dir(coupons);
						coupons = JSON.parse(coupons);
						//console.log(coupons);
					}
				}
});

//});

//password screen
if(window.innerWidth>480){
		$('.button2').mouseenter(function(e){
			$(this).parent().addClass('hovered')
			$(this).css('color','#ffff66');
		});
		$('.button2').mouseleave(function(e){
			$(this).parent().removeClass('hovered');
			$(this).css('color','#c13a1c');
		});
}

$('.wpcf7-file').change(function(e){
	//console.log('file is '+e.currentTarget.value);
	$('.img_input').addClass('fileUploaded');
})

$('.one-liner label').click(function(){
	$('.one-liner label').css({
		'color' : '#0033cc',
		'border-bottom' : 'solid #0033cc 1px'
	});
	$(this).css({
		'color' : 'black',
		'border-bottom' : 'solid black 1px'
	});
		$(this).find('.one-l').css('color', '#0033cc');
});

})(jQuery);
