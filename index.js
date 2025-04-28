var buttonlist = document.querySelectorAll(".drum");
for(var i=0; i<buttonlist.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        animate(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animate(event.key)
})

function makeSound(key){

    switch(key){
        case "w":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();

            break;
        case "a":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();

            break;
        case "s":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();

            break;
        case "d":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();

            break;    
        case "j":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();

            break;
        case "k":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();

            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();

            break; 
        default:
            console.log("HUH???");    
    }

}

function animate(currentKey){
    
    var currentKey = "."+currentKey;

    document.querySelector(currentKey).classList.add("pressed");
    document.querySelector(currentKey).style.color = "white";
    setTimeout( 
        function() { 
            document.querySelector(currentKey).classList.remove("pressed");
            document.querySelector(currentKey).style.color=""
        }, 100
    )
}