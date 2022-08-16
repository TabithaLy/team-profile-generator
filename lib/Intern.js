const Employee = require("./Employee");

class Intern extends Employee {
    constructor(inputName,id,email,school) {
        super(inputName,id,email);
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;