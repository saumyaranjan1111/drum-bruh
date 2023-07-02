let buttons = document.querySelectorAll('button');

let crash = new Audio("./sounds/crash.mp3");
let kick = new Audio("./sounds/kick-bass.mp3");
let snare = new Audio("./sounds/snare.mp3");
let tom1 = new Audio("./sounds/tom-1.mp3");
let tom2 = new Audio("./sounds/tom-2.mp3");
let tom3 = new Audio("./sounds/tom-3.mp3");
let tom4 = new Audio("./sounds/tom-4.mp3");

function playSound(button){
    switch (button) {
        case "w":
            crash.play();
            break;
        case "a":
            kick.play();
            break;
        case "s":
            snare.play();
            break;
        case "d":
            tom1.play();
            break;
        case "j":
            tom2.play();
            break;
        case "k":
            tom3.play();
            break;
        case "l":
            tom4.play();
            break;
        default:
            console.log(button);
            break;
    }
}

buttons.forEach(function(button){
    button.addEventListener("click", function (){
        let buttonKey = this.innerHTML;

        playSound(buttonKey);
        addAnimation(buttonKey);
    
    })
})

document.addEventListener("keydown", function(event){
    // console.log(event.key);
    const pressedKey = event.key;

    playSound(pressedKey);
    addAnimation(pressedKey);
})
// let audio = new Audio("./sounds/tom-1.mp3");
//         audio.play();

let addAnimation = (button) => {
    // select the button which is currently pressed
    // currButton = <button class="w drum">w</button> if the button pressed is w
    let currButton = document.querySelector("."+button);
    currButton.classList.add("pressed");

    setTimeout(function(){
        currButton.classList.remove("pressed");
    }, 100);
}