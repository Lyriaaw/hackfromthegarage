<?php
$title = 'Nuit de l\'info';
ob_start();
?>
    <br>
    <h1 class="text-center">Problématique</h1>

<?php $body = ob_get_clean();
require 'template.php'; ?>