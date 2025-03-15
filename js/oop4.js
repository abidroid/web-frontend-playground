/*
OOPS Task 4
 
Encapsulation, Polymorphism, Abstraction, and Getters/Setters
Task 1: Encapsulation Using Getters and Setters
Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). 
Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
 
Task 2: Polymorphism with Method Overriding
Create a class Shape with a method area() that returns 0. 
Create two subclasses Circle and Rectangle 
that override the area() method to calculate the area of a circle and a rectangle, respectively.
 
*/
// Task 1
class BankAccount {
    constructor(balance = 0) {
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && this._balance >= amount) {
            this._balance -= amount;
        } else {
            console.log('Insufficient balance.');
        }
    }
}

const account = new BankAccount(100);
console.log(account.balance);
account.deposit(50);
console.log(account.balance);
account.withdraw(130);
console.log(account.balance);
account.withdraw(130);

// Task 2
class Shape {
}

class Circle {
}

class Rectangle {
}
