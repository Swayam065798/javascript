// function add(a,b){
//     return a + b;
// }

// var add = function(a,b){
//     return a + b;
// }

// arrow function
var add = (a,b) => {return a + b};

// short-hand function
var add = (a,b) => a+b;

var result = add(12,3);
console.log(result);

// this function will run as u write
(function(a,b){
 console.log("Hi");
})();

// Callbacks are used whaen an event is haapening at the completion of another event

function callback(){
    console.log("adding is successfully completed");
}

const add1 = function(a,b,callback) {
    var result = a+b;
    console.log('result:'+result)
    callback();
}

add1(20,20,callback);


const add2 = function(a,b,callback1) {
    var result = a+b;
    console.log('result:'+result)
    callback1();
}

add2(20,20,function(){
    console.log("addition completed1")
});
