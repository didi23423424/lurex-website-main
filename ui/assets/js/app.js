// Animation System
const texts = [
    "Discord Accounts",
    "Netflix Accounts", 
    "Giftcards"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 2000;

function typeText() {
    const textElement = document.querySelector('.text2');
    const currentText = texts[textIndex];
    
    if (!isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
                typeText();
            }, pauseTime);
            return;
        }
    } else {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }
    
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeText, speed);
}

document.addEventListener('DOMContentLoaded', typeText);
