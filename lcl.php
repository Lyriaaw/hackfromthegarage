<?php
$title = "Défi LCL";
ob_start();
?>
<br>
<h3 class="text-center">Comment révolutionner la relation client et banque, grâce au digital !</h3><br>

<p>Rendre autonome l'exploration en condition extrème à l'aide d'un assistant numérique</p>


<?php $body = ob_get_clean();
require 'template.php'; ?>
