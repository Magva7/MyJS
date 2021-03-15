// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello () { /**Функция, которая делает следующее**/
  var name =
   document.getElementById("name").value; /**Записывает в переменную name то, что сейчас внутри
 элемента с id="name", т.е. то, что мы ввели в поле ввода, т.е. как бы значение (value) у элемента**/
   var message = "<h2>Hello " + name + "!</h2>"; /**Сохраняем в переменную тег, потом Hello + то, что ввели в поле +!**/

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message; /**Записываем в содержимое элемента, у которого id="content", записываем в него то, что у
 нас хранится в переменной message**/

  if (name === "student") { /**Добавляем проверку - если в переменной name у нас student (это то, что мы ввели в
   поле ввода**/
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!"; /**То мы в содержимое элемента с id="title" добавляем & Lovin' it! Здесь мы id
     элемента вводим через #, т.к. мы ищем элемент по селектору, а не по id, т.е. указываем, как в css**/
    document
        .querySelector("h1")
        .textContent = title; /**А теперь мы в содержимое этого же элемента с тегом h1 записываем то, что у нас
     храниться в переменной title, в которую мы выше добавили текст. Здесь у нас поиск по селектору, сделали так,
     просто, чтобы показать, а записывать в этот же элемент еще раз надо, т.к. в строке сверху содержимое в элемент
     не записалось, т.к. это типа ссылочная переменная**/
  }
}