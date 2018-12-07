<?php
$title = 'Accueil';
ob_start(); ?>
<!--<div class="container">-->
    <div class="row demo">
        <div class="col-4">
            <div class="title text-center">
                <h3>La démonstration</h3>
                <div class="line"></div>
                <br>
                <a href="http://gogarage.luquf.me">Site de démonstration</a>
            </div>
        </div>
        <div class="col-8">
            <div class="text-center">
                <iframe src="https://www.youtube.com/embed/_DVj8ai3zGQ" frameborder="0" class="video">
                </iframe>
            </div>
        </div>
    </div>
    <div class="text-center">
        <br>
        <h1>Skills</h1><br>
        <div class="line-center"></div>
    </div>
    <div class="row">
        <div class="col text-center">
            <br>
            <h5 style="word-spacing: 8px;">Node.js, AngularJS, WebSocket, MySQL, Docker, (Et beaucoup de café...)</h5>
        </div>
    </div>
    <br><br><br>
</div>
<?php $body = ob_get_clean();
require 'template.php' ?>
