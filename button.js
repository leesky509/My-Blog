function buttonHandler() {
  var button = document.querySelector(button);
  var menus = ["Hello World", "HTML", "CSS", "Java script"];
  var i = 0;
  while (i < menus.length) {
    document.write("<button>" + menus[i] + "</button>");
    i = i + 1;
  }
}
