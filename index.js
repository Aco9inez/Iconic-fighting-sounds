
// detects button press

var numberOfthebuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfthebuttons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

}

// detects the keyboard press

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);

});


// Passes the function as parameters and calling them

function makeSound(key){
  switch (key) {
    case "r":
    var hadouken = new Audio("FighterSounds/Hadouken.mp3");
    hadouken.play();
    break;

    case "s":
    var getOverHere = new Audio("FighterSounds/ScorpionGetOverHere.mp3");
    getOverHere.play();
    break;

    case "g":
      var kamehameha = new Audio("FighterSounds/Kamehameha.mp3");
      kamehameha.play();
      break;

    case "f":
    var falconPunch = new Audio("FighterSounds/FalconPunch.mp3");
    falconPunch.play();
    break;

    case "n":
    var rasengan = new Audio("FighterSounds/Rasengan.mp3");
    rasengan.play();
    break;

    case "k":
    var shoryuken = new Audio("FighterSounds/KenShoryuken.mp3");
    shoryuken.play();
    break;

    case "o":
    var finishhim = new Audio("FighterSounds/FinishHim.mp3");
    finishhim.play();
    break;

    default:
      console.log(innerHTML);

  }

  }

  function buttonAnimation(currentkey) {
var activeButton = document.querySelector("." + currentkey);

activeButton.classList.add("pressed");

setTimeout(function() {
activeButton.classList.remove("pressed");

}, 100);

  }
