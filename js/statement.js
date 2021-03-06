var worksWithConverter = {
  "Painting": "painter",
  "Photography": "photographer",
  "Drawing": "illustrator",
  "Sculpture": "sculptor",
  "Performance": "performance artist",
  "Media art": "media artist",
  "Installation art": "installation",
  "Film Video": "video artist",
  "Mixed media": "mixed media artist",
  "Bookarts": "book artist",
  "Text": "textual artist",
  "I work in a variety of media": "also works in a variety of media"
};
function ensurePeriod(text){
  var regex = /[^\w\s]/g;
  if(text.slice(text.length-2).search(regex)>-1){
    return text;
  }
  return text+".";
}

function stripPeriod(text){
  if(text.slice(text.length-1).indexOf(".")>-1){
    return text.slice(0,text.length-1);
  }
  if(text.slice(text.length-2).indexOf(".")>-1){
    return text.slice(0,text.length-2);
  }
  return text;
}

function stripBecause(text){
  var words = text.split(" ");
  if(["because","cus"].indexOf(words[0].toLowerCase())>-1){
    return words.slice(1).join(" ")
  }
  return text;
}

function artistTitle(raw){
  var output = "";
  if(raw === undefined || raw.length === 0){
    return output;
  }
  var types = raw.split(", ");
  var variety = false;
  if(types.indexOf("they work in a variety of media")>-1){
    types = types.splice(0,types.length-1);
    variety = true;
  }
  var seperator = (types.length<=2 ? " and " : ", and ");
    types.map(function(e,i){
    // second to last
    var converted = worksWithConverter[e];
    if(i===types.length-2){
      output+= converted+seperator;
    }
    //last
    else if(i===types.length-1){
      output+= converted;
    }
    else {
        output+= converted+", "+ (i===types.length-2 ? "and " : "");
    }
  });
  output+= (variety ? " working in a variety of media": "")
  return output;
}


function lower(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function statement(theFormData){
  window.theFormData = theFormData;
  function isReady(){
    var yes = theFormData["artistname"];
    if(yes){
      $(".submit_q, .output").removeClass("not-ready");
    }else{
      $(".submit_q, .output").addClass("not-ready");
    }return yes;
  }
  if(!theFormData){
    return;
  }
  var html = "<div class='statement'>";
  var converters = {
    " my ": " their ",
    " My ": " their ",
    "My ": "their ",
    " our ": " their ",
    " Our ": " their ",
    "Our ": "their ",
    " I ": " they ",
    "I ": "they ",
    " we ": " they ",
    "we ": "they ",
    " We ": " they ",
    "We ": "they ",
    " me ": " them ",
    " me.": " them.",
    " am ":" are ",
    "Because": ""
  };
  var media = "";
  if(theFormData){
    media = theFormData.hasOwnProperty("works-with") ? theFormData["works-with"].split(", ") : "";
  }
  for(var i in theFormData){
    for(var j in converters){
      if(theFormData[i].indexOf(j) > -1 && ["artistname","works-with"].indexOf(i)<0){
        theFormData[i] = theFormData[i].replace(j,converters[j]);
        if(theFormData[i].slice(theFormData[i].length-4) === " me." || theFormData[i].slice(theFormData[i].length-3) === " me")
          theFormData[i] = stripPeriod(theFormData[i]).slice(0,theFormData[i].length-3)+ " them"
      }
    }
    var re = / me$/;
    theFormData[i] = theFormData[i].replace(re, " them")
  }
  var lastName = theFormData.hasOwnProperty("artistname") ? theFormData["artistname"].trim().split(" ").slice(-1)[0] : "";
  if(lastName.charAt(lastName.length-1) === "s" || lastName.charAt(lastName.length-1) === "z"){
    lastName += "'";
  }else{
    lastName += "'s";
  }
  if(isReady())
  html += (
  theFormData["artistname"]+ printOrigin(theFormData) +
  (theFormData["works-with"] ? " is a "+ artistTitle(theFormData["works-with"]): "")+
  (theFormData["work-city"] ? (theFormData["works-with"] ? " who" : "")+" lives and works in "+ theFormData["work-city"] : "")+
  ". "+

  (theFormData["work-with"] ?
    "They work in "+(media.length>1 ? "these media":"this medium")+" because "+stripBecause(ensurePeriod(lower(theFormData["work-with"]))) :"") +

  (theFormData["artists"] ?
    " They are inspired by the visual artist "+ stripPeriod(theFormData["artists"])+
      (theFormData["artists-2"] ? " because "+ stripBecause(ensurePeriod(lower(theFormData["artists-2"])))+" "
      :". ") :" ")+

  (theFormData["writers"] ?
    "They are also inspired by the writer "+stripPeriod(theFormData["writers"])+
    (theFormData["writers-2"].length>4 ? " because "+
    stripBecause(stripPeriod(lower(theFormData["writers-2"]))): "")+
    ". " :"")+
  (theFormData["other-inspo"] ?
    "They are also inspired by "+stripPeriod(lower(theFormData["other-inspo"]))+
    (theFormData["other-inspo-2"].length>4 ? " because "+
    stripBecause(ensurePeriod(lower(theFormData["other-inspo-2"]))): ""):"")+
  "\n\n"+
  (theFormData["work-subject"] ?
    "The main subject of "+lastName+" work is "+
    stripPeriod(lower(theFormData["work-subject"]))+
      (theFormData["work-subject-2"] ?
        " which is important to them because "+ stripBecause(ensurePeriod(lower(theFormData["work-subject-2"])))
      :".") :"")+
  (theFormData["process"] ?
    " Their art-making process consists of "+
    ensurePeriod(lower(theFormData["process"])):"")+
  (theFormData["process-2"] ?
    " This is important to understanding their work because "+
  stripBecause(ensurePeriod(lower(theFormData["process-2"]))) :"")+
  (theFormData["critical-dialogue"] ?
    " They are connected to the contemporary critical dialog of their medium through the ideas of the theorist "+
    stripBecause(ensurePeriod(theFormData["critical-dialogue"])) :"")+
  //below line means, if we have exh-space selected, add sentence as long as we dont have other and an empty "other" answer
  (theFormData["exh-space"] && !(theFormData["exh-space"] === "Other:" && theFormData["other-text"]==="") ?
    " The ideal exhibition space for their work is a "+
    ("WebsiteGalleryBook".indexOf(theFormData["exh-space"])>-1 ?
      lower(theFormData["exh-space"]) :
      lower(theFormData["other-text"]))+
    (theFormData["exh-space-2"].length>1 ?
      " because "+stripBecause(ensurePeriod(lower(theFormData["exh-space-2"]))) :
      ".")
  : "")
);
else {
  html+= "Answer more questions to see a preview."
}

  html+= "</div>";
  console.log(html)
  return html;
}

function printOrigin(theFormData){
  var order = ["bday","birthplace","country"];
  var stats = [];
  order.map(function(e,i){
    if(theFormData.hasOwnProperty(e) && theFormData[e].length>2)
      stats.push(e === "bday" ? "b. "+theFormData[e] : theFormData[e] );
  })

  return (stats.length > 0 ?" ("+ stats.join(", ") +")" : "");
}


window.statement = statement;
