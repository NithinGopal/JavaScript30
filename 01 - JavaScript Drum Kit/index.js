// Detecting Keypress

document.addEventListener("keydown", function (event){
    buttonAnimation(event.key.toUpperCase());
    playSound(event.key.toLocaleUpperCase());
})

//Detecting Button Press

// for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  
//       var buttonInnerHTML = this.innerHTML;
//       makesound(buttonInnerHTML);
//       buttonAnimation(buttonInnerHTML);
//     });
//   }

for (i=0; i<document.querySelectorAll('.key').length; i++) {
    document.querySelectorAll('.key')[i].addEventListener("click", function (){
        //console.log(this.classList);
        let buttonClicked = this.classList[0];
        buttonAnimation(buttonClicked);
        playSound(buttonClicked);
        console.log(buttonClicked);
    });
}

//Button Animation

function buttonAnimation(currentkey){
    let activeButton = document.querySelector("." + currentkey);
    //console.log(activeButton);
    activeButton.classList.add('playing');
    
    setTimeout(() => {
        activeButton.classList.remove('playing');
    },10);
}

// Playing Sound 

function playSound(keyPressed){
    //console.log(keyPressed);
    let keyAttr = document.querySelector("." + keyPressed).getAttribute('data-key');
    //console.log(keyAttr);
    let sound = document.querySelector(`audio[data-key = "${keyAttr}"]`);
    //console.log(sound);
    sound.play();
}