<?php
$title = 'Accenture';
ob_start(); ?>

<a href="javascript:history.back();" class="btn-back">< Retour</a>
<div class="text-center">
    <embed src= "src/defi_accenture.pdf" class="pdf-reader">
</div>

<?php $body = ob_get_clean();
require 'template.php' ?>

