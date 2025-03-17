class Person {

    constructor(name, gender, dob) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`DOB: ${this.dob}`);
    }
}

class Employee extends Person {
    
    constructor(name, gender, dob, empId, designation, department) {
        super(name, gender, dob);
        this.empId = empId;
        this.designation = designation; 
        this.department = department;
    }

    display() {
        super.display();
        console.log(`Emp ID: ${this.empId}`);
        console.log(`Designation: ${this.designation}`);
        console.log(`Department: ${this.department}`);
    }
}

const emp = new Employee('Ali', 'M', "1st Nov", 'E001', 'Manager', 'IT');
emp.display();

