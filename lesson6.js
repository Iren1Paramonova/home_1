//1
let stringToArray = (str) => {
  Array.from(str);
};
console.log(Array.from("Hello world people"));

//2
let deleteCharacters = (str, length) => {
  console.log(str.substr(0, 4));
};
deleteCharacters("HeyYou", 4);

//3
let insertDash = (str) => {
  console.log(str.replace(str | " ", "-"));
  console.log(str.toUpperCase());
};
insertDash("Lubov' zhivet 3 goda");
