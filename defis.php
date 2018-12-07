<?php
$title = "Défi LCL";
ob_start();
?>
<div class="container">
    <br>
    <h3 class="text-center">Nos défis choisis</h3>
    <div class="line-center-2"></div>
    <br>
    <a href="lcl.php" class="defi-link" title="Infos sur le défi LCL">
        <div class="row">
            <div class="col-8"><br><br>
                <h2 class="text-center ">Comment révolutionner la relation client et banque, grâce au digital</h2><br>
            </div>
            <div class="col-4 text-center">
                <h4>LCL</h4>
                <img src="src/lcl.jpeg" alt="src/lcl.jpeg">
            </div>
        </div>
    </a>
    <br><br><br><br>
    <div class="row" style="background-color: white;">
        <div class="col-4 text-center">
            <h4>INSA</h4>
            <img src="src/insa.gif" alt="src/insa.gif">
        </div>
        <div class="col-8 text-center"><br><br>
            <h2>Respect de la vie Privée : Etude d'impact sur la vie privée des utilisateurs</h2><br>
        </div>
    </div>
    <br><br><br><br>
    <a href="accenture.php" class="defi-link" title="Infos sur le défi Accenture">
        <div class="row">
            <div class="col-8"><br><br>
                <h2 class="text-center ">Mode Coop : Coopérer avec une équipe de la nuit de l'info afin d'échanger des
                    données
                    utiles</h2><br>
            </div>
            <div class="col-4 text-center">
                <h4>Accenture</h4>
                <img src="src/accenture.png" alt="src/accenture.png">
            </div>
        </div>
    </a>
    <br><br><br><br>
    <div class="row" style="background-color: white;">
        <div class="col-4 text-center">
            <h4>Davidson</h4>
            <img src="src/davidson.png" alt="src/davidson.png">
        </div>
        <div class="col-8 text-center"><br><br>
            <h2>Créer un site en utilisant les Progressive Web App (PWA) pour ressembler le plus à une application
                smartphone</h2><br>
        </div>
    </div>
    <br><br><br><br>
    <div class="row">
        <div class="col-8"><br><br><br>
            <h2 class="text-center ">Dockérisation : </h2><br>
        </div>
        <div class="col-4 text-center">
            <h4>Accenture</h4>
            <img src="src/neosoft.png" alt="src/neosoft.png">
        </div>
    </div>
    <br><br><br><br>
    <!--<p>Rendre autonome l'exploration en condition extrème à l'aide d'un assistant numérique</p>-->

</div>
<?php $body = ob_get_clean();
require 'template.php'; ?>
