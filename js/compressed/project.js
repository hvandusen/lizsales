!function(u){function t(){var t=window.innerWidth,e="";t<600?e="":t<750?e="~~~":t<970?e="~~~~~~~~~":t<1193?e="~~~~~~~~~~~~":t<1350?e="~~~~~~~~~~~~~~~~~~~~~":t<1450?e="~~~~~~~~~~~~~~~~~~~~~~~":1480<t&&(e="~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"),console.log("set ",t,e),u(".postBar, .preBar").text(e)}function a(){var e=0,t=0;Object.keys(f).map(function(t){e+=parseInt(f[t])}),""!==o&&(t=o.percent?Math.floor(e*(o.discount/100)):o.discount,u("#couponAmt").text("-$"+t.toFixed(2))),u("#amt").text(e.toFixed(2)),u("#realTotal").text((e-t).toFixed(2));for(
//$('#package').val('Artist statement: 100 words, Press Release/Blurb: 400 words');
//$('.pricing-fields p').map(function(e,i){
var i="",n=0;n<4;n++){var a=u(".pricing-fields > p")[n],s=u(a).text().split(/(\d+)/g)[0].split("[")[0];void 0!==f[n]&&0<f[n]&&(i+=s+": $"+f[n]+",")}
//})
return u("#package").val(i),e-t}var e=0,i={},n=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(n=!0);var s=window.innerWidth<480;u(window).resize(function(){480<window.innerWidth&&s?u(".pleaseRotate").addClass("landscape"):u(".pleaseRotate").removeClass("landscape")}),0<u(".questionnaire").length&&window.innerWidth<850&&u(".postBar, .preBar").text("~~~~~~~~~"),u(window).resize(function(){t()}),t(),u("textarea").scroll(function(){i[u(this).closest(".input_outer").index()]=u(this).scrollTop(),u(this).css("background-position-y",-1*u(this).scrollTop())}),e++,u(".input_contents").map(function(t,e){u(e).wrap(u("<div class='input_outer'><div class='input_inner'></div></div>"));
//$(i).remove();
});var f={},h={},c;u("input").focus(function(){u(".clicked").removeClass("clicked"),u(this).parent().prev().addClass("clicked")}),u(".wpcf7-not-valid-tip").map(function(t,e){var i;u(e).parent().prev().addClass("input-error"),u(this).remove()}),u(document).ready(function(){t(),c=u(u(".preBar")[0]).text(),window.innerWidth<480&&u(".postBar, .preBar").text("~~~~~~"),u(".numbers").map(function(t,e){u(e).prop("value","<span >1.</span> \n<span>2.</span> \n<span>3.</span>"),u(e).css("color","#0033cc")})}),
//checkboxes
u(".wpcf7-list-item label").map(function(t,e){
//$('<span class="xBox">[ ]</span>').prependTo($(e));
u(e).html('<span class="chbox">[<span> </span>]</span> '+u(e).html())});var x=!1,m=0;u(".wpcf7-list-item >label").click(function(){if(!(x=!x)){var c=u(this).closest("p").index(),t=parseInt(u(this).text().split("$")[1]),e=u(this).text().split("] ")[1].split(" ")[0],o=-1<u(this).text().indexOf("All of"),i=u(this).find(".chbox span"),l=-1<i.html().indexOf("X")&&-1<u(this).text().indexOf("All of");if(
// if(removeAll)
//setup cart
f.hasOwnProperty(c)||(f[c]=0),h.hasOwnProperty(c)||(h[c]=""),
//if already selected
-1<i.html().indexOf("X")?(i.html(" "),//box.html().replace('X',' '))
f[c]-=t,m-=t,h[c]="All"===e?"":h[c].replace(e+", ","")):(i.html("X"),//box.html(box.html().replace(' ','X'));//box.html().replace(' ','X'))
f[c]+=t,m+=t,"All"===e?h[c]="All":h[c]+=e+", "),
//undo all of the above
o&&!1===u(this).find("input")[0].checked&&(i.html(" "),o=!1),window.ajaxurl){
//update all checkboxes
var r=u(this).closest(".wpcf7-form-control").find(".wpcf7-list-item"),p=!0;r.map(function(t,e){var i,n=u(e).find("input")[0].checked;t<r.length-1&&(n||(p=!1))});var d=0;r.map(function(t,e){var i=parseInt(u(e).closest(".wpcf7-list-item-label").context.innerText.split("$")[1]),n=u(e).find("input"),a=n[0].checked,s=u(e).find(".chbox span");
//first inputs
t<r.length-1?(!0===o||!0===p?(u(n).attr("checked",!0),u(s).text(u(s).text().replace(" ","X")),u(e).css("opacity",".5")):(
//if(they were transparent )
"0.5"===u(e).css("opacity")&&a&&(d+=i),u(e).css("opacity",1)),l&&(u(e).css("opacity",1),u(n).attr("checked",!1),u(s).text(u(s).text().replace("X"," ")))):(!0===o||!0===p?(u(s).text(u(s).text().replace(" ","X")),u(n).prop("checked",!0),f[c]=i,f[c].all=!0):(u(n).attr("checked",!1),u(s).text(u(s).text().replace("X"," "))),l&&(u(e).css("opacity",1),u(n).attr("checked",!1),u(s).text(u(s).text().replace("X"," ")),f[c]=0)),0<d&&(f[c]=d)}),p=!0;var n=a().toFixed(2);u("#price").attr("value",n),u("#amt").text(n),u("#realTotal").text(n)}}}),u(".exh-space .last").click(function(){u(".other_text").css("display","block")}),u(".truefalse .wpcf7-list-item").click(function(){u(this).closest(".truefalse").find(".chbox span").map(function(t,e){u(e).text(" ")}),u(this).find(".chbox span").text("X")}),u(".truefalse .last").click(function(){u(this).find(".chbox span").text("X"),u(this).find("input").prop("checked",!0),u(".truefalse .first").find("input").prop("checked",!1),u(".truefalse .first").find(".chbox span").text(" ")});var o="",l;// = [];
//update coupon code
u("#coupon").on("input",function(){var e=u(this).prop("value");o="",l.map(function(t){e===t.name&&(o=t,u("#total,#discount").css("display","block"))}),""===o&&(u("#total").css("display","none"),u("#discount").css("display","block"),u("#couponAmt").text("Invalid")),
//apply it
u("#price").attr("value",a())}),window.ajaxurl&&u.ajax({url:window.ajaxurl,type:"GET",cache:!1,data:"data&action=sendmail",//action defines which function to use in add_action,
success:function(t,e){"success"===e&&(l=t.substring(0,t.length-1),//.split(',');
l=JSON.parse(l))}}),
//});
//password screen
480<window.innerWidth&&(u(".button2").mouseenter(function(){u(this).parent().addClass("hovered"),u(this).css("color","#ffff66")}),u(".button2").mouseleave(function(){u(this).parent().removeClass("hovered"),u(this).css("color","#c13a1c")})),u(".wpcf7-file").change(function(){u(".img_input").addClass("fileUploaded")}),u(".img_inputs").click(function(t){t.stopPropagation(),t.stopPropagation()}),u(".img_input").click(function(t){t.preventDefault(),t.stopPropagation(),u(".img_inputs").click(),//trigger('click');
t.stopPropagation()}),
// $('.one-liner label').click(function(){
//
// return
// 	//make it all blue
// 	$('.one-liner label').css({
// 		'color' : '#0033cc',
// 		'border-bottom' : 'solid #0033cc 1px'
// 	});
// 	$(this).css({
// 		'color' : 'black',
// 		//'border-bottom' : 'solid black 1px'
// 	});
// 		$(this).find('.one-l').css('color', 'black');
// });
!1===window.Modernizr.flexbox&&u(".pricing-fields").addClass("noFlex")}(jQuery);