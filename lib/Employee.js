//Employee Class

class Employee {
    //constructor with inputs
    constructor(name, id, email){
        //'this' adapts to each time the constructor is called
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }

    //functions to call out information established by constructor
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.title;
    }
}

//instruction to tell node.js what code to export from this file
module.exports = Employee;