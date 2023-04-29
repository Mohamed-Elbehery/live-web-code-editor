//todo if there is code in the local storage it will get it and display it
if (localStorage.code) {
  let code = JSON.parse(localStorage.getItem("code"));
  document.getElementById("htmlCode").value = code.html;
  document.getElementById("cssCode").value = code.css;
  document.getElementById("jsCode").value = code.js;

  showPreview();
} else {
  //todo else it's gonna initialize the code and set the local storage
  document.getElementById("htmlCode").value = "<div>\n\n</div>";
  document.getElementById("cssCode").value = "<style>\n\n</style>";
  document.getElementById("jsCode").value = "<script>\n\n</script>";

  localStorage.setItem(
    "code",
    JSON.stringify({
      html: document.getElementById("htmlCode").value,
      css: document.getElementById("cssCode").value,
      js: document.getElementById("jsCode").value,
    })
  );
}

function showPreview() {
  //todo every time the user write it's gonna set the local storage to the new value.
  localStorage.setItem(
    "code",
    JSON.stringify({
      html: document.getElementById("htmlCode").value,
      css: document.getElementById("cssCode").value,
      js: document.getElementById("jsCode").value,
    })
  );
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}
