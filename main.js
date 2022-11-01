let quiz1 = 36;

let lab1 = [5, 5, 0, 5, 5, 10, 10];
let sum1 = 0;
for (let i = 0; i < lab1.length; i++) {
sum1 += lab1[i];
}

let lab2 = [5, 5, 5, 5, 5, 5, 10];
let sum2 = 0;
for (let i = 0; i < lab2.length; i++) {
sum2 += lab2[i];
}

let lab3 = [5, 10, 10, 15, 1];
let sum3 = 0;
for (let i = 0; i < lab3.length; i++) {
if (lab3[i] != 1) {
sum3 += lab3[i];
}else{
sum3 = sum3 / 2
}
}

let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 5];
let sum4_5 = 0;
for (let i = 0; i < lab4_5.length; i++) {
sum4_5 += lab4_5[i];
}

let lab6 = [0, 0, 0, 0, 0, 0];
let sum6 = 0;
for (let i = 0; i < lab6.length; i++) {
sum6 += lab6[i];
}

let lab8 = [5, 10, 10, 10, 5];
let sum8 = 0;
for (let i = 0; i < lab8.length; i++) {
sum8 += lab8[i];
}

function get_sum(a, b, c, d, e, f) {
let sum = a + b + c + d + e + f;
return sum;
}
let sums = get_sum(sum1, sum2, sum3, sum4_5, sum6, sum8);

function main(x, y) {
obj = x / 7 * 0.6 + y * 0.4;
return obj;
}

let total_score = main(sums, quiz1);

const results = {
lab1: [...lab1], 
lab2: [...lab2], 
lab3: [...lab3], 
lab4_5: [...lab4_5], 
lab6: [...lab6], 
lab8: [...lab8],
quiz1: quiz1, 
sums: sums, 
total_score: total_score, 
}

console.log(results);