// https://www.youtube.com/watch?v=PkZNo7MFNFg

let counter = 0;
var btn = document.getElementById("myButton");
btn.style.position = "absolute";

function buttonFunction(){
    counter++;
    buttonPosition();
    btn.style.width = "23px";
    btn.style.height = "23px";
//    resetTimer();
    countDown();
    document.getElementById("myTitle").innerHTML = 
    "Button clicked " + counter + " times";
    // document.getElementById("myButton").style.display = "block";
}

function buttonPosition(){
    btn.style.left = randomPosition() + 'px'; //220.077px, 466.490px
    btn.style.top = randomPosition() + 'px';  //138.912px, 125.008px

    // btn.style.left = "600px";
    // btn.style.top = "650px";
}

function randomPosition(){
    // return value between [200,600]
    return (Math.random()*400 + 200);
}


let timeCounter = 4;
//var timer;

function textCountDown(){
    btn.innerHTML = timeCounter;
    timeCounter--;
}

function countDown(){
    btn.innerHTML = 5;
    var timer = setInterval(textCountDown, 1000);
//    btn.onclick = function(){
//        clearInterval(timer);
//        timeCounter = 5;
//        timer = setInterval(textCountDown, 1000);
//    }
}

function resetTimer(){
    clearInterval(timer);
    timeCounter = 5;
}

