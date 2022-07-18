function typeEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";

    let i = 0;
    let timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}


// application
let speed = 75;
let h1 = document.querySelector('h2');

// type affect to header
typeEffect(h1, speed);