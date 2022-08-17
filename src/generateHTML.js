const Engineer = require("../lib/Engineer");

// html template function
function generateHTML (employees) {

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
    // big shoutout to Voravich S. whose repo I looked at for understanding of this logic structure
    // switch case for adding card by role
      employees.forEach(employee => {
        switch (employee.getRole()) {
          case "Manager":
            people += `    <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${employee.inputName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
              <h6 class="card-subtitle mb-2 text-muted">${employee.id}</h6>
              <a href="mailto:${employee.email}" class="card-link">${employee.email}</a>
              <a href="#" class="card-link">Office Number: ${employee.officeNum}</a>
            </div>`
            break;
          case "Engineer":
            people += `    <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${employee.inputName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
              <h6 class="card-subtitle mb-2 text-muted">${employee.id}</h6>
              <a href="mailto:${employee.email}" class="card-link">${employee.email}</a>
              <a href="${employee.github}" class="card-link">GitHub</a>
            </div>`
            break;
          case "Intern":
          people += `    <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${employee.inputName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <h6 class="card-subtitle mb-2 text-muted">${employee.id}</h6>
            <a href="mailto:${employee.email}" class="card-link">${employee.email}</a>
            <a href="#" class="card-link">${employee.school}</a>
          </div>`
            break;
          default:
            break;
        }
      })
    // generate HTML document
    const newHTML = starting + people + ending;
    return newHTML
}
module.exports = generateHTML;