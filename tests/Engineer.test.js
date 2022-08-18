// big shout out to Voravich S. whose repo I looked to supplement my understanding of this syntax
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer Class Init', () => {
    it('should create an object with name, id, email, and github fields filled in with user input', () => {
        const engineer = new Engineer('Tabitha', '234', 'name1@gmail.com', 'https://github.com/TabithaLy');

        expect(engineer.inputName).toEqual('Tabitha');
        expect(engineer.id).toEqual('234');
        expect(engineer.email).toEqual('name1@gmail.com');
        expect(engineer.github).toEqual('https://github.com/TabithaLy');
    })
})