const multiArr = [1, 2, [3, 4, 5, [6, 7, 8]], 9, 10, [11, 12, [13, 14, [15]]]];
//решение 1 в одну строку
const firstTry = (arr) =>
  arr
    .toString()
    .split(",")
    .map((el) => +el);

console.log(firstTry(multiArr));

//решение 2 рекурсией
const secondTry = (arr) => arr.flat(Infinity);
console.log(secondTry(multiArr));
const thirdTry = (arr) => {
  let haveArr = false;
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      haveArr = true;
    }
  }
};
if (haveArr) {
  return thirdTry(arr.flat());
}
