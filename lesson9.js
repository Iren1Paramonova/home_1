function timer() {
  let start = 10;
  let end = 5;
  return function (end) {
    for (; start > end; start -= 1) {
      console.log(start);
    }
  };
}
const counting = timer();

setInterval(counting, 1000);

console.log("Таймер закончил");

const timer=(start,end)=>{
  let currentTime = start;
  return function timerCounter(){
    if(currentTime !== end){
      console.log(currentTime);
      setTimeout(()=>{
        currentTime=-1;
        timerCounter();
      }, 1000)
    }
  }
}
const firstrTimer = timer (20,12);
firstrTimer();


