!function(d){function t(){d(".ascii").map(function(t,e){var a=d(e).find(".asciiTitle").text(),i=window.innerWidth,n="~~~~~";20<a.length&&(n="");var o="";i<600?o="~~~~"+n:i<750?o="~~~~~~~"+n:i<970?o="~~~~~~~~~~~~"+n:i<1193?o="~~~~~~~~~~~~~~~~~~~"+n:i<1350?o="~~~~~~~~~~~~~~~~~~~~~~~"+n:i<1450?o="~~~~~~~~~~~~~~~~~~~~~~~~~~~"+n:1480<i&&(o="~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"+n),d(e).find(".postBar, .preBar").text(o)})}function e(){localStorage.inputs="",d(".questionnaire .wpcf7-form input, .questionnaire .wpcf7-form textarea ").map(function(t,e){var a=d(e).attr("name");w[a]=d(e).val(),localStorage["form-"+d(e).attr("name")]=d(e).val(),localStorage.inputs+=" "+a});var a=[];d(".checkbox-1 input:checked").map(function(t,e){a.push(d(e).val())}),localStorage["form-works-with"]=a.join(", "),w["works-with"]=a.join(", "),a=[],d(".checkbox-2 input:checked").map(function(t,e){a.push(d(e).val())}),localStorage["form-also-works-with"]=a.join(", "),w["also-works-with"]=a.join(", ");var t=d(".exh-space input:checked").parent().find(".wpcf7-list-item-label").text();localStorage["form-exh-space"]=t,w["exh-space"]=t}function a(){for(var t in localStorage)-1<t.indexOf("form-")&&-1<g.indexOf(t.replace("form-",""))&&(w[t.replace("form-","")]=localStorage[t]);
//henry
var a=localStorage["form-works-with"]?localStorage["form-works-with"].split(", "):"",i=localStorage["form-exh-space"]?localStorage["form-exh-space"]:"";d(".works-with .wpcf7-list-item-label").map(function(t,e){-1<a.indexOf(d(e).text())&&(d(e).parent().click(),d(e).parent().find("input")[0].checked=!0)}),d(".exh-space .wpcf7-list-item-label").map(function(t,e){i===d(e).text()&&d(e).parent().click()})}function o(){var t="<h3>Statement Preview</h3>";if(w||w.hasOwnProperty("artistname")){var e=window.statement(w),a=d(e).html().split("\n\n");for(var i in d(".generated-statement-1 textarea").val(a[0]),d(".generated-statement-2 textarea").val(a[1]),
//switch out newlines for <br> tags for our preview
t+=e.replace(/\n/g,"<br/>"),localStorage){var n=i.replace("form-","");-1<i.indexOf("form-")&&-1<g.indexOf(n)&&(t+="<div class='setting'>"+i.replace("form-","")+": "+localStorage[i]+"</div>")}d(".output").html(t)}}
//checkboxes
function i(){if(!(v=!v)){var r=d(this).closest("p").index(),t=parseInt(d(this).text().split("$")[1]),e=d(this).text().split("] ")[1].split(" ")[0],c=-1<d(this).text().indexOf("All of"),a=d(this).find(".chbox span"),s=-1<a.html().indexOf("X")&&-1<d(this).text().indexOf("All of");if(
// if(removeAll)
//setup cart
h.hasOwnProperty(r)||(h[r]=0),m.hasOwnProperty(r)||(m[r]=""),
//if already selected
-1<a.html().indexOf("X")?(a.html(" "),//box.html().replace('X',' '))
h[r]-=t,k-=t,m[r]="All"===e?"":m[r].replace(e+", ","")):(a.html("X"),//box.html(box.html().replace(' ','X'));//box.html().replace(' ','X'))
h[r]+=t,k+=t,"All"===e?m[r]="All":m[r]+=e+", "),
//undo all of the above
c&&!1===d(this).find("input")[0].checked&&(a.html(" "),c=!1),window.ajaxurl){
//update all checkboxes
var l=d(this).closest(".wpcf7-form-control").find(".wpcf7-list-item"),p=!0;l.map(function(t,e){var a,i=d(e).find("input")[0].checked;t<l.length-1&&(i||(p=!1))});var f=0;l.map(function(t,e){var a=parseInt(d(e).closest(".wpcf7-list-item-label").context.innerText.split("$")[1]),i=d(e).find("input"),n=i[0].checked,o=d(e).find(".chbox span");
//first inputs
t<l.length-1?(!0===c||!0===p?(d(i).attr("checked",!0),d(o).text(d(o).text().replace(" ","X")),d(e).css("opacity",".5")):(
//if(they were transparent )
"0.5"===d(e).css("opacity")&&n&&(f+=a),d(e).css("opacity",1)),s&&(d(e).css("opacity",1),d(i).attr("checked",!1),d(o).text(d(o).text().replace("X"," ")))):(!0===c||!0===p?(d(o).text(d(o).text().replace(" ","X")),d(i).prop("checked",!0),h[r]=a,h[r].all=!0):(d(i).attr("checked",!1),d(o).text(d(o).text().replace("X"," "))),s&&(d(e).css("opacity",1),d(i).attr("checked",!1),d(o).text(d(o).text().replace("X"," ")),h[r]=0)),0<f&&(h[r]=f)}),p=!0;var i=u().toFixed(2);d("#price").attr("value",i),d("#amt").text(i),d("#realTotal").text(i)}}}function r(){d(".exh-space input").map(function(t,e){d(e).attr("checked",!1),d(e).parent().find(".chbox span").text(" ")})}function n(t){d(t).closest(".truefalse").find(".chbox span").map(function(t,e){d(e).text(" ")}),d(t).find(".chbox span").text("X")}function c(t){d(t).find(".chbox span").text("X"),d(t).find("input").prop("checked",!0),d(".truefalse .first").find("input").prop("checked",!1),d(".truefalse .first").find(".chbox span").text(" ")}function u(){var e=0,t=0;Object.keys(h).map(function(t){e+=parseInt(h[t])}),""!==b&&(t=b.percent?Math.floor(e*(b.discount/100)):b.discount,d("#couponAmt").text("-$"+t.toFixed(2))),d("#amt").text(e.toFixed(2)),d("#realTotal").text((e-t).toFixed(2));for(
//$('#package').val('Artist statement: 100 words, Press Release/Blurb: 400 words');
//$('.pricing-fields p').map(function(e,i){
var a="",i=0;i<4;i++){var n=d(".pricing-fields > p")[i],o=d(n).text().split(/(\d+)/g)[0].split("[")[0];void 0!==h[i]&&0<h[i]&&(a+=o+": $"+h[i]+",")}return d("#package").val(a),e-t}var s=0,l={},p=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(p=!0);var f=window.innerWidth<480;d(window).resize(function(){480<window.innerWidth&&f?d(".pleaseRotate").addClass("landscape"):d(".pleaseRotate").removeClass("landscape"),d(".generator-signup .email-form .wpcf7-form-control-wrap input").attr("placeholder",window.innerWidth<670?"Enter your email":"Enter your email to get started"),d(".output").scrollTop(0)}),0<d(".questionnaire").length&&window.innerWidth<850&&d(".postBar, .preBar").text("~~~~~~~~~"),d(window).resize(function(){t()}),t(),d("textarea").scroll(function(){l[d(this).closest(".input_outer").index()]=d(this).scrollTop(),d(this).css("background-position-y",-1*d(this).scrollTop())}),s++,d(".input_contents").map(function(t,e){d(e).wrap(d("<div class='input_outer'><div class='input_inner'></div></div>"))});var h={},m={},x;d(document).on("click",".submit_q.not-ready",function(t){d(t).preventDefault(),d(".output").removeClass("hidden")}),d("input").focus(function(){d(".clicked").removeClass("clicked"),d(this).parent().prev().addClass("clicked")}),d(".wpcf7-not-valid-tip").map(function(t,e){var a;d(e).parent().prev().addClass("input-error"),d(this).remove()});var w={};d(document).ready(function(){t(),x=d(d(".preBar")[0]).text(),window.innerWidth<480&&d(".postBar, .preBar").text("~~~~~~"),d(".generator-signup .email-form .wpcf7-form-control-wrap input").attr("placeholder",window.innerWidth<670?"Enter your email":"Enter your email to get started"),d(".numbers").map(function(t,e){d(e).prop("value","<span >1.</span> \n<span>2.</span> \n<span>3.</span>"),d(e).css("color","#0033cc")}),setInterval(function(){d(".thankyou-page .robot").toggleClass("flicker")},400),a(),d(".questionnaire.test .wpcf7-form input, .questionnaire.test .wpcf7-form textarea").on("input",function(){e(),o()}),d(".output").click(function(){d(this).toggleClass("hidden")}),d(".questionnaire").length&&localStorage.hasOwnProperty("email")&&o(),d(".emailaddress").length&&localStorage.hasOwnProperty("email")&&d(".emailaddress input").val(localStorage.email),//just a check to see if we on artist statement page. redirect if no email ever entered
d(".generated-statement").length&&!localStorage.hasOwnProperty("email")&&(window.location="/generator-signup")});var g=["artistname","name","bday","birthplace","country","work-city","works-with","work-with","grew-up","grew-up-3","exh-space-2","also-works-with","background","artists","artists-2","writers","writers-2","other-inspo","other-inspo-2","work-subject","formal-elements","process","process-2","work-subject-2","critical-dialogue","exh-space","other-text","textarea-5"];d(".wpcf7-list-item label").map(function(t,e){
//$('<span class="xBox">[ ]</span>').prependTo($(e));
d(e).html('<span class="chbox">[<span> </span>]</span> '+d(e).html())});var v=!1,k=0;d(".exh-space .wpcf7-list-item").click(function(t){var e=d(this).find("input")[0],a=e.checked,i=d(this).find(".wpcf7-list-item-label").text();r();var n=d(this).find(".chbox span");e.checked=!a,n.text(e.checked?"X":" "),d(this).val(d(this).find(".wpcf7-list-item-label").text()),localStorage["form-exh-space"]=sessionStorage["form-exh-space"]=w["exh-space"]=i,t.preventDefault(),t.stopPropagation(),o()}),d(".checkbox-1 .wpcf7-list-item, .checkbox-2 .wpcf7-list-item").click(function(t){var e=d(this).find("input")[0],a=d(this).find(".chbox span");e.checked=!e.checked,a.text(e.checked?"X":" "),t.stopPropagation()}),d(".pricing-fields .wpcf7-list-item >label").click(i),d(".exh-space .last").click(function(){d(".other_text").css("display","block")}),d(".truefalse .wpcf7-list-item").click(n),d(".truefalse .last").click(function(){c(this)});var b="",y;// = [];
//update coupon code
d("#coupon").on("input",function(){var e=d(this).prop("value");b="",y.map(function(t){e===t.name&&(b=t,d("#total,#discount").css("display","block"))}),""===b&&(d("#total").css("display","none"),d("#discount").css("display","block"),d("#couponAmt").text("Invalid")),
//apply it
d("#price").attr("value",u())}),window.ajaxurl&&d.ajax({url:window.ajaxurl,type:"GET",cache:!1,data:"data&action=sendmail",//action defines which function to use in add_action,
success:function(t,e){"success"===e&&(y=t.substring(0,t.length-1),//.split(',');
y=JSON.parse(y))}}),
//});
//password screen
480<window.innerWidth&&(d(".button2").mouseenter(function(){d(this).parent().addClass("hovered"),d(this).css("color","#ffff66")}),d(".button2").mouseleave(function(){d(this).parent().removeClass("hovered"),d(this).css("color","#c13a1c")})),d(".wpcf7-file").change(function(){d(".img_input").addClass("fileUploaded")}),d(".img_inputs").click(function(t){t.stopPropagation(),t.stopPropagation()}),d(".img_input").click(function(t){t.preventDefault(),t.stopPropagation(),d(".img_inputs").click(),t.stopPropagation()}),!1===window.Modernizr.flexbox&&d(".pricing-fields").addClass("noFlex")}(jQuery);