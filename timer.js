  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

let targetTime = getTime()+1500;
let startTime = getTime()

function timer(){
    const currentDistance = targetTime - startTime

    const minutes = Math.floor(currentDistance/1000/60);
    const seconds = Math.floor(distance/1000)%60;

}