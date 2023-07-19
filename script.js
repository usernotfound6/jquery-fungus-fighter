$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:

let fungusHP = 100;

let myAP = 100;

function onReady() {
  // handlers
  $(".arcane-scepter").on("click", arcaneScepter);
  $(".entangle").on("click", handleEntangle);
  $(".dragon-blade").on("click", handleDragonBlade);
  $(".star-fire").on("click", handleStarFire);
  handleFungus();
  handleAP();
}
// attacks
function arcaneScepter() {
  console.log("scepter button pressed");
  fungusHP -= 14;
  myAP -= 12;

  if (fungusHP <= 0) fungusHP = 0;

  if (myAP <= 12) {
    myAP = 0;
  }
  renderHP();
  renderAP();
  handleFungus();
  handleAP();
}

function handleEntangle() {
  console.log("entangle button pressed");
  fungusHP -= 9;
  myAP -= 23;

  if (fungusHP <= 0) fungusHP = 0;

  if (myAP <= 23) {
    myAP = 0;
  }
  renderHP();
  renderAP();
  handleFungus();
  handleAP();
}

function handleDragonBlade() {
  console.log("dragon button pressed");
  fungusHP -= 47;
  myAP -= 38;

  if (fungusHP <= 0) fungusHP = 0;

  if (myAP <= 38) {
    myAP = 0;
  }
  renderHP();
  renderAP();
  handleFungus();
  handleAP();
}

function handleStarFire() {
  console.log("star button pressed");
  fungusHP -= 25;
  myAP -= 33;

  if (fungusHP <= 0) fungusHP = 0;

  if (myAP <= 33) {
    myAP = 0;
  }
  renderHP();
  renderAP();
  handleFungus();
  handleAP();
}

// render health and attack power
function renderHP() {
  $(".hp-text").empty();
  $(".hp-text").append(`<span id = "HP">${fungusHP} HP </span`);
}

function renderAP() {
  $(".ap-text").empty();
  $(".ap-text").append(`<span id = "AP">${myAP} AP </span`);
}

// functions for defeat
function handleFungus() {
  if (fungusHP <= 0) {
    console.log("he is vanquished");
    fungusHP = 0;
    $(".walk").replaceWith('<div class="freaky-fungus dead"></div>');
  }
}

function handleAP() {
  if (myAP <= 0) {
    console.log("out of juice");
    myAP = 0;
    $(".walk").replaceWith('<div class="freaky-fungus jump"></div>');
    $(".attack-btn").attr("disabled", true);
  }
}
// Make sure you check the index.html file!
// There are lots of buttons and things ready for you to hook into here!

// 🧠 Remember
// - Handle events that ->
// - Updates state which is ->
// - Rendered to the DOM
