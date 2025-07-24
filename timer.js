let timerValWork = 1500;
let timerValShortB = 300;
let timerValLongB = 600;
let startButton;
let pauseButton;
let timerText;
let pomoSection;
let workState = true;

function preLoad(){

}
function setup(){
    createCanvas(1920,1080);
    setInterval(timerMakerW,1000);
    setInterval(timerMakerSB,1000);
    setInterval(timerMakerLB,1000);
    startButton = new Sprite(200,200,window.InnerWidth/4,window.innerHeight/2);
    startButton.color = (0,0,255);
    startButton.text = "Start";
    pauseButton = new Sprite(200,200, window.InnerWidth/2, window.innerHeight/2);
    pauseButton.color = (0,255,0);
    pauseButton.text = "Pause";
    timerText = new Sprite(800,400,window.InnderWidth/2, window.innerHeight/2);
    pomoSection = 1;
    timerValWork = 1500;
    timerValShortB = 300;
    timerValLongB = 600;
    workState= true;
}
function draw(){
    background(255,0,0);
    startButton.pos = {x:200, y:200};
    pauseButton.pos = {x:800, y:200};
    timerText.pos = {x:200, y:100};
    
    if (startButton.mouse.presses() && pomoSection == 1){
    setInterval(timerMakerW, 1000);
    workState= true;
    }   

}

function timerMakerW(){
    timerValWork = 1500;
    timerValWork--;
}
