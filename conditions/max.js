/**В программе объявлены три переменные a, b и c, в которые записаны числовые значения. Определите максимальное
 *  значение и выведите его в консоль, но помните: методом max пользоваться нельзя.

 Пример значений переменных:
 a = 32
 b = 5
 c = 14

 Пример результата:
 32**/

let a = 5;
let b = 6;
let c = 6;
let max = 0;

if (a > b && a >= c) {
    max = a;
} else if (b > a && b >= c) {
    max = b;
} else {
    max = c;
}

console.log(max);