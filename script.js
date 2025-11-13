 window.addEventListener('load', () => {
      document.querySelectorAll('.progress-bar').forEach(bar => {
        bar.style.width = bar.style.getPropertyValue('--progress');
      });
    });



// typing Animation er jono

const typedTextElement = document.getElementById('typed-text');
// শব্দগুলো
const words = ["Web Developer", "Web Designer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBeforeNext = 1500; 


function typeWriter() {
    const currentWord = words[wordIndex];
    let displayText;

    if (isDeleting) {
        // অক্ষর মুছুন
        displayText = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // অক্ষর টাইপ করুন
        displayText = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // স্ক্রিনে লেখা আপডেট করুন
    typedTextElement.textContent = displayText;

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
        // টাইপিং শেষ, এখন মোছা শুরু হবে
        speed = delayBeforeNext; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // মোছা শেষ, এখন পরবর্তী শব্দটি টাইপ করা শুরু হবে
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        speed = 500; 
    }

    setTimeout(typeWriter, speed); 
}

// ফাংশনটি শুরু করুন
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});
