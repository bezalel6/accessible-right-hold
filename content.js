// content.js

let holdingRightClick = false;
const cg_board = document.querySelector("cg-board");
const chess_board = document.querySelector("chess-board");
let element = cg_board ? cg_board : chess_board;
let position = { x: 0, y: 0 };
document.addEventListener("mousemove", (event) => {
  position.x = event.clientX;
  position.y = event.clientY;
  console.log(position);
  // element = event.target;
  //
});
document.addEventListener("keydown", function (e) {
  console.log(position);
  console.log(e.key);
  if (e.key.toLowerCase() === "ScrollLock".toLowerCase()) {
    holdingRightClick = !holdingRightClick;
    if (holdingRightClick) {
      start();
    } else {
      end();
    }
  }
});
function start() {
  var ev1 = new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: false,
    view: window,
    button: 2,
    buttons: 2,
    clientX: position.x,
    clientY: position.y,
  });
  element.dispatchEvent(ev1);
}
function end() {
  var ev1 = new MouseEvent("mouseup", {
    bubbles: true,
    cancelable: false,
    view: window,
    button: 2,
    buttons: 2,
    clientX: position.x,
    clientY: position.y,
  });
  element.dispatchEvent(ev1);
}
