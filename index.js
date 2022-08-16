const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

const employees = [];

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
                    console.log('jsiafj')
                    addTeam();
                    break;
                case 'Finish building team':
                    writeToFile('./dist/team-profiles.html', employees)
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
// addTeam case function
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
                        console.log(response)
                        const manager = new Manager (response.inputName, response.id, response.email, managerData.officeNum);
                        console.log(manager);
                        employees.push(manager);
                        main ();
                    })
                    break;
                case 'Engineer':
                    inquirer
                        .prompt({
                        type: 'input',
                        name: 'github',
                        message: 'GitHub URL:',
                        },
                    ).then(engineerData => {
                        // console.log(engineerData)
                        const engineer = new Engineer (response.inputName, response.id, response.email, engineerData.github);
                        console.log(engineer);
                        employees.push(engineer);
                        main ();
                    })
                    break;
                case 'Intern':
                    inquirer
                        .prompt({
                        type: 'input',
                        name: 'school',
                        message: 'School:',
                        },
                    ).then(internData => {
                        // console.log(internData)
                        const intern = new Intern (response.inputName, response.id, response.email, internData.school);
                        console.log(intern);
                        employees.push(intern);
                        main ();
                    })
                    break;
            }; 
        });          
};

// shout out to Voravich S. from whom I got the write file function syntax
function writeToFile(fileName, employees) {
    console.log(employees)
    fs.writeFile(fileName, generateHTML(employees), (error) => {
        error ? console.error(error) : console.log('Yay! Check your dist folder for your dynamically generated team profile.');
    });
}