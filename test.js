var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"
// using either the helloSpeaker's or byeSpeaker's 'speak' method.
// See Lecture 50, part 1
for (var i = 0;i<names.length;i++) {
    var currentElement = names[i]; /*Текущий элемент массива*/
    // console.log(currentElement);
    var firstLetterNoRegistr = currentElement.charAt(0); /**Первая буква в текущем элементе, пока как есть, регистр
     не трогаем**/
    var firstLetter = firstLetterNoRegistr.toLowerCase(); /**Первая буква в текущем элементе, в нижнем регистре**/
    console.log(firstLetter);
}