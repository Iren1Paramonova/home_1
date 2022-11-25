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
