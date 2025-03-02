// join arrays using rest operator

const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];

const fruitsAndBerries =[...fruits,...berries];
console.log(fruitsAndBerries);

// join objects using rest operator

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

// Add new members to arrays without using the push() method

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// You can copy an array into a completely separate array, also using the spread operator, like this:
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2);