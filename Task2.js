
// Task 2. Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола (длина окружности по диаметру)

function diameterOfCircle(d) {
    const result = Math.PI * d;
    return result;
}

let functionResult = diameterOfCircle (3);
console.log(functionResult);