// big shout out to Voravich S. whose repo I looked to supplement my understanding of this syntax
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager Class Init', () => {
    it('should create an object with name, id, email, and office number fields filled in with user input', () => {
        const manager = new Manager('Tabitha', '123', 'name@gmail.com', '1');

        expect(manager.inputName).toEqual('Tabitha');
        expect(manager.id).toEqual('123');
        expect(manager.email).toEqual('name@gmail.com');
        expect(manager.officeNum).toEqual('1');
    })
})