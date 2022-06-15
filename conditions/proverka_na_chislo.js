/**В программе объявлена переменная price, в которой хранится строка со значением цены. Переведите значение
 *  переменной  в число (parseInt) и в зависимости от полученного значения выполните следующее действие:

 если записанное значение оказалось не числом, выведите в консоль сообщение Не число;
 если число равно 0 или является отрицательным, выведите в консоль сообщение Число не корректное;
 в ином случае выведите в консоль значение числа.

 Пример значений переменных:
 price = "12 рублей"

 Пример результата:
 12**/
let price = "12 рублей";
let int_price = parseInt(price);
let result = '';

if (Number.isInteger(int_price) === false)  {  //проверяем, что проверка на число = false
    result = 'Не число';
} else if (int_price <= 0) {
    result = 'Число не корректное'
} else {
    result = int_price
}

console.log(result);