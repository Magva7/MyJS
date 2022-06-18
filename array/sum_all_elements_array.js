/**В программе объявлена переменная list, которая содержит массив чисел.
 *  Используя цикл, посчитайте сумму чисел и выведите в консоль.
 Пример значений переменных:
 list = [23, 13, 3]
 Пример результата:
 39**/

let  list = [23, 13, 3];
let sum = 0;

for(let i = 0; i < list.length; i++){ //пробегаемся по всем элементам массива
    sum += list[i]; //прибавляем к сумме текущий элемент
}

console.log(sum);