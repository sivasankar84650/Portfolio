const textArray = ["Web Designer"];
let textIndex = 0;
let charIndex = 0;

const typingSpeed = 100; 
const backSpeed = 100; 
const backDelay = 1000; 

function type() {
    if (charIndex < textArray[textIndex].length) {
        document.querySelector(".text").textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(backspace, backDelay);
    }
}

function backspace() {
    if (charIndex > 0) {
        document.querySelector(".text").textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(backspace, backSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length; 
        setTimeout(type, typingSpeed + 500); 
    }
}

window.onload = type;
