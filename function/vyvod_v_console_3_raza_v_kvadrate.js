/**В программе объявлена переменная num, в которой записано числовое значение. Используя цикл, возведите значение
 *  переменной в квадрат три раза. Каждый результат конкатенируйте через пробел и выведите в консоль.

 Пример значений переменных:
 num = 2

 Пример результата:
 "4 16 256"**/

let num = 2;
let result = '';  //итоговый вывод

for(let i = 2; i >= 0; i--){  //обратный отчет - возводим в квадрат 3 раза, поэтому начальное значение i=2
    num = num * num;  //возводим в квадрат
    if(i === 0) { //последняя итерация
        result += num; //добавляем в итоговый вывод только нашу текущую переменную, а пробел в конце не добавляем
    } else {
        result += num + ' '; //в остальных итерациях добавляем каждый раз в итоговый вывод нашу текущую переменную в
        // квадрате и пробел после нее
    }
}

console.log(result);