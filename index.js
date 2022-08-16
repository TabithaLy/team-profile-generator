const inquirer = require('inquirer');
const fs = require('fs');

function generateHTML (data) {
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile Generator</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${id}</h6>
    <a href="#" class="card-link">${email}</a>
    <a href="#" class="card-link">${other}</a>
  </div>
</div>
</div>
</body>
</html>`;
}
function main () {
    return inquirer
        .prompt(
            {
                type: 'list',
                name: 'mainMenu',
                message: 'What would you like to do?',
                choice: ['Add team member', 'Finish building team']
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
    
function addTeam () {
    
}

        // {
        //   type: 'input',
        //   name: 'name',
        //   message: 'What is the name of your team member?',
        // },
        // {
        //   type: 'list',
        //   name: 'role',
        //   message: 'What is the role of your team member?',
        // },
        // {
        //   type: 'input',
        //   name: 'id',
        //   message: 'What is the ID number of your team member?',
        // },
        // {
        //   type: 'input',
        //   name: 'email',
        //   message: 'What is the email of your team member?',
        // },


// .then(data => {
//     const htmlPageContent = generateHTML(data);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
// });

main ();