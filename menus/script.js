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
  var con = document.getElementById("divcon");
  if (con.style.display == "none") {
    con.style.display = "block";
  } else {
    con.style.display = "none";
  }
}