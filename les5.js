/* let num = function (a, b = 2) {
  let result = a ** b;
  return result;
};
console.log(num(5));

function sum(a = 25, b = 30) {
  const result = a + b;
  return result;
}
console.log(sum());

let funExp = function (a, d, w) {
  console.log((a - d) / w);
};
funExp(2, 4, 1);

//дом.задание
//1
function kvadrat(a) {
  console.log(a * 2);
}
kvadrat(7);

//2
function sum(a, b = 4) {
  return (result = a + b);
}
sum(15);
console.log(result);

//3
function reshenie(a, b, c) {
  return (result = a - b / c);
}
reshenie(5, 8, 2);
console.log(result);

//4
function week(a) {
  if (a === 1) {
    console.log("понедельник");
  } else if (a === 2) {
    console.log("вторник");
  } else if (a === 3) {
    console.log("среда");
  } else if (a === 4) {
    console.log("четверг");
  } else if (a === 5) {
    console.log("пятница");
  } else if (a === 6) {
    console.log("суббота");
  } else if (a === 7) {
    console.log("воскресенье");
  }
}
week(3);

//5
function ravenstvo(a = 2, b = 2) {
  if (a === b) {
    console.log("true");
  } else {
    console.log("folse");
  }
}
ravenstvo();

//6
function dieci(a = 5, b = 3) {
  if (a + b >= 10) {
    console.log("true");
  } else {
    console.log("folse");
  }
}
dieci(); */

//7
let noll = function (a = -11) {
  if (a < 0) {
    console.log("true");
  } else {
    console.log("false");
  }
};
noll();

//8
function isNumberInRanger(a = -6) {
  if (0 < a < 10) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isNumberInRanger();
