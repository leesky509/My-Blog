/* function menusHandler() {
  var menus = ["Main", "HTML", "CSS", "JavaScript", "기술 블로그"];
  var links = ["blog-main", "html", "css", "javascript", "tech-blog"];
  for (var i = 0; i < menus.length; i++) {
    document.write(
      '<li><a href="' +
        links[i] +
        '.html" class="menusColor">' +
        menus[i] +
        "</a></li>"
    );
  }
}
*/

function GetShow() {
  var fol = document.getElementById("fold");
  if (fol.style.display == "none") {
    fol.style.display = "block";
  } else {
    fol.style.display = "none";
  }
}
var nums = [100, 200, 300, 400, 500];
