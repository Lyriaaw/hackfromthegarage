<?php
$title = 'Qui Sommes-nous';
ob_start();
?>
    <h4 class="presentation text-center">Etudiants à l’ISEP dans des promotions et spécialisations différentes. <br>
        Nous sommes tous animés par l’envie de
        développer et relever des défis afin d’augmenter nos compétences. Grâce à ces compétences, nous avons choisi de
        résoudre le projet national 2018 de la nuit de l'info et différents défis.
    </h4>
    <div class="line-center"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="text-center">
                        <img class="card-img-top" src="src/amalrick.png" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <div class="text-center">
                            <h3 class="card-title font-italic">Amalric</h3>
                        </div>
                        <p class="card-text">Etudiant en 3ème années en Système d’information, Développeur
                            Full-stack.</p>
                        <a href="https://www.linkedin.com/in/amalricldeb/" target="_blank"><img src="src/linkedin.png"
                                                                                                alt="src/linkedin.png"
                                                                                                class="img-linkedin"></a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="text-center">
                        <img class="card-img-top" src="src/hassen.png" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <div class="text-center">
                            <h3 class="card-title font-italic">Hassen</h3>
                        </div>
                        <p class="card-text">Etudiant en 1ère année, Project Manager, Responsable Delivery &
                            Développeur Front-end</p>
                        <a href="https://www.linkedin.com/in/hassenati/" target="_blank"><img src="src/linkedin.png"
                                                                                              alt="src/linkedin.png"
                                                                                              class="img-linkedin"></a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="text-center">
                        <img class="card-img-top" src="src/andrew.png" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <div class="text-center">
                            <h3 class="card-title font-italic">Andrew</h3>
                        </div>
                        <p class="card-text">Etudiant 1ère année, Direction artistique.</p><br>
                        <a href="https://www.linkedin.com/in/andrew-pouret-643580142/" target="_blank"><img
                                    src="src/linkedin.png" alt="src/linkedin.png" class="img-linkedin"></a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="text-center">
                        <img class="card-img-top" src="src/leo.png" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <div class="text-center">
                            <h3 class="card-title font-italic">Léo</h3>
                        </div>
                        <p class="card-text">Etudiant en 2ème années sécurité numérique et réseau, Développeur
                            Back-end</p>
                        <a href="https://www.linkedin.com/in/leo-berton-80510410a/" target="_blank"><img
                                    src="src/linkedin.png" alt="src/linkedin.png" class="img-linkedin"></a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="text-center">
                        <img class="card-img-top" src="src/paul.png" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <div class="text-center">
                            <h3 class="card-title font-italic">Paul</h3>
                        </div>
                        <p class="card-text">Etudiant en 1ère année, Développeur Back-end</p>
                        <a href="https://www.linkedin.com/in/paul-leveau-87700b138/" target="_blank"><img
                                    src="src/linkedin.png" alt="src/linkedin.png" class="img-linkedin"></a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="text-center">
                        <img class="card-img-top" src="src/lucas.png" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <div class="text-center">
                            <h3 class="card-title font-italic">Lucas</h3>
                        </div>
                        <p class="card-text">Etudiant en 1ère année, Développeur Front-end</p>
                        <a href="https://www.linkedin.com/in/lucas-perrault-isep/" target="_blank"><img
                                    src="src/linkedin.png" alt="src/linkedin.png" class="img-linkedin"></a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="text-center">
                        <img class="card-img-top" src="src/bastien.png" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <div class="text-center">
                            <h3 class="card-title font-italic">Bastien</h3>
                        </div>
                        <p class="card-text">Etudiant 1ère année, Développeur Front-end.</p>
                        <a href="https://www.linkedin.com/in/bastien-grignon-isep/" target="_blank"><img
                                    src="src/linkedin.png" alt="src/linkedin.png" class="img-linkedin"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="line-center"></div>
    <br>
    <div class="row presentation text-center">
        <h4>L’équipe est organisée par des membres de GarageISEP. <br>Une association étudiante au sein de l’ISEP qui
            regroupe
            différents lab, comme IA Lab, Maker Lab, Cyber Lab, VR Lab, ou encore Coder Lab. Le nom du groupe est
            HackFromGarage2018.
        </h4>
        <br><br>
    </div>
<?php $body = ob_get_clean();
require 'template.php'; ?>