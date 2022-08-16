const Engineer = require("../lib/Engineer");

// html template
function generateHTML (employees) {
  console.log(employees)
    const starting = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile Generator</title>
  </head>
  <body>`
    const ending = `
    </body>
    </html>`
    let people = ""
    // big shoutout to Voravich whose repo I looked at for understanding of this logic structure
    // employees.forEach(role => {
    //   if (role.length) {
    //     people += eval(`$(role[0].getRole()`)
    //   }
      employees.forEach(employee => {
        switch (employee.getRole()) {
          case "Manager":
            people += `    <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${employees.inputName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${employees.role}</h6>
              <h6 class="card-subtitle mb-2 text-muted">${employees.id}</h6>
              <a href="#" class="card-link">${employees.email}</a>
              <a href="#" class="card-link">${employees.officeNum}</a>
            </div>`
            break;
          case "Engineer":
            people += `    <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${employees.inputName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${employees.role}</h6>
              <h6 class="card-subtitle mb-2 text-muted">${employees.id}</h6>
              <a href="#" class="card-link">${employees.email}</a>
              <a href="#" class="card-link">${employees.github}</a>
            </div>`
            break;
          case "Intern":
          people += `    <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${employees.inputName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${employees.role}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${employees.id}</h6>
            <a href="#" class="card-link">${employees.email}</a>
            <a href="#" class="card-link">${employees.school}</a>
          </div>`
            break;
          default:
            break;
        }
      })
    // })
    const newHTML = starting + people + ending;
    return newHTML
}
module.exports = generateHTML;