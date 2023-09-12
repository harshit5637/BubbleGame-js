
//ye bubble bnane ka code hai without this code we can't create bubble
var timer=60;
var score=0;
var hitrn=0;

//jispe click karoge wo element par event raise hoga,aur 
//event listener naa milne par event element ke parent par
// listener dhundhega,wha bhi na milne par event parent ke
// parent ke parent listener dhundhega


function increaseScore(){
  score+=10;
  document.querySelector("#scoreval").textContent=score;
}
function getNewHit() {
 hitrn = Math.floor(Math.random() *10);
 document.querySelector("#hitval").textContent = hitrn;
}
 
function makeBubble(){
var clutter=" ";

for(var i=1;i<=75;i++){
    var rn=Math.floor(Math.random()*10)

  clutter+=  `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}

//Math.random()
//Math.random()*10
//Math.floor(1.2): point hta deta hai output dega 1 
//Math.floor(Math.random()*10)


function runTimer(){
   var timerint=setInterval(function(){
    if(timer>0){
     timer--; 
    document.querySelector("#timerval").textContent=timer;
    }else{
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML=`<h1>GameOver</h1>`;
    }
  },1000);
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
  var clickednum= Number(details.target.textContent);
  //alert("chal raha hai");
  if(clickednum===hitrn){
    increaseScore();
    makeBubble(); 
    getNewHit();
  }
});


runTimer();
makeBubble(); 
getNewHit();
increaseScore();
increaseScore();
increaseScore();