function executePack(pack) {
  var name = pack[0];
  var version = pack[1];
  var prefix = pack[2];
  var length = pack[3].length;
  var modules = pack[3];
    for (a = 0; a < length; a++) {
      if (modules[a][1] === "&unit") {
        var elements = document.getElementsByTagName(modules[a][0].toUpperCase());
          for (c = 0; c < elements.length; c++) {
            if (modules[a][(modules[a].length - 1)].length !== 0) {
                for (e = 0; e < modules[a][(modules[a].length - 1)].length; e++) {
                    eval("elements[c]." + modules[a][(modules[a].length - 1)][e][0] + " = '" + modules[a][(modules[a].length - 1)][e][1] + "'");
                  }
                }
              elements[c].style = (modules[a][3] + elements[c].style.cssText);
              eval("elements[c].outerHTML = elements[c].outerHTML.replace(/<" + modules[a][0] + "/g,'<" + modules[a][2] + "').replace(/" + modules[a][0] + ">/g,'" + modules[a][2] + ">')");
          }
      }
      else {
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
          if (tag === prefix) {
            if (block === modules[a][b][0]) {
              if (modules[a][b][(modules[a][b].length - 1)].length !== 0) {
                for (e = 0; e < modules[a][b][(modules[a][b].length - 1)].length; e++) {
                    eval("elements[c]." + modules[a][b][(modules[a][b].length - 1)][e][0] + " = '" + modules[a][b][(modules[a][b].length - 1)][e][1] + "'");
                }
              }
              elements[c].style = (modules[a][b][2] + elements[c].style.cssText);
              eval("elements[c].outerHTML = elements[c].outerHTML.replace(/<" + modules[a][0] + "/g,'<" + modules[a][b][1] + "').replace(/" + modules[a][0] + ">/g,'" + modules[a][b][1] + ">')");
            }
          }
        }
      }
    }
  }
}
