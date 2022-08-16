const Engineer = require("../lib/Engineer");

// html template
function generateHTML (employees) {
    console.log(employees)
    // if (!data.officeNum) {
    //     data.officeNum = "";
    // } else if (!data.github) {
    //     data.github = "";
    // } else if (!data.school) {
    //     data.github = "";
    // }
    // map over array of employee objects
    //  if role = manager
            // return manager template literal
        // if role = Engineer
            //return engineer template literal
        // if role = intern
            //return intern template literal
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile Generator</title>
  </head>
  <body>
    <div class="card" style="width: 18rem;">
    <div class="card-body manager">
      <h5 class="card-title">${employees.inputName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${employees.role}</h6>
      <h6 class="card-subtitle mb-2 text-muted">${employees.id}</h6>
      <a href="#" class="card-link">${employees.email}</a>
      <a href="#" class="card-link">${employees.officeNum}</a>
    </div>
    <div class="card" style="width: 18rem;">
    <div class="card-body engineer">
      <h5 class="card-title">${employees.inputName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${employees.role}</h6>
      <h6 class="card-subtitle mb-2 text-muted">${employees.id}</h6>
      <a href="#" class="card-link">${employees.email}</a>
      <a href="#" class="card-link">${employees.github}</a>
    </div>
    <div class="card" style="width: 18rem;">
    <div class="card-body intern">
      <h5 class="card-title">${employees.inputName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${employees.role}</h6>
      <h6 class="card-subtitle mb-2 text-muted">${employees.id}</h6>
      <a href="#" class="card-link">${employees.email}</a>
      <a href="#" class="card-link">${employees.school}</a>
    </div>
  </div>
  </div>
  </body>
  </html>`;
  }

  module.exports = generateHTML;