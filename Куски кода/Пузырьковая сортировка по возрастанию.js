var myArray = [-2, 45, 0, 11, -9, 17, 10, 331, -100];  //изначальный массив, который нужно отсортировать по возрастанию
var countZamen = 0;  // счетчик замен - сколько раз поменяли элементы местами

while (countZamen < (myArray.length - 1)) { // до тех пор, пока у нас счетчик замен меньше длины массива - 1
    var currentIndex = 0; // индекс текущего элемента
    var temp; // временное хранилище для элементов при перестановке
    while (currentIndex < myArray.length) { // пробегаемся по всем элементам массива
        if (myArray[currentIndex] > myArray[currentIndex + 1]) { // если текущий элемент больше следующего, который
            // за ним
            temp = myArray[currentIndex]; // сохраняем текущий во времянке
            myArray[currentIndex] = myArray[currentIndex+1]; // переставляем элементы местами -
            myArray[currentIndex + 1] = temp;
        } else { // если нет
            currentIndex++; // идем к следующему элементу
        }
    }
    countZamen++;
}

console.log(myArray); //выводим отсортированный массив
