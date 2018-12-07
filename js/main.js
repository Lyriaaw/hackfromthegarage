if (window.location.href.match('night.php')) {
    for (let i = 0; i < 3; i++) {
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
else if (window.location.href.match('other.php')) {
    for (let i = 0; i < 3; i++) {
        let link = document.getElementsByClassName('nav-link');
        link[i].classList.remove('active');
    }
    document.getElementById('other-tab').classList.add('active');
}