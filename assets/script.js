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

// allCards.forEach(function (el) {
//   var hammertime = new Hammer(el);

//   hammertime.on("pan", function (event) {
//     el.classList.add("moving");
//   });

//   hammertime.on("pan", function (event) {
//     if (event.deltaX === 0) return;
//     if (event.center.x === 0 && event.center.y === 0) return;

//     const isTopGesture = Math.abs(event.deltaX) < 100 && event.deltaY < 0;

//     tinderContainer.classList.remove("tinder_yes");
//     tinderContainer.classList.remove("tinder_nope");
//     tinderContainer.classList.remove("tinder_top");

//     tinderContainer.classList.toggle("tinder_yes", event.deltaX > 0);
//     tinderContainer.classList.toggle("tinder_nope", event.deltaX < 0);
//     if (isTopGesture) {
//       tinderContainer.classList.remove("tinder_yes");
//       tinderContainer.classList.remove("tinder_nope");
//       tinderContainer.classList.add("tinder_top");
//     }

//     var xMulti = event.deltaX * 0.03;
//     var yMulti = event.deltaY / 80;

//     var style = window.getComputedStyle(event.target);
//     var matrix = new WebKitCSSMatrix(style.transform);
//     console.log("translateX: ", matrix.m41);

//     // var rotate = event.srcEvent.clientX/tinderContainer.offsetWidth * 20;
//     var rotate = (matrix.m41 / tinderContainer.offsetWidth / 2) * 60;

//     console.log("event.center.x:", event.center.x);
//     console.log("event.deltaX:", event.deltaX);

//     event.target.style.transform =
//       "translate(" +
//       event.deltaX +
//       "px, " +
//       event.deltaY +
//       "px) rotate(" +
//       rotate +
//       "deg)";
//   });

//   hammertime.on("panend", function (event) {
//     el.classList.remove("moving");
//     tinderContainer.classList.remove("tinder_yes");
//     tinderContainer.classList.remove("tinder_nope");
//     tinderContainer.classList.remove("tinder_top");

//     var moveOutWidth = document.body.clientWidth;
//     var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

//     event.target.classList.toggle("removed", !keep);

//     if (keep) {
//       event.target.style.transform = "";
//     } else {
//       var endX = Math.max(
//         Math.abs(event.velocityX) * moveOutWidth,
//         moveOutWidth
//       );
//       var toX = event.deltaX > 0 ? endX : -endX;
//       var endY = Math.abs(event.velocityY) * moveOutWidth;
//       var toY = event.deltaY > 0 ? endY : -endY;
//       var xMulti = event.deltaX * 0.03;
//       var yMulti = event.deltaY / 80;

//       var style = window.getComputedStyle(event.target);
//       var matrix = new WebKitCSSMatrix(style.transform);
//       console.log("translateX: ", matrix.m41);

//       // var rotate = event.srcEvent.clientX/tinderContainer.offsetWidth * 20;
//       var rotate = (matrix.m41 / tinderContainer.offsetWidth / 2) * 60;

//       event.target.style.transform =
//         "translate(" +
//         toX +
//         "px, " +
//         (toY + event.deltaY) +
//         "px) rotate(" +
//         rotate +
//         "deg)";
//       initCards();
//     }
//   });
// });

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
