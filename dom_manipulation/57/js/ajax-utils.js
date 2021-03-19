(function (global) { /**Мы используем IIFI, т.е. чтобы функция запускалась сразу**/

// Set up a namespace for our utility - пространство имен для моей утилиты, пока это пустой объект
var ajaxUtils = {};


// Returns an HTTP request object - функция возвращает, какой тип HTTP запроса мы можем использовать, идет от более
// нового к более старому, т.е. если тот тип HTTP запроса, который используют современные браузеры, доступен, то
// функция вернет через return его, если он недоступен, то будет проверять дальше и вернет следующий, если и он
// недоступен, то следующий и т.д.
function getRequestObject() {
  if (global.XMLHttpRequest) { /**Проверяет, доступен ли нам этот тип XMLHttpRequest, который используется в новых
   браузерах,если он не доступен, то мы пойдем ниже по коду, где else**/
    return (new XMLHttpRequest()); /**Если все хорошо, то мы создаем новый объект этого HTTP запроса XMLHttpRequest**/
  } 
  else if (global.ActiveXObject) { /**Если недоступен тип документа, который выше, то будем использовать этот,
   который ActiveXObject, он для старых браузеров, в настоящее время это уже не обязательно и можно этот кусок кода
   с else if вообще убрать**/
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP")); /**Если и тот, что выше недоступен, то будем использовать этот,
       который вообще для мега древних браузеров, то же самое, в настоящее время такие древние браузеры уже не
       юзаются и этот кусок кода можно убрать**/
  } 
  else {
    global.alert("Ajax is not supported!"); /**Если и тот, что выше недоступен, то выводим сообщение, что Ajax не
       поддерживается и досвидос, возвращаем null**/
    return(null); 
  }
}


/** Makes an Ajax GET request to 'requestUrl' - это наша основная функция, которая прикреплена к ajaxUtils, в этой
 *  функции мы собираемся отправить запрос GET на сервер**/
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler) {/**Это параметры, которые ожидает функция, т.е. которые мы внутрь нее
   передаем, первый параметр это URL адрес, чтобы нам знать, куда идти, второй параметр это функция обработчика
   ответа, которая будет обрабатывать то, что вернет сервер**/
   var request = getRequestObject(); /**В эту переменную мы сохраняем то, что получили из функции выше, где проверяли,
   какой версии HTTP мы можем получить объект, в нашем случае это будет наиболее новая версия, т.е новый объект XMLHttpRequest**/
    request.onreadystatechange = /**Это разные этапы сетевой связи между браузером и сервером**/
      function() { 
        handleResponse(request, responseHandler); /**В эту функцию мы передаем запрос и обработчик ответа, поэтому
         когда сервер возращается с ответом, эта функция будет каждый раз запускаться, когда происходит изменение
         состояния связи, включая последний раз, когда все отработает и мы получим последний ответ**/
      };
    request.open("GET", requestUrl, true); /**Это параметры, которые ожидает функция, т.е. которые мы внутрь нее
       передаем, понятно, что первый параметр это метод, который мы используем, в данном случае это GET, второй
       параметр это URL адрес, а третий это то, что у нас запрос будет асинхронный, тут всегда будет true, если тут
       будет false, значит запрос синхронный, тогда браузер замерзнет и будет ждать ответа, прежде, чем идти дальше
       и делать что-то еще, а мы хотим, чтобы у нас в это время браузер продолжал работать, поэтому у нас
       асинхронный запрос**/
    request.send(null); // for POST only /**здесь мы просто отправляем наш запрос, т.е. все, что выше, это настройка
      // параметров, как запрос будет выглядеть, а отправляем мы его в этой строке. null мы передаем, т.к. если бы
      // это был почтовый запрос, то наши параметры не были бы частью URL адреса запроса**/
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {
    responseHandler(request);
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);

