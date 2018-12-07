<?php
$title = 'Accueil';
ob_start(); ?>

<div class="text-center">
    <video class="video" controls autoplay>
        <source src="">
        Votre navigateur ne supporte pas les vidéos
    </video>
</div>

<?php $body = ob_get_clean();
require 'template.php'?>
