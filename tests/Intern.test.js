// big shout out to Voravich S. whose repo I looked to supplement my understanding of this syntax
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern Class Init', () => {
    it('should create an object with name, id, email, and school fields filled in with user input', () => {
        const intern = new Intern('Tabitha', '345', 'name2@gmail.com', 'Yale');

        expect(intern.inputName).toEqual('Tabitha');
        expect(intern.id).toEqual('345');
        expect(intern.email).toEqual('name2@gmail.com');
        expect(intern.school).toEqual('Yale');
    })
})