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

}
  // attacks
  function arcaneScepter() {
    console.log("scepter button pressed");
    fungusHP -= 14;
    myAP -= 12;
  }

  function handleEntangle() {
    console.log("entangle button pressed");
    fungusHP -= 9;
    myAP -= 23;
  }

  function handleDragonBlade() {
    console.log("dragon button pressed");
    fungusHP -= 47;
    myAP -= 38;
  }

  function handleStarFire() {
    console.log("star button pressed");
    fungusHP -= 25;
    myAP -= 33;
  }


 
  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM

