if (window.location.href.match('night.php')) {
    for (let i = 0; i < 4; i++) {
        let link = document.getElementsByClassName('nav-link');
        link[i].classList.remove('active');
    }
    document.getElementById('night-tab').classList.add('active');

} else if (window.location.href.match('about.php')) {
    for (let i = 0; i < 3; i++) {
        let link = document.getElementsByClassName('nav-link');
        link[i].classList.remove('active');
    }
    document.getElementById('about-tab').classList.add('active');
}
//Todo : next page
else if (window.location.href.match('defis.php')) {
    for (let i = 0; i < 3; i++) {
        let link = document.getElementsByClassName('nav-link');
        link[i].classList.remove('active');
    }
    document.getElementById('defis-tab').classList.add('active');
}