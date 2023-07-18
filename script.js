$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:

 let fungusHP = 100;

 let myAP = 100;

function onReady() {
    
     $('#attack-btn arcane-scepter').on('click', arcaneScepter);

     function arcaneScepter() {
        fungusHP - 14;
        myAP - 12;
     }


    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
