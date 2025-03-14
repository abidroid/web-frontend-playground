
/*
OOPS Task 1
Prototypes in JavaScript
Task: Prototype Chaining
Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
Then create another constructor Dog that inherits from Animal using prototypes.
The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.
Learning objective
 
 
function Animal() {
}
 
function Dog() {
}
*/

function Animal(){

     this.speak = function(){
        console.log('Animal speaking');
    }
}

function Dog(){
    this.bark = function(){
        console.log('Woof!');
    }
}

const animal = new Animal();
animal.speak();
const dog = new Dog();
dog.bark();