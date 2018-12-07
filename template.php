<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php if (isset($title)) {
            echo $title;
        } ?></title>
    <link rel="stylesheet" href="https://bootswatch.com/4/lumen/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="src/planette.png">
    <script src="js/main.js" async defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
<body>
<nav class="navbar navbar-expand-lg navbar-dark main-color navbar-default">
    <img src="src/go.png" alt="src/go.png" width="70">
    <a class="navbar-brand" href="index.php">Garage Go</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor"
            aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor">
        <ul class="navbar-nav mr-auto" role="tablist" id="nav-tab">
            <li class="nav-item">
                <a class="nav-link" id="night-tab" href="night.php" data-toggle="tab" role="tab">Nuit de l'info</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="about-tab" href="about.php" data-toggle="tab" role="tab">Qui sommes-nous</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="about-tab" href="defis.php" data-toggle="tab" role="tab">Défis</a>
            </li>
        </ul>
    </div>
</nav>
<?php if (isset($body)) {
    echo $body;
} ?>

</body>
<footer class="footer text-center">
    &#9400; 2018 Copyright
</footer>
</html>
