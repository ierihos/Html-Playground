function initiate() {
    var h = document.getElementById("html-code");
    var c = document.getElementById("css-code");
    var lsHtml = localStorage.savedHtml;
    var lsCss = localStorage.savedCSS;
    if (!lsHtml){
      h.value = "<!DOCTYPE html>\n<html>\n<body>\n\t<h1>Hello World!</h1>\n\t<p>This is a paragraph.</p>\n</body>\n</html>";
    }else{
      h.value = lsHtml;
    }
    if (!lsCss){
      c.value = "h1{\n\tfont-weight: bold;\n\tcolor: green;\n}\n\np{\n\tfont-weight: bold;\n\tfont-size: 22px;\n}";
    }else{
      c.value = lsCss;
    }
    run();
}

function run() {
    let htmlCode = document.querySelector(".editor #html-code").value;
    let cssCode = "<style>" + document.querySelector(".editor #css-code").value + "</style>";
    let jsCode = document.querySelector(".editor #js-code").value;
    let output = document.querySelector(".editor #output");
    //console.log(htmlCode,cssCode,jsCode,output)
    output.contentDocument.body.innerHTML = htmlCode+cssCode;
    output.contentWindow.eval(jsCode)
}
document.querySelector(".editor #html-code").addEventListener("keyup",run);
document.querySelector(".editor #css-code").addEventListener("keyup",run);
document.querySelector(".editor #js-code").addEventListener("keyup",run);

function chooseHtml() {
    var h = document.getElementById("html-code");
    var c = document.getElementById("css-code");
    var j = document.getElementById("js-code");
        h.style.display = "flex";
        c.style.display = "none";
        j.style.display = "none";
  }

function chooseCss() {
    var h = document.getElementById("html-code");
    var c = document.getElementById("css-code");
    var j = document.getElementById("js-code");
        c.style.display = "flex";
        h.style.display = "none";
        j.style.display = "none";
  }

function chooseJs() {
    var h = document.getElementById("html-code");
    var c = document.getElementById("css-code");
    var j = document.getElementById("js-code");
        j.style.display = "flex";
        h.style.display = "none";
        c.style.display = "none";
  }

  document.getElementById('html-code').addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
  
      // set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
  
      // put caret at right position again
      this.selectionStart =
        this.selectionEnd = start + 1;
    }
  });

  document.getElementById('css-code').addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
  
      // set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
  
      // put caret at right position again
      this.selectionStart =
        this.selectionEnd = start + 1;
    }
  });

  document.getElementById('js-code').addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
  
      // set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
  
      // put caret at right position again
      this.selectionStart =
        this.selectionEnd = start + 1;
    }
  });

  document.getElementById('html-code').addEventListener('keyup', function() {
    localStorage.setItem("savedHtml", document.getElementById('html-code').value);
  });

  document.getElementById('css-code').addEventListener('keyup', function() {
    localStorage.setItem("savedCSS", document.getElementById('css-code').value);
  });

  // ADD LATER.
  //document.getElementById('js-code').addEventListener('keyup', function() {
  //  localStorage.setItem("savedJs", document.getElementById('js-code').value);
  //});
