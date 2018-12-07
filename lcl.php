<?php
$title = 'LCL';
ob_start(); ?>

<a href="javascript:history.back();" class="btn-back">< Retour</a>
<div class="text-center">
    <embed src= "src/defi_lcl.pdf" class="pdf-reader">
</div>


<?php $body = ob_get_clean();
require 'template.php' ?>

