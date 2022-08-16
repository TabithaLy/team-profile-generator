class Employee {
    constructor(inputName,id,email) {
        this.inputName = inputName;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;