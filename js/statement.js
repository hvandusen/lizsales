function statement(theFormData){
  //John Smith (b. 1980. London, England) is a painter who lives and works in Brooklyn. He works in this medium because he enjoys converting something from the real world into an imagined space through paint. He is inspired by visual artist Philip Guston because this artist painted the
//existential in an unexpectedly cartoonish way. He is also inspired by the writer Thomas Pynchon because he turned real life into fantasy.
//The main subject of Smith’s work is artifice, which is important to him because technology has transformed our relationship with reality. His art-making process consists of depicting real world objects he has collected in his studio in imagined space from his fantasy life. This is important to understanding his work because he is concerned with the overlap //between real and imagined worlds. He connected to the contemporary critical dialog of his medium through the ideas of the theorist Jean Baudrillard. The ideal exhibition space for his work is a gallery because paintings are really 3-dimensional objects that should be seen in person.
  var html = "<div class='statement'>";
  for(var i in localStorage){
    if(i.indexOf("form-")>-1){
      theFormData[i.replace("form-","")] = localStorage[i];
    }
  }

  html +=
  theFormData["name"]+ " (b. "+theFormData["bday"]+". "+theFormData["birthplace"]+", "+theFormData["country"]+")" +
  "is a "+theFormData["works-with"]+ " who lives and works in "+theFormData["work-city"]+". He works in this medium because "+theFormData["work-with"]+
  "He is inspired by the visual artist "+theFormData["artists"]+" because "+theFormData["artists-2"] + ". He is also inspired by the writer "+theFormData["writers"]+" because "+theFormData["writers-2"]+
  ". <br><br>The main subject of "+ theFormData["name"]+"'s work is "+theFormData["work-subject"]+" which is important to him because "+ theFormData["work-subject-2"] +". "+
  "His art-making process consists of "+theFormData["process"]+ "This is important to understanding his work because "+theFormData["process-2"]+
  ". He connected to the contemporary critical dialog of his medium through the ideas of the theorist "+theFormData["critical-dialogue"]+
  ". The ideal exhibition space for his work is a "+ theFormData["exh-space"]+" because "+ theFormData["exh-space-2"]
  html += "<br><br>";
  // for(var i in theFormData){
    // html+= "<span class='statement-text'>"+theFormData[i]+"</span>";//$("[name='"+(i.replace("form-",""))+"']").val(localStorage[i]);
  // }
  html+= "</div>";
  return html;
}

function lower(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

window.statement = statement;
