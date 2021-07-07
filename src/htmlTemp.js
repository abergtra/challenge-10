const generateHTML = function (teamString) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>

    <body>
        <div class="header container-body container-fluid ">
            <div class="jumbotron bg-danger">
                <h1 class="display-4 text-white text-center">My Team</h1>
            </div>
        </div>
        
        <div class="container-body container-fluid">
            <div class="row dflex justify-content-center flex-wrap">
                ${teamStr} 
            </div>
        </div>
        
        <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  

    </body>
    </html>
    `
}

const generateCard = function (arr) {
    
}