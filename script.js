var ind = 0;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
display(ind);

setInterval(function() {
    add(1);
}, 5000)

function add(n) {
    display(ind += n);
}

function display(n) {
    if (n >= slides.length) {
        ind = 0;
    }
    if (n < 0) {
        ind = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.backgroundColor = "#000000";
    }
    slides[ind].style.display = "block";
    dots[ind].style.backgroundColor = "#8EBE25";
}
