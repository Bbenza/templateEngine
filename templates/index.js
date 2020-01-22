function mainHTML (profiles)
{ return `<!DOCTYPE html>
<html lang="en">
<head>
  <script type="text/javascript" src="./generateHTML.js"></script>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
  <title>The Team</title>
</head>
<style type="text/css">

 .card {
      border: 1px solid navy;
      background: lightgreen;
      color:black;
      font-weight: bold;
      width:18rem;
      margin: 20px;
      display: flex;
    }
  .card-title {
  text-align: center;
 } 
 .nameBlock {
  text-align: center;
 }
 h1 {
  background: green;
  color:white;
  text-align: center;
  padding: 30px;
}
</style>
<body>
 
    <div class = "nameBlock">
      <h1 class="display-4">The Team!</h1>
    </div>
  <br>
  <br>      
  <hr class="my-4">      
    <div class="row justify-content-lg-center ">
        ${profiles.map(function (item) 
          {
            return item;
          }).join('')}
    </div>
  </div>
  </div>
</body>
</html>
`
}

module.exports = mainHTML;