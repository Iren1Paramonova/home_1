function timer() {
  let start = 10;
  return function (end) {
    for (i = start; i > end; i -= 1) {
      console.log(i);
    }
  };
}
const counting = timer();
counting(5);
console.log("Таймер закончил");
