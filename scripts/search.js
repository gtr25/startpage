function toggleEngine() {

  var gSearch = document.getElementById("gSearch");
  var dSearch = document.getElementById("dSearch");
  var logo = document.getElementById("engineLogo").src;
  localStorage.setItem('preferredEngine', logo);

  if (logo.indexOf("duck.svg") != -1) {
    document.getElementById("engineLogo").src = "icons/google.svg";
    gSearch.style.display = "block";
    dSearch.style.display = "none";
  } else {
    document.getElementById("engineLogo").src = "icons/duck.svg";
    dSearch.style.display = "block";
    gSearch.style.display = "none";
  }

  document.getElementById("textField").reset();
}

var gStorage = {};

function toogle(anImage, anAltSrcArr) {
    if (typeof(anImage) === "undefined" || typeof(anAltSrcArr) === "undefined" || anAltSrcArr.length === 0) {
        return;
    }

    var id = anImage.id;
    var oldSrc = anImage.src;

    if (typeof(gStorage[id]) === "undefined") {
        gStorage[id] = {
            'id': id,
            'origSrc': oldSrc,
            'i': 0
        };
    }

    gStorage[id].i += 1;
    if (gStorage[id].i > anAltSrcArr.length) {
        gStorage[id].i = 0;
    }

    if (gStorage[id].i === 0) {
        anImage.src = gStorage[id].origSrc;
    } else {
        anImage.src = anAltSrcArr[gStorage[id].i - 1];
    }
}
