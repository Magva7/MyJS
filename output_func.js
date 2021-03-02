(function(window) {

    var obj = {};

    obj.dreamOn = function () {
    console.log("I want to see the global scope! Let me out!");
    };

    // window.doer = obj;
    window.doer = obj;

})('window');

var c = {myname:"2", 3:"4"};
console.log(c.myname);
console.log(window.Date(time));

// (function (window) {
//
//     var b = {};
//     b.output1 = function (){
//         console.log("I want to see the global scope! Let me out!");
//     };
//     window.output2 = b;
//     // window.output2 = b.output1;
//     b.output1();
// })();
// // a();
// // window.output2();