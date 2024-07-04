let id: number = 5;

let company: string = 'travesery media';

let isPublished: boolean = true;
let x: any = 'hello';

let ids: number[] = [1, 2, 3, 4, 5];

ids.push(id);

let arr: any[] = [1, 2, true, false];

// tuple

let person: [number, string, boolean] = [1, '2', true];

let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Bob'],
    [3, 'Tom'],
    [4, 'Mary']
]

let id1: string | number = 22;

id1 = '22'

// enum

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up)

// objects
type User = {
    id: number,
    name: string,
    age: number
}
const user:User ={
    id: 1,
    name: 'Brad',
    age: 30
}

// type assertions

let cid: any = 1

let customerId: number = <number>cid
let customerId2 = cid as number

function addNumber(x:number, y:number):number {
    return x + y;
}


console.log(addNumber(1, 2))

function log(message: string): void {
    console.log(message)
}

log('hello')

// Interfaces

interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Brad',
    age: 30
}

interface MathFunc {
    (x:number, y:number): number
}
const add: MathFunc = (x: number, y: number) => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

// types for unions and interfaces cannot be used

// classes 

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const brad = new Person("brad");

console.log(brad.name);

// sub  classes
class employee1 extends Person {
    constructor(name: string) {
        super(name);
    }
}

const brad1 = new employee1("brad");

console.log(brad1.name);

// Generics 

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);

let stringArray = getArray<string>(['name', 'hr',])
numArray.push(1);

stringArray.push("name");


