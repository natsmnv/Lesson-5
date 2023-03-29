console.log(`Numbers from 20 to 30 with step 0.5: `);
let str = '';
for (let i = 20; i <= 30; i += 0.5) {
    str += i + ' ';
}
console.log(str);


console.log(`\nCalculation hryvna-dollar: `);
let dol = 27;
for (let i = 10; i <= 100; i += 10) {
    console.log(`${i} dollars = ${i * dol} hryvnas`);
}


console.log(`\nAll numbers from 1 to 100, which square less than N`);
let num = Number(prompt(`Enter the number: `));
let str1 = '';
for (let i = 1; i <= 100; i++) {
    if ((i * i) < num) {
        str1 += i + ' ';
    }
}
console.log(str1);


console.log(`\nIs number simple?`);
let num1 = Number(prompt(`Enter a number: `));
let simple = false;
if (num1 === 1 || num1 === 2) {
    simple = true;
} else {
    for (let i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            simple = false;
            break;
        } else {
            simple = true;
        }
    }
}
console.log(`${simple 
    ? `${num1} is a simple number` 
    : `${num1} is not a simple number`}`);

    
console.log(`\nIs number three to the power of another number?`);
let num2 = Number(prompt(`Enter a number: `));
let check = false;
if (num2 === 3) {
    check = true;
} else {
    for (let i = 1; i <= num2; i++) {
        if (num2 % 3 === 0 && Math.sqrt(num2) % 3 === 0) {
            check = true;
        } else {
            check = false;
        }
    }
}
console.log(`${check 
    ? `Yes, you can get number ${num2} raising the number 3 to the power` 
    : `No, you can not get number ${num2} raising the number 3 to the power`}`);