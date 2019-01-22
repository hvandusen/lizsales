!function(f){function t(){var t=window.innerWidth,e="";t<600?e="":t<750?e="~~~":t<970?e="~~~~~~~~~":t<1193?e="~~~~~~~~~~~~":t<1350?e="~~~~~~~~~~~~~~~~~~~~~":t<1450?e="~~~~~~~~~~~~~~~~~~~~~~~":1480<t&&(e="~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"),f(".postBar, .preBar").text(e)}function e(){sessionStorage.inputs="",f(".questionnaire .wpcf7-form input, .questionnaire .wpcf7-form textarea ").map(function(t,e){w[f(e).attr("name")]=f(e).val(),sessionStorage["form-"+f(e).attr("name")]=f(e).val(),sessionStorage.inputs+=" "+f(e).attr("name")}),console.log(w)}function n(){if(sessionStorage.hasOwnProperty("form-name")){for(var t in sessionStorage)-1<t.indexOf("form-")&&(w[t.replace("form-","")]=sessionStorage[t],f("[name='"+t.replace("form-","")+"']").val(sessionStorage[t]));s()}}function i(){var t="<div class='statement'>";for(var e in sessionStorage)-1<e.indexOf("form-")&&-1<v.indexOf(e.replace("form-",""))&&(w[e.replace("form-","")]=sessionStorage[e]);for(var e in w)t+="<span class='statement-text'>"+e+" "+w[e]+"</span>";//$("[name='"+(i.replace("form-",""))+"']").val(sessionStorage[i]);
return t+="</div>",console.log("dug",w,Object.keys(w)),t}function o(){var t={},e="";for(var n in e+=i(),sessionStorage)-1<n.indexOf("form-")&&v.indexOf(-1<n.replace("form-",""))&&(e+="<div class='setting'>"+n.replace("form-","")+": "+sessionStorage[n]+"</div>");f(".output").html(e)}function s(){if(console.log("handleCheckboxLabelClick"),!(g=!g)){var a=f(this).closest("p").index(),t=parseInt(f(this).text().split("$")[1]),e=f(this).text().split("] ")[1].split(" ")[0],r=-1<f(this).text().indexOf("All of"),n=f(this).find(".chbox span"),c=-1<n.html().indexOf("X")&&-1<f(this).text().indexOf("All of");if(
// if(removeAll)
//setup cart
h.hasOwnProperty(a)||(h[a]=0),x.hasOwnProperty(a)||(x[a]=""),
//if already selected
-1<n.html().indexOf("X")?(n.html(" "),//box.html().replace('X',' '))
h[a]-=t,k-=t,x[a]="All"===e?"":x[a].replace(e+", ","")):(n.html("X"),//box.html(box.html().replace(' ','X'));//box.html().replace(' ','X'))
h[a]+=t,k+=t,"All"===e?x[a]="All":x[a]+=e+", "),
//undo all of the above
r&&!1===f(this).find("input")[0].checked&&(n.html(" "),r=!1),window.ajaxurl){
//update all checkboxes
var l=f(this).closest(".wpcf7-form-control").find(".wpcf7-list-item"),p=!0;l.map(function(t,e){var n,i=f(e).find("input")[0].checked;t<l.length-1&&(i||(p=!1))});var d=0;l.map(function(t,e){var n=parseInt(f(e).closest(".wpcf7-list-item-label").context.innerText.split("$")[1]),i=f(e).find("input"),o=i[0].checked,s=f(e).find(".chbox span");
//first inputs
t<l.length-1?(!0===r||!0===p?(f(i).attr("checked",!0),f(s).text(f(s).text().replace(" ","X")),f(e).css("opacity",".5")):(
//if(they were transparent )
"0.5"===f(e).css("opacity")&&o&&(d+=n),f(e).css("opacity",1)),c&&(f(e).css("opacity",1),f(i).attr("checked",!1),f(s).text(f(s).text().replace("X"," ")))):(!0===r||!0===p?(f(s).text(f(s).text().replace(" ","X")),f(i).prop("checked",!0),h[a]=n,h[a].all=!0):(f(i).attr("checked",!1),f(s).text(f(s).text().replace("X"," "))),c&&(f(e).css("opacity",1),f(i).attr("checked",!1),f(s).text(f(s).text().replace("X"," ")),h[a]=0)),0<d&&(h[a]=d)}),p=!0;var i=u().toFixed(2);f("#price").attr("value",i),f("#amt").text(i),f("#realTotal").text(i)}}}function a(t){console.log("handleCheckboxClick"),f(t).closest(".truefalse").find(".chbox span").map(function(t,e){f(e).text(" ")}),f(t).find(".chbox span").text("X")}function r(t){console.log("handleTrueFalse"),f(t).find(".chbox span").text("X"),f(t).find("input").prop("checked",!0),f(".truefalse .first").find("input").prop("checked",!1),f(".truefalse .first").find(".chbox span").text(" ")}function u(){var e=0,t=0;Object.keys(h).map(function(t){e+=parseInt(h[t])}),""!==b&&(t=b.percent?Math.floor(e*(b.discount/100)):b.discount,f("#couponAmt").text("-$"+t.toFixed(2))),f("#amt").text(e.toFixed(2)),f("#realTotal").text((e-t).toFixed(2));for(
//$('#package').val('Artist statement: 100 words, Press Release/Blurb: 400 words');
//$('.pricing-fields p').map(function(e,i){
var n="",i=0;i<4;i++){var o=f(".pricing-fields > p")[i],s=f(o).text().split(/(\d+)/g)[0].split("[")[0];void 0!==h[i]&&0<h[i]&&(n+=s+": $"+h[i]+",")}
//})
return f("#package").val(n),e-t}var c=0,l={},p=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(p=!0);var d=window.innerWidth<480;f(window).resize(function(){480<window.innerWidth&&d?f(".pleaseRotate").addClass("landscape"):f(".pleaseRotate").removeClass("landscape")}),0<f(".questionnaire").length&&window.innerWidth<850&&f(".postBar, .preBar").text("~~~~~~~~~"),f(window).resize(function(){t()}),t(),f("textarea").scroll(function(){l[f(this).closest(".input_outer").index()]=f(this).scrollTop(),f(this).css("background-position-y",-1*f(this).scrollTop())}),c++,f(".input_contents").map(function(t,e){f(e).wrap(f("<div class='input_outer'><div class='input_inner'></div></div>"));
//$(i).remove();
});var h={},x={},m;f("input").focus(function(){f(".clicked").removeClass("clicked"),f(this).parent().prev().addClass("clicked")}),f(".wpcf7-not-valid-tip").map(function(t,e){var n;f(e).parent().prev().addClass("input-error"),f(this).remove()});var w={};f(document).ready(function(){t(),m=f(f(".preBar")[0]).text(),window.innerWidth<480&&f(".postBar, .preBar").text("~~~~~~"),f(".numbers").map(function(t,e){f(e).prop("value","<span >1.</span> \n<span>2.</span> \n<span>3.</span>"),f(e).css("color","#0033cc")}),setInterval(function(){f(".thankyou-page .robot").toggleClass("flicker")},400),n(),f(".questionnaire.test .wpcf7-form").submit(function(t){e(),t.preventDefault(),t.stopPropagation(),
//sessionStorage.formData = $(this).serialize();
window.scrollTo(0,0),o()}),f(".output").click(function(){f(this).toggleClass("hidden")})});var v=["name","bday","birthplace","country","work-city","works-with%5B%5D","works-with%5B%5D","works-with%5B%5D","works-with%5B%5D","work-with","grew-up","grew-up-3","also-works-with%5B%5D","background","artists","artists-2","writers","writers-2","other-inspo","other-inspo-2","work-subject","formal-elements","process","critical-dialogue","exh-space","other-text","textarea-5"];o(),
//checkboxes
f(".wpcf7-list-item label").map(function(t,e){
//$('<span class="xBox">[ ]</span>').prependTo($(e));
f(e).html('<span class="chbox">[<span> </span>]</span> '+f(e).html())});var g=!1,k=0;f(".wpcf7-list-item >label").click(s),f(".exh-space .last").click(function(){f(".other_text").css("display","block")}),f(".truefalse .wpcf7-list-item").click(a),f(".truefalse .last").click(function(){r(this)});var b="",y;// = [];
//update coupon code
f("#coupon").on("input",function(){var e=f(this).prop("value");b="",y.map(function(t){e===t.name&&(b=t,f("#total,#discount").css("display","block"))}),""===b&&(f("#total").css("display","none"),f("#discount").css("display","block"),f("#couponAmt").text("Invalid")),
//apply it
f("#price").attr("value",u())}),window.ajaxurl&&f.ajax({url:window.ajaxurl,type:"GET",cache:!1,data:"data&action=sendmail",//action defines which function to use in add_action,
success:function(t,e){"success"===e&&(y=t.substring(0,t.length-1),//.split(',');
y=JSON.parse(y))}}),
//});
//password screen
480<window.innerWidth&&(f(".button2").mouseenter(function(){f(this).parent().addClass("hovered"),f(this).css("color","#ffff66")}),f(".button2").mouseleave(function(){f(this).parent().removeClass("hovered"),f(this).css("color","#c13a1c")})),f(".wpcf7-file").change(function(){f(".img_input").addClass("fileUploaded")}),f(".img_inputs").click(function(t){t.stopPropagation(),t.stopPropagation()}),f(".img_input").click(function(t){t.preventDefault(),t.stopPropagation(),f(".img_inputs").click(),//trigger('click');
t.stopPropagation()}),!1===window.Modernizr.flexbox&&f(".pricing-fields").addClass("noFlex")}(jQuery);