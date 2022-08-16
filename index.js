const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

let employees = [];

function main () {
    console.log('djsaido');
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
                    console.log('jsiafj')
                    addTeam();
                    break;
                case 'Finish building team':
                    writeToFile('./dist/team-profiles.html')
                    break;
            }
        });
}    

main ();
// questions for everyone
const generalQs = [
    {
        type: 'input',
        name: 'inputName',
        message: 'Name:',
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
    {
        type: 'list',
        name: 'role',
        message: 'Role:',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
]

function addTeam () {
    return inquirer
        .prompt(generalQs)
        .then(response => {
            switch (response.role) {
                case 'Manager':
                    inquirer
                        .prompt({
                        type: 'input',
                        name: 'officeNum',
                        message: 'Office Number:',
                        },
                    ).then(managerData => {
                        console.log(managerData)
                        const manager = new Manager (managerData.inputName, managerData.id, managerData.email, managerData.officeNum);
                    }).then(main ());
                    break;
                case 'Engineer':
                    inquirer
                        .prompt({
                        type: 'input',
                        name: 'github',
                        message: 'GitHub URL:',
                        },
                    ).then(engineerData => {
                        console.log(engineerData)
                        const engineer = new Engineer (engineerData.inputName, engineerData.id, engineerData.email, engineerData.github);
                    }).then(main ());
                    break;
                case 'Intern':
                    inquirer
                        .prompt({
                        type: 'input',
                        name: 'school',
                        message: 'School:',
                        },
                    ).then(internData => {
                        console.log(internData)
                        const intern = new Intern (internData.inputName, internData.id, internData.email, internData.school);
                    }).then(main ());
                    break;
            }; 
        });          
};
// employees = [manager, engineer, intern]
// shout out to Voravich S. from whom I got the write file function syntax
function writeToFile(fileName,data) {
    console.log(data)
    fs.writeFile(fileName, generateHTML(data), (error) => {
        error ? console.error(error) : console.log('Yay! Check your dist folder for your dynamically generated team profile.');
    });
}