var tinderContainer = document.querySelector(".tinder");
var allCards = document.querySelectorAll(".tinder--card");

function initCards(card, index) {
  var newCards = document.querySelectorAll(".tinder--card:not(.removed)");

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform =
      "scale(" + (20 - index) / 20 + ") translateY(-" + 30 * index + "px)";
    card.style.opacity = (10 - index) / 10;
  });

  tinderContainer.classList.add("loaded");
}

initCards();

function createButtonListener(id) {
  return function (event) {
    var cards = document.querySelectorAll(".tinder--card:not(.removed)");
    var moveOutWidth = document.body.clientWidth * 1.5;
    var moveOutHeight = document.body.clientHeight * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add("removed");

    if (id === "yes") {
      card.style.transform =
        "translate(" + moveOutWidth + "px, -100px) rotate(10deg)";
    } else if (id === "nope") {
      card.style.transform =
        "translate(-" + moveOutWidth + "px, -100px) rotate(-10deg)";
    } else if (id === "top") {
      card.style.transform =
        "translate(0px, -" + moveOutHeight + "px) rotate(0deg)";
    }

    initCards();

    event.preventDefault();
  };
}

var yesListener = createButtonListener("yes");
var nopeListener = createButtonListener("nope");
var topListener = createButtonListener("top");

var yesBtn = document.getElementById("yes");
var nopeBtn = document.getElementById("nope");
var topBtn = document.getElementById("top");

yesBtn.addEventListener("click", yesListener);
nopeBtn.addEventListener("click", nopeListener);
topBtn.addEventListener("click", topListener);

// date format

var date = document.getElementById("date");

function checkValue(str, max) {
  if (str.charAt(0) !== "0" || str == "00") {
    var num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str =
      num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
        ? "0" + num
        : num.toString();
  }
  return str;
}

date.addEventListener("input", function (e) {
  this.type = "text";
  var input = this.value;
  if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
  var values = input.split("/").map(function (v) {
    return v.replace(/\D/g, "");
  });
  if (values[0]) values[0] = checkValue(values[0], 31);
  if (values[1]) values[1] = checkValue(values[1], 12);
  var output = values.map(function (v, i) {
    return v.length == 2 && i < 2 ? v + " / " : v;
  });
  this.value = output.join("").substr(0, 14);
});

date.addEventListener("blur", function (e) {
  this.type = "text";
  var input = this.value;
  var values = input.split("/").map(function (v, i) {
    return v.replace(/\D/g, "");
  });
  var output = "";

  if (values.length == 3) {
    var year =
      values[2].length !== 4 ? parseInt(values[2]) + 2000 : parseInt(values[2]);
    var month = parseInt(values[0]) - 1;
    var day = parseInt(values[1]);
    var d = new Date(year, month, day);
    if (!isNaN(d)) {
      document.getElementById("result").innerText = d.toString();
      var dates = [d.getMonth() + 1, d.getDate(), d.getFullYear()];
      output = dates
        .map(function (v) {
          v = v.toString();
          return v.length == 1 ? "0" + v : v;
        })
        .join(" / ");
    }
  }
  this.value = output;
});

// Radio Validation

var dueId1 = document.getElementById("dueId1");
var dueId2 = document.getElementById("dueId2");
var dueId3 = document.getElementById("dueId3");
var dueId4 = document.getElementById("dueId4");
var radioDur = document.getElementsByClassName("radio-dur");
var dur1 = document.getElementById("dur-1");
var dur2 = document.getElementById("dur-2");
var dur3 = document.getElementById("dur-3");
var dur4 = document.getElementById("dur-4");

radioDur.checked = true;

function chk() {
  if (radioDur.checked) {
    dur1.classList.remove("hidden-imp");
    dur2.classList.add("hidden-imp");
    dur3.classList.add("hidden-imp");
    dur4.classList.add("hidden-imp");
    console.log("done");
  }
}

function chk2() {
  if (radioDur.checked) {
    dur2.classList.remove("hidden-imp");
    dur1.classList.add("hidden-imp");
    dur3.classList.add("hidden-imp");
    dur4.classList.add("hidden-imp");
    console.log("done");
  }
}

function chk3() {
  if (radioDur.checked) {
    dur3.classList.remove("hidden-imp");
    dur1.classList.add("hidden-imp");
    dur2.classList.add("hidden-imp");
    dur4.classList.add("hidden-imp");
    console.log("done");
  }
}

function chk4() {
  if (radioDur.checked) {
    dur4.classList.remove("hidden-imp");
    dur1.classList.add("hidden-imp");
    dur2.classList.add("hidden-imp");
    dur3.classList.add("hidden-imp");
    console.log("done");
  }
}

dueId1.addEventListener("click", chk);
dueId2.addEventListener("click", chk2);
dueId3.addEventListener("click", chk3);
dueId4.addEventListener("click", chk4);

// Radio Validation 2

var drinkId1 = document.getElementById("drinkId1");
var drinkId2 = document.getElementById("drinkId2");
var drinkId3 = document.getElementById("drinkId3");
var drinkId4 = document.getElementById("drinkId4");
var drinkId5 = document.getElementById("drinkId5");
var radioDrink = document.getElementsByClassName("radio-drink");
var drink1 = document.getElementById("drink-1");
var drink2 = document.getElementById("drink-2");
var drink3 = document.getElementById("drink-3");
var drink4 = document.getElementById("drink-4");
var drink5 = document.getElementById("drink-5");

radioDrink.checked = true;

function chkDrink() {
  if (radioDrink.checked) {
    drink1.classList.remove("hidden-imp");
    drink2.classList.add("hidden-imp");
    drink3.classList.add("hidden-imp");
    drink4.classList.add("hidden-imp");
    console.log("done");
    drink5.classList.add("hidden-imp");
  }
}

function chkDrink2() {
  if (radioDrink.checked) {
    drink2.classList.remove("hidden-imp");
    drink1.classList.add("hidden-imp");
    drink3.classList.add("hidden-imp");
    drink4.classList.add("hidden-imp");
    console.log("done");
    drink5.classList.add("hidden-imp");
  }
}

function chkDrink3() {
  if (radioDrink.checked) {
    drink3.classList.remove("hidden-imp");
    drink1.classList.add("hidden-imp");
    drink2.classList.add("hidden-imp");
    drink4.classList.add("hidden-imp");
    console.log("done");
    drink5.classList.add("hidden-imp");
  }
}

function chkDrink4() {
  if (radioDrink.checked) {
    drink4.classList.remove("hidden-imp");
    drink1.classList.add("hidden-imp");
    drink2.classList.add("hidden-imp");
    drink3.classList.add("hidden-imp");
    console.log("done");
    drink5.classList.add("hidden-imp");
  }
}
function chkDrink5() {
  if (radioDrink.checked) {
    drink5.classList.remove("hidden-imp");
    drink1.classList.add("hidden-imp");
    drink2.classList.add("hidden-imp");
    drink3.classList.add("hidden-imp");
    console.log("done");
    drink4.classList.add("hidden-imp");
  }
}

drinkId1.addEventListener("click", chkDrink);
drinkId2.addEventListener("click", chkDrink2);
drinkId3.addEventListener("click", chkDrink3);
drinkId4.addEventListener("click", chkDrink4);
drinkId5.addEventListener("click", chkDrink5);
