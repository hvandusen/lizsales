!function($){function t(){return void $(".bar").map(function(t,e){var i=$(e).find("div")[0]});if(!(window.innerWidth>1408)){for(var t=Math.floor((window.innerWidth-1108)/7),e="",i=0;t>i;i++)e+="~";$(".postBar, .preBar").text(e)}}function e(){var t=0,e=0;Object.keys(c).map(function(e,i){t+=parseInt(c[e])}),""!==u&&(e=u.percent?Math.floor(t*(u.discount/100)):u.discount,$("#couponAmt").text(e.toFixed(2))),$("#amt").text(t.toFixed(2)),$("#realTotal").text((t-e).toFixed(2)),$("#package").val("Artist statement: 100 words, Press Release/Blurb: 400 words");for(var i="",n=0;4>n;n++){var a=$(".pricing-fields > p")[n],s=$(a).text().split(/(\d+)/g)[0].split("[")[0];void 0!==c[n]&&c[n]>0&&(i+=s+": $"+c[n]+",")}return console.log("Prod text: "+i),$("#package").val(i),t-e}function i(t,e){t.attr("checked",e)}var n=0,a={},s=38,o=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(o=!0),window.location.pathname.indexOf("questionnaire")>-1&&window.innerWidth<850&&$(".postBar, .preBar").text("~~~~~~~~~"),$(window).resize(function(){window.innerWidth<1193?$(".postBar, .preBar").text("~~~~~~~~~~~~~"):$(".postBar, .preBar").text(l),window.innerWidth<480&&$(".postBar, .preBar").text("~~~~~~")}),window.innerWidth<1193&&$(".postBar, .preBar").text("~~~~~~~~"),$("textarea").scroll(function(){a[$(this).closest(".input_outer").index()]=$(this).scrollTop(),$(this).css("background-position-y",-1*$(this).scrollTop())}),n++,$(".input_contents").map(function(t,e){$(e).wrap($("<div class='input_outer'><div class='input_inner'></div></div>"))});var c={},r={};$("input").focus(function(){$(".clicked").removeClass("clicked"),$(this).parent().prev().addClass("clicked")}),$(".wpcf7-not-valid-tip").map(function(t,e){var i=$(e).parent().prev();i.addClass("input-error"),$(this).remove()});var l;$(document).ready(function(){l=$($(".preBar")[0]).text(),window.innerWidth<1193&&$(".postBar, .preBar").text("~~~~~~~~~~~~~"),window.innerWidth<480&&$(".postBar, .preBar").text("~~~~~~"),$(".numbers").map(function(t,e){$(e).prop("value","<span >1.</span> \n<span>2.</span> \n<span>3.</span>"),$(e).css("color","#0033cc")}),$(".input_submit").click(function(){var t=$(this).prev().prev()});var t=0}),$(".wpcf7-list-item label").map(function(t,e){$(e).html('<span class="chbox">[<span> </span>]</span> '+$(e).html())});var p=!1,d=0;$(".wpcf7-list-item >label").click(function(t){if(p=!p,!p){var i=$(this).closest("p").index(),n=parseInt($(this).text().split("$")[1]),a=$(this).text().split("] ")[1].split(" ")[0];console.log(a);var s=$(this).text().indexOf("All of")>-1,o=$(this).parent().index(),l=$(this).find(".chbox span"),u=l.html().indexOf("X")>-1&&$(this).text().indexOf("All of")>-1;if(c.hasOwnProperty(i)||(c[i]=0),r.hasOwnProperty(i)||(r[i]=""),l.html().indexOf("X")>-1?(l.html(" "),c[i]-=n,d-=n,"All"===a?(console.log("already selected"),r[i]=""):r[i]=r[i].replace(a+", ","")):(l.html("X"),c[i]+=n,d+=n,console.log(r),"All"===a?r[i]="All":r[i]+=a+", "),s&&$(this).find("input")[0].checked===!1&&(l.html(" "),s=!1),window.ajaxurl){var f=$(this).closest(".wpcf7-form-control").find(".wpcf7-list-item"),h=!0;f.map(function(t,e){var i=$(e).find("input"),n=i[0].checked;t<f.length-1&&(n||(h=!1))});var x=0;f.map(function(t,e){var n=parseInt($(e).closest(".wpcf7-list-item-label").context.innerText.split("$")[1]),a=$(e).find("input"),o=a[0].checked,r=$(e).find(".chbox span");t<f.length-1?(s===!0||h===!0?($(a).attr("checked",!0),$(r).text($(r).text().replace(" ","X")),$(e).css("opacity",.5)):("0.5"===$(e).css("opacity")&&o&&(x+=n),$(e).css("opacity",1)),u&&($(e).css("opacity",1),$(a).attr("checked",!1),$(r).text($(r).text().replace("X"," ")))):(s===!0||h===!0?($(r).text($(r).text().replace(" ","X")),$(a).prop("checked",!0),c[i]=n,c[i].all=!0):($(a).attr("checked",!1),$(r).text($(r).text().replace("X"," "))),u&&($(e).css("opacity",1),$(a).attr("checked",!1),$(r).text($(r).text().replace("X"," ")),c[i]=0)),x>0&&(c[i]=x)}),h=!0;var v=e().toFixed(2);$("#price").attr("value",v),$("#amt").text(v),$("#realTotal").text(v)}}}),$(".exh-space .last").click(function(){$(".other_text").css("display","block")}),$(".truefalse .wpcf7-list-item").click(function(){return $(this).closest(".truefalse").find(".chbox span").map(function(t,e){$(e).text(" ")}),void $(this).find(".chbox span").text("X");$(this).find("input").prop("checked",!0),$(this).find(".chbox span").text("X"),$(".truefalse .last").find("input").prop("checked",!1),$(".truefalse .last").find(".chbox span").text(" ")}),$(".truefalse .last").click(function(){$(this).find(".chbox span").text("X"),$(this).find("input").prop("checked",!0),$(".truefalse .first").find("input").prop("checked",!1),$(".truefalse .first").find(".chbox span").text(" ")});var u="",f;$("#coupon").on("input",function(t){var i=$(this).prop("value");u="",f.map(function(t,e){i===t.name&&(u=t,$("#total,#discount").css("display","block"))}),""===u&&($("#total").css("display","none"),$("#discount").css("display","block"),$("#couponAmt").text("0")),$("#price").attr("value",e())}),window.ajaxurl&&$.ajax({url:ajaxurl,type:"GET",cache:!1,data:"data&action=sendmail",success:function(t,e){"success"===e&&(f=t.substring(0,t.length-1),f=JSON.parse(f))}}),window.innerWidth>480&&($(".button2").mouseenter(function(t){$(this).parent().addClass("hovered"),$(this).css("color","#ffff66")}),$(".button2").mouseleave(function(t){$(this).parent().removeClass("hovered"),$(this).css("color","#c13a1c")})),$(".wpcf7-file").change(function(t){$(".img_input").addClass("fileUploaded")}),$(".img_inputs").click(function(t){t.stopPropagation()}),$(".img_input").click(function(t){t.stopPropagation(),$(".img_inputs").click()}),$(".one-liner label").click(function(){return;$(".one-liner label").css({color:"#0033cc","border-bottom":"solid #0033cc 1px"}),$(this).css({color:"black"}),$(this).find(".one-l").css("color","black")})}(jQuery);