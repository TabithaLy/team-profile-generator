const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(inputName,id,email,github) {
        super(inputName,id,email);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;