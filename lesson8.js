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
/* let arr = [1, 4, 9, 7, 6, 5, 8, 4, 3, 4, 6, 1];
function unique(arr) {
  let result = [];
  for (let nam of arr) {
    if (!result.includes(nam)) {
      result.push(nam);
    }
  }
  return result;
}
console.log(unique(arr)); */

//практика 3 задача
/* const arr1 = [7,5,2,8];
const arr2 =[7,5,2,8];
console.log(JSON.stringify(arr1)===JSON.stringify(arr2)); */

//дз
//1
/* const arr =['Jule', 'Anton', 'Nino', 'Rembrand'];
let mapArr = arr.map((el) => el.length);
console.log(mapArr); */

//2
const numbers = [0, 2, 3, 5, 7, 11, 13, 17, 19, 23];
const currentSums = (arr) => {
  const result = [];

  arr.reduce((prev, cur) => {
    result.push(prev + cur);
    return prev + cur;
  }, 0);

  return result;
};

console.log(currentSums(numbers));

//3
/* const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumSeven = (arr) => {
  const result = [];
  for (let i of arr) {
    for (let j of arr) {
      if (i + j === 7 && !result.includes("${ i }: ${ j }"))
        result.push("${i}:${j}");
    }
  }
  return result;
};
console.log(sumSeven(arr));

//5
const str = "JavaScript";
const strSymbols = (str) => {
  const result = [];
  const { length } = str;
  for (let i = 0; i < length; i += 1) {if
    (result.push(str.slice(0, 2)));
  } else if (i === length - 1) {
    result.push(str.slice(-2));
  } else { result.push(str.slice(i - 1, i + 2)) };
  return result
};
console.log(strSymbols(str)); ----доделать */

//6
/* let arr = [7, 2, 5, 9, 4, 3, 23];
let arrSort = arr.sort((a, b) => b - a);
console.log(arrSort); */

//7
/* let arr1 = [7, 5, 896, 1, 56];
let arr2 = [8, 2, 3, 64, 3];
let arr3 = [8, 63, 21, 1, 63];
let sharedArr = arr1.concat(arr2, arr3);
sharedArr.sort((a, b) => b - a).join(" ").split();
function unique(sharedArr) {
  let result = [];
  for (let nam of sharedArr) {
    if (!result.includes(nam)) {
      result.push(nam);
    }
  }
  return result;
}
console.log(unique(sharedArr)); */

//8
/* const arr = [[7, 3, 5], 8, 6, [1, 2]];
let newArr = (arr) =>
  arr
    .toString()
    .split(",")
    .map((el) => +el)
    .reduce((accum, current) => accum + current);
console.log(newArr(arr)); */

//9
/* const myArr = [1,2,3,4,5,6,7,8,9];
const myReturnArr =[]
myArr.forEach((e) => myReturnArr.unshift(e));
console.log("9.", myReturnArr); */

//10
/* const arr = [12, 2, 3, 4, 5, 6, 7, 8, 9];

const sumMoreTen = (arr) => {
  let lastIndex;
  arr.reduce((prev, cur, index) => {
    if (prev + cur <= 10) {
      lastIndex = index;
      return prev + cur;
    }
  }, 0);
  if (lastIndex === 0) {
    return lastIndex + 1;
  }
  if (typeof lastIndex === "undefined") {
    return 1;
  }
  return lastIndex + 2;
};
console.log(sumMoreTen(arr));
 */
