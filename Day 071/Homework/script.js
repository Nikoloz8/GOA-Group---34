// 2) დაასრულეთ საკლასო დავალებები და ახსენით კომენტარებით - done

// 3) თითეულ ნასწავლ მეთოდზე გააკეთეთ 10-10 მაგალითი

console.log(Math.abs(-5));
console.log(Math.abs(0));
console.log(Math.abs(10));
console.log(Math.abs(-123));
console.log(Math.abs(3.14));
console.log(Math.abs(-3.14));
console.log(Math.abs(-Infinity));
console.log(Math.abs(Infinity));
console.log(Math.abs(-7.77));
console.log(Math.abs(9));

console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));
console.log(Math.ceil(-4.1));
console.log(Math.ceil(-4.9));
console.log(Math.ceil(0));
console.log(Math.ceil(0.1));
console.log(Math.ceil(3.14));
console.log(Math.ceil(10.99));
console.log(Math.ceil(-0.5));
console.log(Math.ceil(100.1));

console.log(Math.floor(4.1));
console.log(Math.floor(4.9));
console.log(Math.floor(-4.1));
console.log(Math.floor(-4.9));
console.log(Math.floor(0));
console.log(Math.floor(0.9));
console.log(Math.floor(3.14));
console.log(Math.floor(10.99));
console.log(Math.floor(-0.5));
console.log(Math.floor(100.9));

console.log(Math.round(4.5));
console.log(Math.round(4.4));
console.log(Math.round(-4.5));
console.log(Math.round(-4.6));
console.log(Math.round(0));
console.log(Math.round(0.1));
console.log(Math.round(3.14));
console.log(Math.round(10.99));
console.log(Math.round(-0.5));
console.log(Math.round(100.5));

console.log(Math.max(1, 2, 3));
console.log(Math.max(-1, -2, -3));
console.log(Math.max(5, 10, 15));
console.log(Math.max(0, -1, 4));
console.log(Math.max(3.1, 2.9));
console.log(Math.max(-10, 100));
console.log(Math.max(50, 50));
console.log(Math.max(100, 101));
console.log(Math.max(0, 0, 0));
console.log(Math.max(-Infinity, 1));

console.log(Math.min(1, 2, 3));
console.log(Math.min(-1, -2, -3));
console.log(Math.min(5, 10, 15));
console.log(Math.min(0, -1, 4));
console.log(Math.min(3.1, 2.9));
console.log(Math.min(-10, 100));
console.log(Math.min(50, 50));
console.log(Math.min(100, 101));
console.log(Math.min(0, 0, 0));
console.log(Math.min(-Infinity, 1));

console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));
console.log(Math.pow(10, 0));
console.log(Math.pow(3, 3));
console.log(Math.pow(7, 2));
console.log(Math.pow(-2, 3));
console.log(Math.pow(-2, 2));
console.log(Math.pow(0, 5));
console.log(Math.pow(1, 100));
console.log(Math.pow(2, -2));

console.log(Math.sqrt(4));
console.log(Math.sqrt(9));
console.log(Math.sqrt(16));
console.log(Math.sqrt(1));
console.log(Math.sqrt(0));
console.log(Math.sqrt(25));
console.log(Math.sqrt(100));
console.log(Math.sqrt(2));
console.log(Math.sqrt(0.25));
console.log(Math.sqrt(-1));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 50) + 1);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 20);
console.log(Math.floor(Math.random() * 3));

console.log(Math.trunc(4.9));
console.log(Math.trunc(4.1));
console.log(Math.trunc(-4.9));
console.log(Math.trunc(-4.1));
console.log(Math.trunc(0));
console.log(Math.trunc(3.14));
console.log(Math.trunc(-0.5));
console.log(Math.trunc(100.99));
console.log(Math.trunc(0.999));
console.log(Math.trunc(-0.999));


// 4) Write a function that generates a random number between 1 and 100 using Math.random(). Ensure the number is an integer.

function random(){
    return Math.floor(Math.random() * 100) 
}

console.log(random())

// 5) Write a function that calculates the area of a circle given the radius using the formula πr², and use Math.PI for π.

function circleArea(radius){
    return Math.PI * Math.pow(radius, 2)
}

console.log(circleArea(2))