(function($) {
  var count = 0;
  var scrolls = {};
  var mobile = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    mobile = true;
  }
  var isMob = window.innerWidth < 480;
  $(window).resize(function() {
    if (window.innerWidth > 480 && isMob) {
      $(".pleaseRotate").addClass("landscape");
    } else {
      $(".pleaseRotate").removeClass("landscape");
    }
  });

  if (
    window.location.pathname.indexOf("questionnaire") > -1 &&
    window.innerWidth < 850
  ) {
    //alert();
    $(".postBar, .preBar").text("~~~~~~~~~");
    //$('.postBar, .preBar').text('~~~~~~~~~~~~~~~');
  }

  $(window).resize(function() {
    setHeads();
  });

  function setHeads() {
    var w = window.innerWidth;
    var theText = "";

    if (w < 600) {
      theText = "";
    } else if (w < 750) {
      theText = "~~~~~~~~~~~~~";
    } else if (w < 870) {
      theText = "~~~~~~~~~~~~~~~~~~~";
    } else if (w < 1193) {
      theText = "~~~~~~~~~~~~~~~~~~~~~~";
    } else if (w < 1350) {
      theText = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
    } else if (w < 1450) {
      theText = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
    } else if (w > 1480) {
      theText = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
    }
    if (window.location.pathname.indexOf("questionnaire") > -1) {
      theText = theText.substr(10);
    }
    $(".postBar, .preBar").text(theText);
  }

  setHeads();

  $("textarea").scroll(function() {
    scrolls[
      $(this)
        .closest(".input_outer")
        .index()
    ] = $(this).scrollTop();
    $(this).css("background-position-y", -1 * $(this).scrollTop());
  });
  count++;
  $(".input_contents").map(function(e, i) {
    $(i).wrap(
      $("<div class='input_outer'><div class='input_inner'></div></div>")
    );
    //$(i).remove();
  });
  var cart = {};
  var words = {};

  $("input").focus(function() {
    $(".clicked").removeClass("clicked");
    $(this)
      .parent()
      .prev()
      .addClass("clicked");
  });
  $(".wpcf7-not-valid-tip").map(function(e, i) {
    var label = $(i)
      .parent()
      .prev();

    label.addClass("input-error");
    $(this).remove();
  });

  var bigSquigs;
  $(document).ready(function() {
    setHeads();
    bigSquigs = $($(".preBar")[0]).text();
    if (window.innerWidth < 480) {
      $(".postBar, .preBar").text("~~~~~~");
    }
    $(".numbers").map(function(i, e) {
      $(e).prop(
        "value",
        "<span >1.</span> \n<span>2.</span> \n<span>3.</span>"
      );
      $(e).css("color", "#0033cc");
    });
  });
  //checkboxes
  $(".wpcf7-list-item label").map(function(i, e) {
    //$('<span class="xBox">[ ]</span>').prependTo($(e));
    $(e).html('<span class="chbox">[<span> </span>]</span> ' + $(e).html());
  });
  var ignoreNextClick = false;
  var cartTotal = 0;

  $(".wpcf7-list-item >label").click(function() {
    ignoreNextClick = !ignoreNextClick;
    if (ignoreNextClick) {
      return;
    }
    var input_group = $(this)
      .closest("p")
      .index();
    var price = parseInt(
      $(this)
        .text()
        .split("$")[1]
    );
    var wordCount = $(this)
      .text()
      .split("] ")[1]
      .split(" ")[0];
    var allOfTheAbove =
      $(this)
        .text()
        .indexOf("All of") > -1;
    var box = $(this).find(".chbox span");
    var removeAll =
      box.html().indexOf("X") > -1 &&
      $(this)
        .text()
        .indexOf("All of") > -1;
    // if(removeAll)
    //setup cart
    if (!cart.hasOwnProperty(input_group)) {
      cart[input_group] = 0;
    }
    if (!words.hasOwnProperty(input_group)) {
      words[input_group] = "";
    }
    //if already selected
    if (box.html().indexOf("X") > -1) {
      box.html(" "); //box.html().replace('X',' '))
      cart[input_group] -= price;
      cartTotal -= price;
      if (wordCount === "All") {
        words[input_group] = "";
      } else {
        words[input_group] = words[input_group].replace(wordCount + ", ", "");
      } //if selected from select all, and price needs to be readjusted
    } else {
      box.html("X"); //box.html(box.html().replace(' ','X'));//box.html().replace(' ','X'))
      cart[input_group] += price;
      cartTotal += price;
      if (wordCount === "All") {
        words[input_group] = "All";
      } else {
        words[input_group] += wordCount + ", ";
      } //$(this).find('input').attr('checked',true);
    }

    //undo all of the above
    if (allOfTheAbove && $(this).find("input")[0].checked === false) {
      box.html(" ");
      allOfTheAbove = false;
    }

    if (window.ajaxurl) {
      //update all checkboxes
      var inputs = $(this)
        .closest(".wpcf7-form-control")
        .find(".wpcf7-list-item");
      var forceAll = true;
      inputs.map(function(i, e) {
        var actualCheckbox = $(e).find("input");
        var checked = actualCheckbox[0].checked;
        if (i < inputs.length - 1) {
          if (!checked) {
            forceAll = false;
          }
        }
      });
      var turnOffDeal = 0;
      inputs.map(function(i, e) {
        var thisPrice = parseInt(
          $(e)
            .closest(".wpcf7-list-item-label")
            .context.innerText.split("$")[1]
        );
        var actualCheckbox = $(e).find("input");
        var checked = actualCheckbox[0].checked;
        var checkbox = $(e).find(".chbox span");
        //first inputs
        if (i < inputs.length - 1) {
          if (allOfTheAbove === true || forceAll === true) {
            $(actualCheckbox).attr("checked", true);
            $(checkbox).text(
              $(checkbox)
                .text()
                .replace(" ", "X")
            );
            $(e).css("opacity", ".5");
          } else {
            //if(they were transparent )
            if ($(e).css("opacity") === "0.5" && checked) {
              turnOffDeal += thisPrice;
            }
            $(e).css("opacity", 1);
          }

          if (removeAll) {
            $(e).css("opacity", 1);
            $(actualCheckbox).attr("checked", false);
            $(checkbox).text(
              $(checkbox)
                .text()
                .replace("X", " ")
            );
          }
        }
        //all of the above  input
        else {
          if (allOfTheAbove === true || forceAll === true) {
            $(checkbox).text(
              $(checkbox)
                .text()
                .replace(" ", "X")
            );
            $(actualCheckbox).prop("checked", true);
            cart[input_group] = thisPrice;
            cart[input_group].all = true;
          } else {
            $(actualCheckbox).attr("checked", false);
            $(checkbox).text(
              $(checkbox)
                .text()
                .replace("X", " ")
            );
          }
          if (removeAll) {
            $(e).css("opacity", 1);
            $(actualCheckbox).attr("checked", false);
            $(checkbox).text(
              $(checkbox)
                .text()
                .replace("X", " ")
            );
            cart[input_group] = 0;
          }
        }
        if (turnOffDeal > 0) {
          cart[input_group] = turnOffDeal;
        }
      });
      forceAll = true;
      var calcTotal = calculateTotal().toFixed(2);
      $("#price").attr("value", calcTotal);
      $("#amt").text(calcTotal);
      $("#realTotal").text(calcTotal);
    }
  });

  $(".exh-space .last").click(function() {
    $(".other_text").css("display", "block");
  });
  $(".truefalse .wpcf7-list-item").click(function() {
    $(this)
      .closest(".truefalse")
      .find(".chbox span")
      .map(function(i, e) {
        $(e).text(" ");
      });
    $(this)
      .find(".chbox span")
      .text("X");
    return;
  });
  $(".truefalse .last").click(function() {
    $(this)
      .find(".chbox span")
      .text("X");
    $(this)
      .find("input")
      .prop("checked", true);
    $(".truefalse .first")
      .find("input")
      .prop("checked", false);
    $(".truefalse .first")
      .find(".chbox span")
      .text(" ");
  });

  function calculateTotal() {
    var allofem = 0;
    var discount = 0;
    Object.keys(cart).map(function(i) {
      allofem += parseInt(cart[i]);
    });
    if (currentCoupon !== "") {
      if (currentCoupon.percent) {
        discount = Math.floor(allofem * (currentCoupon.discount / 100));
      } else {
        discount = currentCoupon.discount;
      }

      $("#couponAmt").text("-$" + discount.toFixed(2));
    }
    $("#amt").text(allofem.toFixed(2));
    $("#realTotal").text((allofem - discount).toFixed(2));
    //$('#package').val('Artist statement: 100 words, Press Release/Blurb: 400 words');
    //$('.pricing-fields p').map(function(e,i){
    var productText = "";
    for (var i = 0; i < 4; i++) {
      var field = $(".pricing-fields > p")[i];
      var buyType = $(field)
        .text()
        .split(/(\d+)/g)[0]
        .split("[")[0];
      if (cart[i] !== undefined && cart[i] > 0) {
        productText += buyType + ": $" + cart[i] + ",";
      }
    }
    $("#package").val(productText);
    //})
    return allofem - discount;
  }

  var currentCoupon = "";
  var coupons; // = [];
  //update coupon code
  $("#coupon").on("input", function() {
    var input = $(this).prop("value");
    currentCoupon = "";
    coupons.map(function(e) {
      if (input === e.name) {
        currentCoupon = e;
        $("#total,#discount").css("display", "block");
      }
    });

    if (currentCoupon === "") {
      $("#total").css("display", "none");
      $("#discount").css("display", "block");
      $("#couponAmt").text("Invalid");
    }
    //apply it
    $("#price").attr("value", calculateTotal());
  });
  if (window.ajaxurl) {
    $.ajax({
      url: window.ajaxurl,
      type: "GET",
      cache: false,
      data: "data" + "&action=sendmail", //action defines which function to use in add_action,
      success: function(i, e) {
        if (e === "success") {
          coupons = i.substring(0, i.length - 1); //.split(',');
					console.log(coupons);
          coupons = JSON.parse(coupons);
        }
      }
    });
  }
  //});

  //password screen
  if (window.innerWidth > 480) {
    $(".button2").mouseenter(function() {
      $(this)
        .parent()
        .addClass("hovered");
      $(this).css("color", "#ffff66");
    });
    $(".button2").mouseleave(function() {
      $(this)
        .parent()
        .removeClass("hovered");
      $(this).css("color", "#c13a1c");
    });
  }

  $(".wpcf7-file").change(function() {
    $(".img_input").addClass("fileUploaded");
  });
  $(".img_inputs").click(function(e) {
    e.stopPropagation();
    e.stopPropagation();
  });
  $(".img_input").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(".img_inputs").click(); //trigger('click');
    e.stopPropagation();
    // // 	//$($('.uploadText')[0]).trigger('click');
  });

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

  if (window.Modernizr.flexbox === false) {
    $(".pricing-fields").addClass("noFlex");
  }
})(jQuery);
