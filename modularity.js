function executePack() {
  var name = pack[0];
  var version = pack[1];
  var suffix = pack[2];
  var length = pack[3].length;
  var modules = pack[3];
    for (a = 0; a < length; a++) {
      for (b = 1; b < modules[a].length; b++) {
        var elements = document.getElementsByTagName(modules[a][0].toUpperCase());
        for (c = 0; c < elements.length; c++) {
          var tag = "";
          var block = "";
          var test = false;
          for (d = 0; d < elements[c].className.length; d++) {
            if (test === true) {
              block = (block + elements[c].className.charAt(d));
            }
            if (elements[c].className.charAt(d) === "-") {
              test = true;
            }
            if (test === false) {
              tag = (tag + elements[c].className.charAt(d));
            }
          }
          if (tag === suffix) {

            if (block === modules[a][b][0]) {
              elements[c].style = (modules[a][b][2] + elements[c].style.cssText);
              eval("elements[c].outerHTML = elements[c].outerHTML.replace(/<" + modules[a][0] + "/g,'<" + modules[a][b][1] + "').replace(/" + modules[a][0] + ">/g,'" + modules[a][b][1] + ">')");
            }
          }
        }
      }
    }
}

window.onload = executePack;
