// 1) შექმენით 20 წყვილი ცვლადი და შინახეთ მათ შიგნით true და false data types სხვადასხვა გზით და გამოიტანთ ეკრაზე მათი შედარება "და" და "ან" ლოგიკუ ოპერატორებით

let a1 = 5 > 3;
let b1 = 3 > 5;

let a2 = 10 >= 10;
let b2 = 10 < 5;

let a3 = 7 === 7;
let b3 = 7 !== 7;

let a4 = 20 <= 30;
let b4 = 30 <= 20;

let a5 = "apple" === "apple";
let b5 = "apple" !== "banana";

let a6 = 15 > 10 && 10 < 20;
let b6 = 15 < 10 || 10 > 20;

let a7 = 100 > 50;
let b7 = 50 >= 100;

let a8 = "test".length === 4;
let b8 = "test".length !== 5;

let a9 = 25 % 5 === 0;
let b9 = 25 % 4 === 0;

let a10 = 5 * 2 === 10;
let b10 = 5 + 5 !== 11;

let a11 = "abc" < "bcd";
let b11 = "xyz" > "uvw";

let a12 = 0 === 0;
let b12 = 1 !== 0;

let a13 = 10 / 2 === 5;
let b13 = 10 / 3 !== 3;

let a14 = 4 ** 2 === 16;
let b14 = 2 ** 3 === 8;

let a15 = 100 === 100;
let b15 = 99 !== 100;

let a16 = typeof "text" === "string";
let b16 = typeof 123 === "number";

let a17 = 42 > 40 && 42 < 50;
let b17 = 42 < 40 || 42 > 50;

let a18 = [1, 2, 3].length === 3;
let b18 = [1, 2, 3].length !== 4;

let a19 = 2 * 5 === 10;
let b19 = 2 * 5 !== 11;

let a20 = 6 - 1 === 5;
let b20 = 6 - 2 === 5;

console.log(a1 && b1, a1 || b1);
console.log(a2 && b2, a2 || b2);
console.log(a3 && b3, a3 || b3);
console.log(a4 && b4, a4 || b4);
console.log(a5 && b5, a5 || b5);
console.log(a6 && b6, a6 || b6);
console.log(a7 && b7, a7 || b7);
console.log(a8 && b8, a8 || b8);
console.log(a9 && b9, a9 || b9);
console.log(a10 && b10, a10 || b10);
console.log(a11 && b11, a11 || b11);
console.log(a12 && b12, a12 || b12);
console.log(a13 && b13, a13 || b13);
console.log(a14 && b14, a14 || b14);
console.log(a15 && b15, a15 || b15);
console.log(a16 && b16, a16 || b16);
console.log(a17 && b17, a17 || b17);
console.log(a18 && b18, a18 || b18);
console.log(a19 && b19, a19 || b19);
console.log(a20 && b20, a20 || b20);

// 2) შექმენით ათი წყვილი ცვლადი და და თითოს მიანიჭეთ "მოსწორო" და "მოარასწორო" მნიშვენლობა. შემდეგ ლოგიკური ოპერატორების გამოყენებით გამოიტანეთ შესაბამისი მნიშვნელობა

let l1 = true;
let w1 = false;

let l2 = 5;
let w2 = 0;

let l3 = "apple";
let w3 = "";

let l4 = [1, 2, 3];
let w4 = [];

let l5 = "hello";
let w5 = "";

let l6 = 10;
let w6 = -5;

let l7 = "yes";
let w7 = "no";

let l8 = 7;
let w8 = -3;

let l9 = "true";
let w9 = "false";

let l10 = "some text";
let w10 = "";

console.log(l1 && w1, l1 || w1);
console.log(l2 && w2, l2 || w2);
console.log(l3 && w3, l3 || w3);
console.log(l4 && w4, l4 || w4);
console.log(l5 && w5, l5 || w5);
console.log(l6 && w6, l6 || w6);
console.log(l7 && w7, l7 || w7);
console.log(l8 && w8, l8 || w8);
console.log(l9 && w9, l9 || w9);
console.log(l10 && w10, l10 || w10);



// 3) შექმენით ცვლადებიდა მიანიჭეთ true და false მნიშვნელობები სხვადასხვა გზით, ცვლადებშ შეინახეთ მაგალითები რომლებიც ან სწორია ან არასწორია (მაგ. 5 > 6 ანუ false) ამის შემდეგ გამოიყენეთ ლოგიკური ოპერატორი NOT (!) და შეაბრუნეთ შექმნილი ცვლადების მნიშვნელობები. 

let m1 = true;
let n1 = false;

let m2 = 5 > 3;
let n2 = 5 < 3;

let m3 = "hello" === "hello";
let n3 = "hello" !== "hello";

let m4 = 10 >= 5;
let n4 = 3 > 10;

let m5 = "apple" === "apple";
let n5 = "apple" !== "apple";

let m6 = 7 < 10;
let n6 = 7 > 10;

let m7 = [] == [];
let n7 = [] != [];

let m8 = "abc".length > 2;
let n8 = "abc".length < 2;

let m9 = 0 != 0;
let n9 = 0 != 1;

console.log(!m1, !n1);
console.log(!m2, !n2);
console.log(!m3, !n3);
console.log(!m4, !n4);
console.log(!m5, !n5);
console.log(!m6, !n6);
console.log(!m7, !n7);
console.log(!m8, !n8);
console.log(!m9, !n9);


