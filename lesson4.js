/*for (i = 7; i <= 12; i++) {
  console.log(i);
}

do {
  console.log("1 raz");
} while (false);

console.log("hi");*/

/*for (let index = 0; index <= 5; index += 1) {
  console.log("Ku-ku");
}*/

/*let n = 100;
const m = 20;
let i = 0;
while (n > m) {
  n = n / 2;
  i += 1;
}
console.log(i);
console.log("дня понадобилось");*/

/*let i = 0;
for (let n = 1800; n < 1961; n += 1) {
  i += 1;
}
console.log(i);*/

/*const gagarin = 1961;
let i = 0;
for (let nastDey = 2022; nastDey > gagarin; nastDey -= 1) {
  i += 1;
  if (nastDey === gagarin) {
    break;
  }
}
console.log(i);*/

/* const nameCompany = "ECMAScript";
if (nameCompany === "ECMAScript") {
  console.log("Verno!");
} else {
  console.log("Не знаете? ECMAScript!");
}

let num = 0;
if (num > 0) {
  console.log("1");
}
if (num < 0) {
  console.log("-1");
} else {
  console.log("0");
} */

/* let a = 3;
let b = 5;
let result = a + b > 4 ? "Malo" : "Mnogo";
console.log(result); */

/* let browser = "nkij";
if (browser === "edge") {
  console.log("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we support these browser too");
} else {
  console.log("We hope that this page looks ok!");
}; */

switch (4) {
  case 0:
    console.log("Вы ввели число 0");
    break;
  case 1:
    console.log("Вы ввели число 1");
    break;
  case 2:
  case 3:
    console.log("Вы ввели число 2 или 3");
    break;
  default:
    console.log("Вы ввели большое число");
}
