let a = Number(prompt('Введіть a'));
let b = Number(prompt('Введіть b'));
let c = Number(prompt('Введіть c'));

function quadraticEquation (a, b, c) {
    let d = b**2 - 4*a*c;
    let x1,x2;
    if (d>0) {
        x1 =(-b - Math.sqrt(d))/(2*a);
        x2 =(-b + Math.sqrt(d))/(2*a);
        return 'x1 = '+ x1 +'\n x2 = '+ x2;
    } else if (d === 0) {
        x1 = -b/2*a;
        return 'x1 = '+ x1 +'\n x2 = '+ x2;

    } else if (d<0){
        return console.log('Рівняння не має певного рішення');
    }
}
let functionResult = quadraticEquation( a, b, c);
console.log(functionResult);