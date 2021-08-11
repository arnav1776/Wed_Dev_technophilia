console.log('hello');

//alert('Hello,this is Arnav');

//Inline Comment

// Variables
var b = 'smoothie';
console.log(b);

var num = 45;
console.log(num);

//var age = prompt('What is your age?');
//document.getElementById('someText').innerHTML = age;

// Numbers is Js
var num1 = 10;
//console.log(5 * 10);
num1 = num1 + 1;
num1++;
//decrement
num1--;
console.log(num1);

//divide,multiply *, remainder %
console.log(num1 % 5);
console.log(num1 / 5);

//increment decrement by any number
num1 += 10;
console.log(num1);

/* Functions
1. create a function
2. call a function
*/
function fun() {
    console.log('this is a function');
}
fun();

function greeting(yourName) {
    var result = 'Hello ' + yourName; // String Concatenation
    console.log(result);
}

//var Name = prompt('What is your name?');
//greeting(Name);

// arguments

function sumNum(a, b) {
    var result = a + b;
    console.log(result);
}
sumNum(3, 5);
//sumNum('Hello ' + 'arnav ');

// While Loops
var n = 0;

while (n < 100) {
    n += 1;
    console.log(n);
}

// for loop
for (let n = 0; n < 100; n++) {
    console.log(n);
}



