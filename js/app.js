// Loop
let meva = [
  "Apple",
  "Banana",
  "Cherry",
  "Lime",
  "Pear",
  "Strawberry",
  "Kiwi",
  "Orange",
  "Pineapple",
  "Watermelon",
  "Melon",
  "Blueberry",
  "Raspberry",
  "Avocado",
  "Mango",
  "Lemon",
  "Coconut",
  "Grapes",
  "Pomegranate",
];

let str = "Lorem ipsum dolor sit amet.";

let person = {
  fName: "Eshmat",
  lName: "Toshmat",
  email: "eshmat@gmail.com",
  age: 32,
  isMarried: true,
};

// while
// while, do ... while

// let topildi = false;
// let count = 0;
// while (!topildi) {
//   count++;
//   if (count === 10) {
//     topildi = true;
//   }
// }

// do {
//   console.log(123);
// } while (false);

// let password = "1234";
// let input = prompt("Parol kiriting"); // 1234

// do {
//   input = prompt("Topolmadingiz qaytadan Parol kiting");
// } while (password !== input);

// let found = false; // true
// let chances = 6;

// while (password !== input) {
//   input = prompt("Topolmadingiz qaytadan Parol kiting");
// }

// while (chances) {
//   chances--;
//   if (password === input) {
//     found = true;
//   } else {
//     input = prompt("Topolmadingiz qaytadan Parol kiting");
//   }
// }

// for
// for, for ... in, for ... of

// console.time("for of");
// for (let fruit of meva) {
//   console.log(fruit);
// }
// console.timeEnd("for of");

// for (let char of str) {
//   console.log(char);
// }

// X
// for (let value of person) {
//   console.log(value);
// }

// for (let i in meva) {
//   console.log(meva[i - 1], meva[i], meva[i + 1]);
// }

// for (let i in str) {
//   console.log(str[i]);
// }

// for (let kalitSoz in person) {
//   console.log(kalitSoz, person[kalitSoz]);
// }

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// console.time("for");
// for (let i = 0; i < meva.length; i++) {
//   console.log(meva[i]);
// }
// console.timeEnd("for");

// Homeworks
// 1) Reverse string => "Lorem" -> "meroL" (For, prompt)
// 2) Reverse number => 8658 -> 8568 (For, prompt) !NUMBER
// 3) toq yoki juft => 10 -> 0 juft, 1 toq, ..., 9 toq, 10juft
// 4) Tub sonmi => 3 -> tub, 4 -> murakkab, 9 -> murakkab
// 5?) Mukammal sonmi => 4 -> yoq, 6 -> ha, 9 -> yoq
// 6) prompt() => 198 => 1 + 9 + 8 => 18 => 1 + 8 => 9
// 7) prompt() => lorem ipsum dolor sit amet. => prompt() => m => 3, o =>3, r => 2, j => 0, case insensitive => A = a
// 8) prompt() => non => non => true, lorem => merol => false