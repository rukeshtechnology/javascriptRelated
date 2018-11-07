/* 
1)  forEach() helper function
2)  map helper
3)  filter helper
4)  reduce helper
10) Template Strings
11) Rest and Spread operators
12) Classes
13) Generators
*/



/* 
1)  forEach() helper function
================================================================================================================
*/
let fruits = ['Apple', 'Orange', 'Pears', 'Grapes'];

//Old for loop
for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

//Anonymous function below is the iterator function
fruits.forEach(function(color) {
  console.log(color);
});

let numbers = [5,15,152,15];
let sum = 0;
//Using the iterator function inside
numbers.forEach(function(number) {
  sum = sum+number;
});
console.log(sum)

//Using the function declared outside
function adder(number){
  sum += number;
}
numbers.forEach(adder);
console.log(sum)

//Example
function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];
  
  /*
  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }*/
  //Using forEach
  posts.forEach(function(post){
    savePost(post);
  });
}

//Example
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image){
  areas.push(image.height * image.width);
});

areas.forEach(function(area){
  console.log(area);
});

/* 
2)  map helper
================================================================================================================
*/
//Example
var numbers = [1,2,3];
var doubledNumbers = [];

for(let i = 0; i < numbers.length; i++){
  doubledNumbers.push(numbers[i] * 2);
}

//Using map helper for above example. Note map helper also produce new array. In this case doubled array.
let doubled = numbers.map(function(number){
  return number * 2;
});

//Example
var cars = [
  {model: 'Buick', price: 'Cheap'},
  {model: 'Camaro', price: 'expensive'}
];

var prices = cars.map(function(car){
  return car.price
});
console.log(prices);

//Example
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function (image) {
  return image.height
});

console.log(heights);

//Example
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function (trip) {
  return trip.distance/trip.time;
});

console.log(speeds);

//Example  (TODO: Incomplete)
var paints = [
  {colors: 'red'},
  {colors: 'blue'},
  {colors: 'yellow'}
];

function pluck(paints, property){
  let colors = paints.map(function (paint){
    return paint.property;
  }) ;
}


/* 
3)  filter helper (Filter helper also produces new array with filterd list)
================================================================================================================
*/
//Example
var products = [
  {name:'cucumber', type: 'vegetable', quantity: 0, price: 1},
  {name:'banana', type: 'fruit', quantity: 10, price: 15},
  {name:'celery', type: 'vegetable',  quantity: 30, price: 9},
  {name:'orange', type: 'fruit', quantity: 3, price: 5}
];

//Traditional for loop example vs filter helper
var filteredProducts = [];

for (var i = 0; i < products.length; i++){
  if(products[i].type == 'fruit'){
    filteredProducts.push(products[i]);
  }
}

// Type is 'vegetable' quantity is greater than 0, price is less than 10
products.filter(function (product) {
  return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});

//Example
var post = {id: 4, title: 'New Post'};
var comments = [
  {postId: 4, content: 'awesome post'},
  {postId: 1, content: 'it was ok'},
  {postId: 2, content: 'neat'}
];

function commentsForPost(post, comments){
  return comments.filter(function(comment){
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);

//output:  [{"postId":4,"content":"awesome post"}]

/* 
4)  reduce helper
================================================================================================================
*/
//Example for loop old way and new way
var numbers = [10,20,30];
var sum = 0;

for(let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}

numbers.reduce(function (sum, number){
  return sum + number;
}, 0);


/* 
10) Template Strings
================================================================================================================
*/
//Example Old way and template String way
function getMessage(){
  const year = new Date().getFullYear();
  return "The year is " + year;
}

function getMessage(){
  const year = new Date().getFullYear();
  return `The year is ${year}`;
}


getMessage();

/* 
11) Rest and Spread operators
================================================================================================================
*/
function addNumbers(numbers){
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0)
};

addNumbers([1,2,3,4,5,6]);

//Example of rest operator, take all arguments and convert into single array
function addNumbersTwo(...numbers){
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0)
};
addNumbersTwo(1,2,3,4,5,6,7);

//Example Spread operator : goal is to create one single array from two arrays
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

//This is one way of doing that.
defaultColors.concat(userFavoriteColors);

//using the spread operator. This does same as concat. Join them together into one.
[...defaultColors, ...userFavoriteColors, ...fallColors];
['blue', ...defaultColors, ...userFavoriteColors, ...fallColors];

//Example
function validateShoppingList(...items){
  if(items.indexOf('milk') < 0){

  }
  return items;
}

validateShoppingList('oranges', 'bread');

//Example
const mathLibrary = {
  calculateProduct(...rest){
    console.log('Please use multiply method instead');
    return this.multiply(...rest);
  },

  multiply(a, b){
    return a * b;
  }
};

mathLibrary.calculateProduct(5,5);

/* 
12) Classes || Prototype Inheritance
================================================================================================================
*/
//Example Using prototype. Kind of vague. Five engineers have five diffent understanding.
function Car(options){
  this.title = options.title;
}

//Adding method to the class Car
Car.prototype.drive = function(){
  return 'vroom';
}

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

/*
const car = new Car({title: 'Focus'});
const toyota - new T
car.drive();*/

//Example Refactor above in ES6 way
class Car {
	constructor({ title }){
    this.title = title;
  }

  driver(){
    return 'vroom';
  }
}

class Toyota extends Car {
constructor(options){
  super(options);
  this.color = options.color;
}

  honk(){
    return 'beep';
  }
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
toyota;
console.log(toyota);

/* 
13) Generators
================================================================================================================
*/
//Example for of loop
const colors = ['red', 'green', 'blue'];
for (let color of colors){
  console.log(color);
}

const numbers = [1,2,3,4];
let total = 0;
for (let number of numbers){
  total += number;
}

/* 
  Generator are function that can be entered and exited multiple TimeRanges. 
*/
//Example
function* numbers(){
  yield;
}

const gen = numbers();
gen.next();
gen.next();
/* out put 
{"done":false}
{"done":true} */

//Example
function* shopping(){
  //stuff on the sidewalk  
  
  // walking down the side walk
  
  //Go to the store with cash
  const stuffFromStore = yield 'cash';
  
  const cleanClothes = yield 'laundry';
  
  //walking back home  
  return stuffFromStore;
}

//stuff in the store
const gen = shopping();  //Note no code inside function is called. You have to call next().
gen.next();		//leaving out house
gen.next('rukesh');
gen.next();

/* output
{"value":"cash","done":false}
{"value":"laundry","done":false}
{"value":"rukesh","done":true} */

//Example
function* colors(){
  yield 'red',
  yield 'blue',
  yield 'green'
}

const gen = colors();
gen.next();
gen.next();
gen.next();

const myColors = [];
for(let color of colors()){
  myColors.push(color);
}
myColors;

/* output
{"value":"red","done":false}
{"value":"blue","done":false}
{"value":"green","done":false}
{"value":"green","done":false}
3
["red","blue","green"] */

//Example
//I want to iterate over only persons
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Rukesh',
  manager: 'Tamrakar',
  engineer: 'Dave',
  testingTeam: testingTeam
};

function* teamIterator(team){
  yield team.lead;
  yield team.manager;
 	yield team.engineer;
  const testingTeamGenerator = testingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}

function* testingTeamIterator(team){
  yield team.lead;
  yield team.tester;
}

const names = [];
for(let name of teamIterator(engineeringTeam)){
  names.push(name);
}

names;

/* output
5
["Rukesh","Tamrakar","Dave","Amanda","Bill"] */