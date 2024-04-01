document.querySelector("html").addEventListener("keypress", e => {
    if (e.which === 32) {
        console.log("<space>");
    } else if (e.which === 13) {
        console.log("<enter>"); 
    } else {
        console.log(String.fromCharCode(e.which));
    }
});

document.querySelector("html").addEventListener("keydown", e => {
    if (e.keyCode === 8) {
        console.log("<backspace>");
    }
});

