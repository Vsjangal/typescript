"use strict";
let id = 5;
let company = 'travesery media';
let isPublished = true;
let x = 'hello';
let ids = [1, 2, 3, 4, 5];
ids.push(id);
let arr = [1, 2, true, false];
// tuple
let person = [1, '2', true];
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Bob'],
    [3, 'Tom'],
    [4, 'Mary']
];
let id1 = 22;
id1 = '22';
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: 'Brad',
    age: 30
};
// type assertions
let cid = 1;
let customerId = cid;
let customerId2 = cid;
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 2));
function log(message) {
    console.log(message);
}
log('hello');
const user1 = {
    id: 1,
    name: 'Brad',
    age: 30
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// types for unions and interfaces cannot be used
// classes 
class Person {
    constructor(name) {
        this.name = name;
    }
}
const brad = new Person("brad");
console.log(brad.name);
// sub  classes
class employee1 extends Person {
    constructor(name) {
        super(name);
    }
}
const brad1 = new employee1("brad");
console.log(brad1.name);
// Generics 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['name', 'hr',]);
numArray.push(1);
stringArray.push("name");
