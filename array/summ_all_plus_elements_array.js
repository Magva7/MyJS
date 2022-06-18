/**В программе объявлена переменная list, в которую записан массив из положительных и отрицательных числовых
 *  значений.  Используя цикл, посчитайте сумму положительных чисел и выведите результат в консоль.
 Пример значений переменных:
 list = [12, -4, 5, 32, 2],
 Пример результата:
 51**/
let list = [12, -4, 5, 32, 2];

let sum = 0;

for(let i = 0; i < list.length; i++){ //пробегаемся по всем элементам массива
    if(list[i] >= 0) { //если текущий элемент положительный
        sum += list[i]; //прибавляем к сумме текущий элемент
    }

}

console.log(sum);