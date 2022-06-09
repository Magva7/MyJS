/**В программе объявлена переменная word со строковым значением. Переверните строку, используя цикл, и выведите
 *  результат в консоль.
 Пример значений переменных:
 word = "мир"
 Пример результата:
 "рим"**/

let word = 'мир';
let mirror_word = ''; //развернутое слово

/**Вариант через while**/
// let i = word.length-1; //длина слова минус 1 = индекс последнего элемента
//
// while (i >= 0){
//     mirror_word += word[i];  //каждую итеграцию добавляем в развернутое слово буквы с конца нашего слова
//     i--; // каждую итерацию уменьшаем индекс на 1
// }
//
// console.log(mirror_word);

/**Вариант через for**/
 //длина слова минус 1 = индекс последнего элемента

for (let i = word.length-1; i >= 0; i--){
    mirror_word += word[i];  //каждую итеграцию добавляем в развернутое слово буквы с конца нашего слова
}

console.log(mirror_word);