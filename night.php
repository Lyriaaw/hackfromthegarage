<?php
$title = 'Nuit de l\'info';
ob_start();
?>
    <br>
    <h1 class="text-center">Problématique</h1>
    <p class="pbm">L’explorateur est un scientifique et à ce titre il doit réaliser de nombreuses expériences médicales
        et
        techniques. Cependant, à cause de l’épuisement provoqué par les conditions extrêmes, l’utilisateur peut perdre
        en productivité. Il est alors en danger et risque de mettre en péril l’expédition. Pour éviter cela, nous avons
        conçu une interface d’aide à la prise de décision et développé un cockpit digital permettant d’aider
        l’explorateur dans la réalisation des ses différentes mission. <br>Nous utilisons un ensemble de méthodes
        d’optimisation graphique UX/UI pour permettre d’afficher le plus d’informations possible sans surcharger le
        champ de vision. Nous proposons à l’utilisateur de voir en temps réel les données liées à ses signes de vie
        ainsi qu’à son matériel. Il peut ainsi se préoccuper des informations importantes de sa mission, il n’a pas à
        être attentif à tous les détails de son environnement. <br>L’application lui indique ainsi les conditions météos
        en
        temps réel et les projections disponibles. L’équipe au sol peut ainsi lui indiquer les meilleurs choix en terme
        de déplacement et en terme de consommation d’aliments. <br>
        <div class="text-center">
    <p class="pbm">
        La mission étant en solitaire, la présence de cette
        interface qui communique avec l’explorateur lui permet de se sentir moins seul et ainsi de garder un esprit
        saint et son corps sauf.
        Enfin, l’explorateur augmente son niveau de productivité, grâce au Garage Go.
    </p>
    </div>
    </p>
    <br>
    <div class="line-center"></div>
    <br>
    <img src="src/screen_tableau.PNG" alt="src/screen_tableau.PNG">
    <br><br>
    <div class="line-center"></div>
    <br>
    <img src="src/screen_ecran.PNG" alt="src/screen_ecran.PNG">
    <br><br>
    <div class="line-center"></div>
    <br>
    <img src="src/screen_code.PNG" alt="src/screen_code.PNG">

<?php $body = ob_get_clean();
require 'template.php'; ?>