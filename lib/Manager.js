//Manager Class

//call out Employee class as base structure for new class
const Employee = require("./Employee")

//create new class that extends the Employee class
class Manager extends Employee {
    //take all input from Employee and Manager
    constructor(name, id, email, officeNumber){
        //super command calls parent's constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }

    //New function for new constructor input
    getOffice() {
        return this.officeNumber;
    }
    getRole() {
        return this.title;
    }
}

//instruction to tell node.js what code to export from this file
module.exports = Manager;