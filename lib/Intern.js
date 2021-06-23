//Intern Class

//call out Employee class as base structure for new class
const Employee = require("./Employee")

//create new class that extends the Employee class
class Intern extends Employee {
    //take all input from Employee and Intern
    constructor(name, id, email, school){
        //super command calls parent's constructor
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
    }

    //New function for new constructor input
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.title;
    }
}

//instruction to tell node.js what code to export from this file
module.exports = Intern;