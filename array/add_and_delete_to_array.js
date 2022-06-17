/**В программе объявлена переменная list, представляющая массив значений. Используя методы массивов, выполните
 *  следующие действия:
 добавьте в начало массива новый элемент со значением Яблоко;
 удалите последний элемент массива;
 добавьте в конец массива новый элемент со значением Клубника.
 После выполнения всех перечисленных действий выведите значение переменной list в консоль.
 Пример значений переменных:
 list = ["Груша", "Яблоко"]
 Пример результата:
 ["Яблоко", "Груша", "Клубника"]**/

let list =[];
list.unshift('Яблоко'); // добавляем в начало массива новый элемент со значением Яблоко;
list.pop(); //удаляем последний элемент массива
list.push('Клубника');//  добавляем в конец массива новый элемент со значением Клубника
console.log(list);