const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

function main () {
    return inquirer
        .prompt(
            {
                type: 'list',
                name: 'mainMenu',
                message: 'What would you like to do?',
                choices: ['Add team member', 'Finish building team']
            },
        )
        .then(response => {
            switch (response.mainMenu) {
    
                case 'Add team member':
                    addTeam();
                    break;
                case 'Finish building team':
                    finishTeam();
                    break;
            }
        });
}    

const generalQs = [
    {
        type: 'input',
        name: 'name',
        message: 'Name:',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Role:',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    },
]

const specificQs = [
    {
        type: 'input',
        name: 'officeNum',
        message: 'Office Number:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub URL:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'School:',
    },
]
function addTeam () {
    
}

function finishTeam () {

}


// .then(data => {
//     const htmlPageContent = generateHTML(data);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
// });

main ();