// function add(a,b){
//     return a + b;
// }

// var add = function(a,b){
//     return a + b;
// }


var add = (a,b) => {return a + b;}
var result = add(12,3);
console.log(result);

(function(a,b){
 console.log("Hi");
})();

// Callbacks are used whaen an event is haapening at the completion of another event

function callback(){
    console.log("adding is successfully completed");
}

const add = function(a,b,callback) {
    var result = a+b;
    
}