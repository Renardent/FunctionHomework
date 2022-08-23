// Task 3. Написати функцію, яка приймає в якості аргумента висоту циліндра та діаметр основи і повертає об'єм циліндра.

function volumeOfCylinder(h, d) {
    const result = h * Math.PI * d**2/2;
    return result;
}

let functionResult = volumeOfCylinder (2, 2);
console.log(functionResult);