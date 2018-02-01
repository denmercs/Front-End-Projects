const sayHello = function() {
    console.log('hello');
}

const sayHello2 = () => {
    console.log('hello');
}

// One line function does not need braces
const sayHello3 = () => console.log('Hello');

const sayHello4 = () => 'Hello';
console.log(sayHello4());

//return object
const sayHello5 = () => ({msg: 'Hello'});

// Single param does not need parenthesis
const sayHello6 = (name) => console.log(`Hello ${name}`);
sayHello6('Brad');

// Multiple params need parenthesis
const sayHello7 = (firstName, lastName) => console.log(`hello ${firstName} ${lastName}`);

sayHello7('dennis', 'mercado');

// callbacks
const users = ['Dennis', 'Mercado', 'Jackie'];
const nameLengths = users.map(function(name) {
    return name.length;
});

// shorter
const nameLengths2 = users.map((name) => {
    return name.length;
});

// shortest
const nameLengths3 = users.map(name => name.length);

console.log(nameLengths3);
