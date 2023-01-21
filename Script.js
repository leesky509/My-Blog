function menusHandler() {
  var menus = ["Hello World", "HTML", "CSS", "JavaScript", "기술 블로그"];
  var i = 0;
  while (i < menus.length) {
    document.write(
    '<li><a href="' + menus[i] + '.html" class="menusColor">'
     + menus[i] + "</a></li>"
    );
    i = i + 1;
  }
}
