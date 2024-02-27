// Task 1: Create a variable via a ternary operator that assigns a string based on an expression
const expression = true;
const result = expression ? "String if true" : "String if false";
console.log(result);

// Task 2: Create an object and loop through its properties, console logging each property's value
const myObject = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
};

for (let key in myObject) {
    console.log(myObject[key]);
}

// Task 3: Create an array of numbers. Using the map function, create a second array of those numbers squared
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);
