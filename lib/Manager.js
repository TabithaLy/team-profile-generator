const Employee = require("./Employee");

class Manager extends Employee {
    constructor(inputName,id,email,officeNum) {
        super(inputName,id,email);
        this.officeNum = officeNum;
    }
}

module.exports = Manager;