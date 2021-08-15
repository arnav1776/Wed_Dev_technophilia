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
// var n = 0;

// while (n < 100) {
//     n += 1;
//     console.log(n);
// }

// for loop
// for (let n = 0; n < 100; n++) {
//     console.log(n);
// }

// Data types
var yourAge = 18;
let yourName = 'Bob';
let name = {first: 'Jane', last: 'Doe'};
let truth = false;
let groceries = ['apple', 'banana', 'oranges'];
let random
let nothing = null;

// Strings
let fruit = 'banana';
let morefruits = 'banana\napple';

console.log(morefruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));
console.log(fruit.split(','));

// Array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
let fruits1 = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[1]);

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits);
console.log(fruits.push('blackberries'), fruits);
fruits[fruits.length];
console.log(fruits[4]);
fruits.shift();
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'brocoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b) {return a-b}));
console.log(someNumbers.sort(function(a, b) {return b-a}));

let emptyArray = new Array(); 
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

// objects 

let student = {
    first: 'arnav',
    last: 'sharma', 
    age:20, 
    height: 170,
    studentInfo: function (){
        return this.first + '\n' + this.last;
    }
};
console.log(student.first);
console.log(student.last);
//student.first = '-';
console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());

// Conditionals
// && and
// || or
var age = 21;//= prompt('what is your age?');

if ( (age >= 18) && (age <= 35) ) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

// Switch statement

switch (6) {
    case 0:
        text = 'weekend';
        break;

    case 5:
        text = 'weekend';
        break;

    case 6:
        text = 'weekend';
        break;

    default:
        text = 'weekday';

}

console.log(text);








