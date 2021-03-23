// Event handling
document.addEventListener("DOMContentLoaded", /**Прослушивание событий, когда загрузится вся страница**/
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button") /**Ищем по селектору нашу кнопку**/
      .addEventListener("click", function () {/**прикрепляем к ней прослушивание события клик, когда произойдет -
       запускается функция**/

        // Call server to get the name
        $ajaxUtils /**Обращаемся к серверу для получения инфы  из name.txt**/
          .sendGetRequest("data/name.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);





