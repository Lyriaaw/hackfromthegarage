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
                <a href="">Site de démonstration</a>
            </div>
        </div>
        <div class="col-8">
            <div class="text-center">
                <iframe src="https://www.youtube.com/embed/_DVj8ai3zGQ" frameborder="0" class="video">
                </iframe>
            </div>
        </div>
    </div>
<!--</div>-->
<div class="row">
    <div class="col">

    </div>
    <div class="col">

    </div>
</div>

<?php $body = ob_get_clean();
require 'template.php' ?>
