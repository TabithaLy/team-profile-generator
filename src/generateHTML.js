// html template
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
      <h5 class="card-title">${data.inputName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
      <h6 class="card-subtitle mb-2 text-muted">${data.id}</h6>
      <a href="#" class="card-link">${data.email}</a>
      <a href="#" class="card-link">${data.specificQs}</a>
    </div>
  </div>
  </div>
  </body>
  </html>`;
  }