let num = function (a, b = 2) {
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

function aWeek("пн,2,3,4,5,6,7) {
    
}
