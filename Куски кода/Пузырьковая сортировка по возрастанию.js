var myArray = [-2, 45, 0, 11, -9];  //изначальный массив, который нужно отсортировать по возрастанию
var i = myArray.length - 1;  // счетчик сколько раз будем менять элементы местами

while (i > 0) {
    var j = 0; // индекс текущего элемента
    var temp; // временное хранилище для элементов при перестановке
    while (j < myArray.length) { //// идем по всем элементам
        if (myArray[j] > myArray[j + 1]) { // если текущий элемент больше следующего
            temp = myArray[j]; // сохраняем текущий во времянке
            myArray[j] = myArray[j+1]; // переставляем элементы местами -
            myArray[j+1] = temp;
        } else { // если нет
            j++; // идем к следующему элементу
        }
    }
    i--;
}

console.log(myArray);
// console.log(myArray.length)
