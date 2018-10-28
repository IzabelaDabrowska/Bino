window.onload = function () {
    var links = document.querySelectorAll('.nav-menu li a');
    var selectedLink = document.querySelectorAll('.nav-menu li a.active')[0];
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            selectedLink.classList.remove('active');
            var target = event.target;
            target.classList.add('active');
            selectedLink = target;
        })
    }
};