/**В программе объявлена переменная list, в которую записан массив из числовых значений.  Рассчитайте произведение
 *  максимального и минимального элементов массива. Результат выведите в консоль.
 Пример значений переменных:
 list = [2, 45, 3, 23, 6]
 Пример результата:
 90**/

let list = [2, 45, 3, 23, 6];
let max_elem = list[0];  //пока записываем сюда первый элемент массива
let min_elem = list[0];
let current_elem = 0;

for(let i = 1; i < list.length;i++){ //пробегаемся по всем элементам массива начиная с 1, т.к. мы уже записали 0
    current_elem = list[i];
    if(current_elem > max_elem){ //если текущий элемент больше максимального
        max_elem = current_elem; //тогда записываем его в максимальный
    }

    if(current_elem < min_elem){ //если текущий элемент меньше минимального
        min_elem = current_elem; //тогда записываем его в минимальный
    }
}

let result = min_elem * max_elem;  //перемножаем элементы
console.log(result);