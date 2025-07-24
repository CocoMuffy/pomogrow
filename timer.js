let timerVal;
let startButton;
let pauseButton;
let timerText;

function preLoad(){

}
function setup(){
    createCanvas(window.InnerWidth,window.innerHeight);
    background(255,0,0);
    setInterval(timerMaker);
    startButton = new Sprite(200,200,window.InnerWidth/4,window.innerHeight/2);
    startButton.color = (0,0,255);
    startButton.text = "Start";
    pauseButton = new Sprite(200,200, window.InnerWidth/2, window.innerHeight/2);
    pauseButton.color = (0,255,0);
    pauseButton.text = "Pause";
    timerText = new Sprite(800,400,window.InnderWidth/2, window.innerHeight/2);
}
function draw(){
    startButton.pos = {x:200, y:200};
    pauseButton.pos = 

}
function timerMaker(){

}