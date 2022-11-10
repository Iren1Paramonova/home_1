/* const multiArr = [1, 2, [3, 4, 5, [6, 7, 8]], 9, 10, 15, [11, 12, [13, 14, [15]]]]; */
//решение 1 в одну строку
/* const firstTry = (arr) =>
  arr
    .toString()
    .split(",")
    .map((el) => +el);

console.log(firstTry(multiArr)); */

//решение 2
/* const secondTry = (arr) => arr.flat(Infinity);
console.log(secondTry(multiArr)); */

//решение 3 рекурсией
/* const thirdTry = (arr) => {
  let haveArr = false;
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      haveArr = true;
    }
  }
 if (haveArr) {
  return thirdTry(arr.flat());
} return arr;};
console.log(thirdTry(multiArr)); */

//практика 1 задача
/* let aArr = [2, 3, 5, 7, 8, 9, -4, -2, -1, 0, -8];
const bArr = (arr) =>
  arr
    .filter((e) => e > 0)
    .filter((e) => e % 2 == 0)
    .reduce((accum, current) => accum + current);
console.log(bArr(aArr)); */

//практика 2 задача
let arr = [1, 4, 9, 7, 6, 5, 8, 4, 3, 4, 6, 1];
const unicArr = arr.map((el) => el !== el++);
console.log(unicArr);
//https://learn.javascript.ru/task/array-unique
