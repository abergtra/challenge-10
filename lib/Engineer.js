//Engineer Class

//call out Employee class as base structure for new class
const Employee = require("./Employee")

//create new class that extends the Employee class
class Engineer extends Employee {
    //take all input from employee and engineer
    constructor(name, id, email, github){
        //super command calls parent's constructor
        super(name, id, email);
        this.github = github;
        this.title = "Engineer";
    }

    //New function for new constructor input
    getGithub() {
        return this.github;
    }
    //Function to update role title
    getRole() {
        return this.title;
    }
}

//instruction to tell node.js what code to export from this file
module.exports = Engineer;