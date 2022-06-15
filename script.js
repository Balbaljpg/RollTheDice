let images = ["dice-01.png",
"dice-02.png",
"dice-03.png",
"dice-04.png",
"dice-05.png",
"dice-06.png"];

let dice = document.querySelectorAll("img");

var rolleddice = new Audio ();
rolleddice.src = "rolleddice.mp3";

function roll(){
   
    dice.forEach(function(die){
        die.classList.add("rotate");
    });
    
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("rotate");
        });
        
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);

        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#result1").innerHTML = "Player 1 got: " + (dieOneValue + 1) ;
        document.querySelector("#result2").innerHTML = "Player 2 got: " + (dieTwoValue + 1) ;

        if (dieOneValue > dieTwoValue) {
            document.querySelector('h5').innerHTML = "The Winner is Player 1!🏆";
        } 
        else if (dieOneValue < dieTwoValue) {
            document.querySelector('h5').innerHTML = "The Winner is Player 2!🏆";
        }
        else {
            document.querySelector('h5').innerHTML = "🏆It's a Draw!🏆";
        }
        var audio = new Audio ('winner.mp3');
        audio.play();

    },
    
    1000
    );
}

roll();

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

var colors = ["black", "lightgray", "white", "orange"];
    var colorIndex = 0;
    function changeColor() {
        var col = document.getElementById("body");
        if( colorIndex >= colors.length ) {
            colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        colorIndex++;
    }