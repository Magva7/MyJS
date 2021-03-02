// (function(window) {
//
//     var obj = {};
//
//
//     obj.dreamOn = function () {
//     console.log("I want to see the global scope! Let me out!");
//     };
//
//     // window.doer = obj;
//     window.doer = obj;
//
// })('window');
//
// var c = {myname:"2", 3:"4"};
// console.log(c.myname);
// console.log(window.Date(time));

(function (window) {

    /*Объявляем объект b*/
    var b = {};

    /*У объекта b в свойство property1 записываем функцию, которая будет выводить сообщение в консоль*/
    b.property1 = function (){
        console.log("I want to see the global scope! Let me out!");
    };

    /*У объекта window в свойство с записываем сам объект b, чтобы потом к нему снаружи можно было обращаться, но
     могли бы это свойство у window как угодно назвать, например window.b = b, и потом вызывать b.property1(), тоже
      бы работало, т.е. когда мы пишем с.property1(), то вызываем в глобальной области видимости, т.е. как бы
       пишем window.с.property1(), т.е. вызывается то, что у window записано в свойстве c и дальше в свойстве property1*/
    window.с = b;

})(window);

с.property1();