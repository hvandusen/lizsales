!function(d){function t(){var t=window.innerWidth,e="";t<600?e="":t<750?e="~~~":t<970?e="~~~~~~~~~":t<1193?e="~~~~~~~~~~~~":t<1350?e="~~~~~~~~~~~~~~~~~~~~~":t<1450?e="~~~~~~~~~~~~~~~~~~~~~~~":1480<t&&(e="~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"),d(".postBar, .preBar").text(e)}function e(){localStorage.inputs="",d(".questionnaire .wpcf7-form input, .questionnaire .wpcf7-form textarea ").map(function(t,e){var i=d(e).attr("name");k[i]=d(e).val(),localStorage["form-"+d(e).attr("name")]=d(e).val(),localStorage.inputs+=" "+i});var i=[];d(".checkbox-1 input:checked").map(function(t,e){i.push(d(e).val())}),localStorage["form-works-with"]=i.join(", "),k["works-with"]=i.join(", "),i=[],d(".checkbox-2 input:checked").map(function(t,e){i.push(d(e).val())}),localStorage["form-also-works-with"]=i.join(", "),k["also-works-with"]=i.join(", ");var t=d(".exh-space input:checked").parent().find(".wpcf7-list-item-label").text();localStorage["form-exh-space"]=t,k["exh-space"]=t}function i(){if(localStorage.hasOwnProperty("form-name")){for(var t in localStorage)-1<t.indexOf("form-")&&-1<v.indexOf(t.replace("form-",""))&&(k[t.replace("form-","")]=localStorage[t],d("[name='"+t.replace("form-","")+"']").val(localStorage[t]));
//henry
var i=localStorage["form-works-with"].split(", "),a=localStorage["form-exh-space"];d(".works-with .wpcf7-list-item-label").map(function(t,e){-1<i.indexOf(d(e).text())&&(d(e).parent().click(),d(e).parent().find("input")[0].checked=!0)}),d(".exh-space .wpcf7-list-item-label").map(function(t,e){a===d(e).text()&&d(e).parent().click()})}}function a(){
//John Smith (b. 1980. London, England) is a painter who lives and works in Brooklyn. He works in this medium because he enjoys converting something from the real world into an imagined space through paint. He is inspired by visual artist Philip Guston because this artist painted the
//existential in an unexpectedly cartoonish way. He is also inspired by the writer Thomas Pynchon because he turned real life into fantasy.
//The main subject of Smith’s work is artifice, which is important to him because technology has transformed our relationship with reality. His art-making process consists of depicting real world objects he has collected in his studio in imagined space from his fantasy life. This is important to understanding his work because he is concerned with the overlap //between real and imagined worlds. He connected to the contemporary critical dialog of his medium through the ideas of the theorist Jean Baudrillard. The ideal exhibition space for his work is a gallery because paintings are really 3-dimensional objects that should be seen in person.
var t="<div class='statement'>";for(var e in localStorage)-1<e.indexOf("form-")&&-1<v.indexOf(e.replace("form-",""))&&(k[e.replace("form-","")]=localStorage[e]);return t+=k.name+" (b. "+k.bday+". "+k.birthplace+", "+k.country+")is a "+k["works-with"]+" who lives and works in "+k["work-city"]+". He works in this medium because "+k["work-with"]+"He is inspired by the visual artist "+k.artists+" because "+k["artists-2"]+". He is also inspired by the writer "+k.writers+" because "+k["writers-2"]+". <br><br>The main subject of "+k.name+"'s work is "+k["work-subject"]+" which is important to him because "+k["work-subject-2"]+". His art-making process consists of "+k.process+"This is important to understanding his work because "+k["process-2"]+". He connected to the contemporary critical dialog of his medium through the ideas of the theorist "+k["critical-dialogue"]+". The ideal exhibition space for his work is a "+k["exh-space"]+" because "+k["exh-space-2"],t+="<br><br>",
// for(var i in theFormData){
// html+= "<span class='statement-text'>"+theFormData[i]+"</span>";//$("[name='"+(i.replace("form-",""))+"']").val(localStorage[i]);
// }
t+="</div>"}function n(){var t={},e="<h1>Generated Statement</h1>";for(var i in e+=statement(k),localStorage){var a=i.replace("form-","");-1<i.indexOf("form-")&&-1<v.indexOf(a)&&(e+="<div class='setting'>"+i.replace("form-","")+": "+localStorage[i]+"</div>")}d(".output").html(e)}
//checkboxes
function o(){if(!(b=!b)){var c=d(this).closest("p").index(),t=parseInt(d(this).text().split("$")[1]),e=d(this).text().split("] ")[1].split(" ")[0],s=-1<d(this).text().indexOf("All of"),i=d(this).find(".chbox span"),r=-1<i.html().indexOf("X")&&-1<d(this).text().indexOf("All of");if(
// if(removeAll)
//setup cart
m.hasOwnProperty(c)||(m[c]=0),x.hasOwnProperty(c)||(x[c]=""),
//if already selected
-1<i.html().indexOf("X")?(i.html(" "),//box.html().replace('X',' '))
m[c]-=t,g-=t,x[c]="All"===e?"":x[c].replace(e+", ","")):(i.html("X"),//box.html(box.html().replace(' ','X'));//box.html().replace(' ','X'))
m[c]+=t,g+=t,"All"===e?x[c]="All":x[c]+=e+", "),
//undo all of the above
s&&!1===d(this).find("input")[0].checked&&(i.html(" "),s=!1),window.ajaxurl){
//update all checkboxes
var l=d(this).closest(".wpcf7-form-control").find(".wpcf7-list-item"),p=!0;l.map(function(t,e){var i,a=d(e).find("input")[0].checked;t<l.length-1&&(a||(p=!1))});var f=0;l.map(function(t,e){var i=parseInt(d(e).closest(".wpcf7-list-item-label").context.innerText.split("$")[1]),a=d(e).find("input"),n=a[0].checked,o=d(e).find(".chbox span");
//first inputs
t<l.length-1?(!0===s||!0===p?(d(a).attr("checked",!0),d(o).text(d(o).text().replace(" ","X")),d(e).css("opacity",".5")):(
//if(they were transparent )
"0.5"===d(e).css("opacity")&&n&&(f+=i),d(e).css("opacity",1)),r&&(d(e).css("opacity",1),d(a).attr("checked",!1),d(o).text(d(o).text().replace("X"," ")))):(!0===s||!0===p?(d(o).text(d(o).text().replace(" ","X")),d(a).prop("checked",!0),m[c]=i,m[c].all=!0):(d(a).attr("checked",!1),d(o).text(d(o).text().replace("X"," "))),r&&(d(e).css("opacity",1),d(a).attr("checked",!1),d(o).text(d(o).text().replace("X"," ")),m[c]=0)),0<f&&(m[c]=f)}),p=!0;var a=u().toFixed(2);d("#price").attr("value",a),d("#amt").text(a),d("#realTotal").text(a)}}}function c(){d(".exh-space input").map(function(t,e){d(e).attr("checked",!1),d(e).parent().find(".chbox span").text(" ")})}function s(t){d(t).closest(".truefalse").find(".chbox span").map(function(t,e){d(e).text(" ")}),d(t).find(".chbox span").text("X")}function r(t){d(t).find(".chbox span").text("X"),d(t).find("input").prop("checked",!0),d(".truefalse .first").find("input").prop("checked",!1),d(".truefalse .first").find(".chbox span").text(" ")}function u(){var e=0,t=0;Object.keys(m).map(function(t){e+=parseInt(m[t])}),""!==y&&(t=y.percent?Math.floor(e*(y.discount/100)):y.discount,d("#couponAmt").text("-$"+t.toFixed(2))),d("#amt").text(e.toFixed(2)),d("#realTotal").text((e-t).toFixed(2));for(
//$('#package').val('Artist statement: 100 words, Press Release/Blurb: 400 words');
//$('.pricing-fields p').map(function(e,i){
var i="",a=0;a<4;a++){var n=d(".pricing-fields > p")[a],o=d(n).text().split(/(\d+)/g)[0].split("[")[0];void 0!==m[a]&&0<m[a]&&(i+=o+": $"+m[a]+",")}
//})
return d("#package").val(i),e-t}var l=0,p={},f=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(f=!0);var h=window.innerWidth<480;d(window).resize(function(){480<window.innerWidth&&h?d(".pleaseRotate").addClass("landscape"):d(".pleaseRotate").removeClass("landscape")}),0<d(".questionnaire").length&&window.innerWidth<850&&d(".postBar, .preBar").text("~~~~~~~~~"),d(window).resize(function(){t()}),t(),d("textarea").scroll(function(){p[d(this).closest(".input_outer").index()]=d(this).scrollTop(),d(this).css("background-position-y",-1*d(this).scrollTop())}),l++,d(".input_contents").map(function(t,e){d(e).wrap(d("<div class='input_outer'><div class='input_inner'></div></div>"));
//$(i).remove();
});var m={},x={},w;d("input").focus(function(){d(".clicked").removeClass("clicked"),d(this).parent().prev().addClass("clicked")}),d(".wpcf7-not-valid-tip").map(function(t,e){var i;d(e).parent().prev().addClass("input-error"),d(this).remove()});var k={};d(document).ready(function(){t(),w=d(d(".preBar")[0]).text(),window.innerWidth<480&&d(".postBar, .preBar").text("~~~~~~"),d(".numbers").map(function(t,e){d(e).prop("value","<span >1.</span> \n<span>2.</span> \n<span>3.</span>"),d(e).css("color","#0033cc")}),setInterval(function(){d(".thankyou-page .robot").toggleClass("flicker")},400),i(),d(".questionnaire.test .wpcf7-form input, .questionnaire.test .wpcf7-form textarea").on("input",function(t){e(),
// e.preventDefault();
// e.stopPropagation();
// window.scrollTo(0,0)
n()}),d(".output").click(function(){d(this).toggleClass("hidden")}),n()});var v=["name","bday","birthplace","country","work-city","works-with","work-with","grew-up","grew-up-3","exh-space-2","also-works-with","background","artists","artists-2","writers","writers-2","other-inspo","other-inspo-2","work-subject","formal-elements","process","process-2","work-subject-2","critical-dialogue","exh-space","other-text","textarea-5"];d(".wpcf7-list-item label").map(function(t,e){
//$('<span class="xBox">[ ]</span>').prependTo($(e));
d(e).html('<span class="chbox">[<span> </span>]</span> '+d(e).html())});var b=!1,g=0;d(".exh-space .wpcf7-list-item").click(function(t){var e=d(this).find("input")[0],i=e.checked;c();var a=d(this).find(".chbox span");e.checked=!i,a.text(e.checked?"X":" "),d(this).val(d(this).find(".wpcf7-list-item-label").text()),localStorage["form-exh-space"]=d(this).find(".wpcf7-list-item-label").text(),t.preventDefault(),t.stopPropagation()}),d(".checkbox-1 .wpcf7-list-item, .checkbox-2 .wpcf7-list-item").click(function(t){var e=d(this).find("input")[0],i=d(this).find(".chbox span");e.checked=!e.checked,i.text(e.checked?"X":" "),t.stopPropagation()}),d(".pricing-fields .wpcf7-list-item >label").click(o),d(".exh-space .last").click(function(){d(".other_text").css("display","block")}),d(".truefalse .wpcf7-list-item").click(s),d(".truefalse .last").click(function(){r(this)});var y="",S;// = [];
//update coupon code
d("#coupon").on("input",function(){var e=d(this).prop("value");y="",S.map(function(t){e===t.name&&(y=t,d("#total,#discount").css("display","block"))}),""===y&&(d("#total").css("display","none"),d("#discount").css("display","block"),d("#couponAmt").text("Invalid")),
//apply it
d("#price").attr("value",u())}),window.ajaxurl&&d.ajax({url:window.ajaxurl,type:"GET",cache:!1,data:"data&action=sendmail",//action defines which function to use in add_action,
success:function(t,e){"success"===e&&(S=t.substring(0,t.length-1),//.split(',');
S=JSON.parse(S))}}),
//});
//password screen
480<window.innerWidth&&(d(".button2").mouseenter(function(){d(this).parent().addClass("hovered"),d(this).css("color","#ffff66")}),d(".button2").mouseleave(function(){d(this).parent().removeClass("hovered"),d(this).css("color","#c13a1c")})),d(".wpcf7-file").change(function(){d(".img_input").addClass("fileUploaded")}),d(".img_inputs").click(function(t){t.stopPropagation(),t.stopPropagation()}),d(".img_input").click(function(t){t.preventDefault(),t.stopPropagation(),d(".img_inputs").click(),//trigger('click');
t.stopPropagation()}),!1===window.Modernizr.flexbox&&d(".pricing-fields").addClass("noFlex")}(jQuery);