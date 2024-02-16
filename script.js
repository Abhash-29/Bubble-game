function makebubble(){   // this function makes all the bubbles and random numbers
    var Clutter = "";

for(var i=1;i<=161;i++){
    var rn = Math.floor(Math.random()*10);    // math.floor removes decimal from a number
    Clutter += `<div class="Bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = Clutter; 
}

var hitrn;
function getNewhit(){
     hitrn = Math.floor(Math.random()*10);
     document.querySelector("#hitval").textContent = hitrn;
}

var timer = 60;         //this function sets timer
function runtimer(){
     var timerint = setInterval(function(){
         if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
     }, 1000);
}

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm")
.addEventListener("click",function (details) {
   var Clickednumber = Number(details.target.textContent);
   if(Clickednumber === hitrn){
    increaseScore();
    makebubble();
    getNewhit();
   }
});

runtimer();
makebubble();
getNewhit();