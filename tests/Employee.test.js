const Employee = require('../lib/Employee');

describe('Employee Class Init', () => {
    it('should create an object with name, id, and email filled in with user input', () => {
        const employee = new Employee('Tabitha', '123', 'name@gmail.com');

        expect(employee.inputName).toEqual('Tabitha');
        expect(employee.id).toEqual('123');
        expect(employee.email).toEqual('name@gmail.com');
    })
})