/**В программе объявлена переменная obj, содержащая объект с подобным набором значений:
 {
        "Яблоко": "фрукт",
        "Арбуз": "ягода",
        "Помидор": "овощ",
        "Огурец": "овощ",
        "Вишня": "ягода"
}
 Напишите скрипт, который формирует новый объект со значениями и их количеством. Выведите новый объект в консоль.
 Пример результата:
 {
    "фрукт": 1,
    "ягода": 2,
    "овощ": 2
}**/

let obj =  {
    "Яблоко": "фрукт",
    "Арбуз": "ягода",
    "Помидор": "овощ",
    "Огурец": "овощ",
    "Вишня": "ягода"
};

let new_obj = {};//

/**Значение в изначальном объекте = ключ в новом объекте, а значение в новом объекте = тому, сколько раз слово повторяется**/
let current_key = ''; //переменная, где будет храниться имя текущего ключа
let current_value = ''; //переменная, где будет храниться значение текущего ключа, когда будем пробегаться

for (let i in obj) {//**Пробегаемся по всем ключам изначального объекта
    current_key = i;  // текущий ключ
    current_value = obj[i]; // значение текущего ключа

    if (!new_obj[current_value]){ // проверка - если в новом объекте ключа с таким именем нет
        new_obj[current_value] = 1; //то создаем ключ и в значение ключа записываем 1
    } else { // если уже есть ключ с таким именем
        new_obj[current_value] += 1; //тогда добавляем к значению этого ключа 1
    }
}

console.log(new_obj);