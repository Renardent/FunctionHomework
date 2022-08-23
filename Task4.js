// Task 4. Написати функцію, яка приймає два числа (діапазон) і виводити на консоль всі числа з цього діапазону, які діляться на 5.


let a = Number(prompt('Введіть перше число'));
let b = Number(prompt('Введіть друге число'));

function divToFive (a, b) {
    while (a++<b) {
     if (a%5) {
        continue;
     }
     console.log(a)
    }
}

let functionResult = divToFive(a, b);
console.log(functionResult);