  for (i = 1; i <= 7; i++) {
    var elem = document.getElementById("cover" + i);
    elem.addEventListener("mouseover", function (event) {
      event.target.style.height = "262.5px";
      event.target.style.width = "189.88px";
    }, false);

    elem.addEventListener("mouseout", function (event) {
        event.target.style.height ="260px";
        event.target.style.width = "188px"
    }, false);
  }

  var elem = document.getElementById("cover8");
  elem.addEventListener("mouseover", function (event) {
    event.target.style.height = "202px";
    event.target.style.width = "141.4px";
  }, false);

  elem.addEventListener("mouseout", function (event) {
      event.target.style.height ="200px";
      event.target.style.width = "140px"
  }, false);
