var myArray = [-2, 45, 0, 11, -9, 17, 10, 331, -100];  //изначальный массив, который нужно отсортировать по возрастанию
var i = 0;
var j = 0;
var min = 0;
var max = 0;

var currentIndex = 0;
//пробегаемся по всем элементам и ищем максимальное - если текущий элемент больше того, что у нас записано в max, то
// записываем в переменную max значение нашего текущего элемента
while (currentIndex < myArray.length){
    if (myArray[currentIndex] > max) {
        max = myArray[currentIndex];
        // currentIndex++;
    } else {
        currentIndex++;
    }
}

//то же самое - пробегаемся по массиву и ищем минимальный элемент
var currentIndex = 0;
while (currentIndex < myArray.length){
    if (myArray[currentIndex] < min) {
        min = myArray[currentIndex];
        // currentIndex++;
    } else {
        currentIndex++;
    }
}
// console.log(myArray.length);
// console.log('max = ' + max);
// console.log('min = ' + min);

var vedra =  Math.round(myArray.length / 2);  // количество ведер, округленное до ближайшего целого
console.log(vedra)