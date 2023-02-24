function countdown() {
    var seconds = document.getElementById("seconds").value;  //  Create var and link it with input value from HTML;

    function tick() {
        seconds = seconds - 1;  //  Assign to seconds new value seconds - 1;
        timer.innerHTML = seconds;  //  Let seconds appear in <p> with id="timer";
        setTimeout(tick, 1000);  //  Set countdown tick as 1 second;
        if (seconds == -1) {
            alert("Time's up!");  //  Code will be executed if the condition is true;
        }
    }
    tick();  //  Launch tick() function;
}



let slideIndex = 1;  //  Set var slideIndex to 1;
showSlides(slideIndex);  //  Run showSlides with index (1);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);  //  Function is called when arrows back and forth pressed;
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);  //  Function is called when dots pressed;
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");  //  Making 3 vars i, slides and dots;
    if (n > slides.length) {slideIndex = 1}  //  Sets that after 4th slide will be showed 1st slide;
    if (n < 1) {slideIndex = slides.length}  //  Sets that before 1st slide will be showed 4th slide;
    for (i = 0; i < slides.length; i++) {  //  Loops through each element in the slides;
        slides[i].style.display = "none";  //  Sets display CSS property to none, hiding all slides;
    }
    for (i = 0; i < dots.length; i++) {  //  Loops through each element in the dots;
        dots[i].className = dots[i].className.replace(" active", "");  //  Removes active class from elements;
    }
    slides[slideIndex-1].style.display = "block";  //  Sets the display property to "block", which displays slide on the page;
    dots[slideIndex-1].className += " active";  //  Adds the "active" class to the dot element that matches with that slide;
}