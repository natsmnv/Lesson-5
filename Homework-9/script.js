// Написати цикли, які зможуть:

// +-Вивести на сторінку в один рядок через кому числа від 10 до 20.
// +Вивести квадрати чисел від 10 до 20.
// +Вивести таблицю множення на 7.
// +Знайти суму всіх цілих чисел від 1 до 15.
// +Знайти добуток усіх цілих чисел від 15 до 35.
// +Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// +Вивести суму лише парних чисел в діапазоні від 30 до 80.
// +Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// +-Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// +-Визначити кількість його парних дільників.
// +-Знайти суму його парних дільників.
// +Надрукувати повну таблицю множення від 1 до 10.

console.log(`Numbers from 10 to 20: `);
for (let i = 10; i <= 20; i++) {
    console.log(`${i}, `);
}

console.log(`\nNumber squares from 10 to 20: `);
for (let i = 10; i <= 20; i++) {
    console.log(`${i}^2 = ${i * i}`);
}

console.log(`\nMultiplication table by 7: `);
for (let i = 1; i <= 10; i++) {
    let num = 7;
    console.log(`${num} * ${i} = ${num * i}`);
}

console.log(`\nSum of numbers from 1 to 15: `);
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);

console.log(`\nMultiply of numbers from 15 to 35: `);
let mult = 1;
for (let i = 15; i <= 35; i++) {
    mult *= i;
}
console.log(mult);

console.log(`\nAverage of numbers from 1 to 500: `);
let aver = 0;
let sum1 = 0;
for (let i = 1; i <= 500; i++) {
    sum1 += i;
    aver++;
}
console.log(sum1 / aver);

console.log(`\nSum of double numbers from 30 to 80: `);
let sum2 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}
console.log(sum2);

console.log(`\nNumbers from 100 to 200 that divide by 3: `);
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

console.log(`\nNatural number, divides of this number, quantity of divides and sum of divides: `);
let num1 = Number(prompt(`Enter the number: `));
while (!Number.isInteger(num1)) {
    num1 = Number(prompt(`Enter the number: `));
}
console.log(`The number is ${num1}`);
let quan = 0;
let sum3 = 0;
for (let i = 0; i <= num1; i++) {
    if (num1 % i === 0) {
        console.log(`Divider: ${i}`);
        quan++;
        sum3 += i;
    }
}
console.log(`Number of dividers: ${quan}`);
console.log(`Sum of dividers: ${sum3}`);

console.log(`\nMultiplication table from 1 to 10: `);
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}