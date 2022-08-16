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
                    writeToFile('./dist/team-profiles.html', teamData)
                    break;
            }
        });
}    
// questions for everyone
const generalQs = [
    {
        type: 'input',
        name: 'inputName',
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
// questions specific to role
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
    return inquirer
        .prompt(generalQs)
        .then(response => {
            const teamMember = [response.name, response.id, response.email];
            switch (response.role) {
                case 'Manager':
                    inquirer.prompt(specificQs.officeNum)
                    break;
                case 'Engineer':
                    inquirer.prompt(specificQs.github)
                    break;
                case 'Intern':
                    inquirer.prompt(specificQs.school)
                    break;
            }   
        })
}

// shout out to Voravich S. from whom I got the write file function syntax
function writeToFile(fileName,data) {
    fs.writeFile(fileName, generateHTML(data), (error) => {
        error ? console.error(error) : console.log('Yay! Check your dist folder for your dynamically generated team profile.');
    });
}

main ();