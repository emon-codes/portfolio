// tayping Animation er jono 
const typedTextElement = document.getElementById('typed-text');

const words = [ "Modern Website Design", "Mobile Responsive Website", "Landing Page", "Portfolio Website", "Business Website", "UI Fixing & Redesign"];

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
  
        displayText = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        
        displayText = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    
    typedTextElement.textContent = displayText;

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
        
        speed = delayBeforeNext; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        speed = 500; 
    }

    setTimeout(typeWriter, speed); 
}


document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});










//   <script>
    AOS.init({duration:700,once:true});
    document.getElementById('year').textContent = new Date().getFullYear();

    // mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  //</script>
 // <script>
    const form = document.getElementById('contactForm');
    const nameField = document.getElementById('nameField');
    const emailField = document.getElementById('emailField');
    const msgField = document.getElementById('msgField');
    const formMessages = document.getElementById('formMessages');
    const spinner = document.getElementById('spinner');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', async function(e){
      e.preventDefault();

      if(nameField.value.trim() === '' || emailField.value.trim() === '' || msgField.value.trim() === ''){
        showMessage('Please fill out all fields.', 'bg-red-500');
        return;
      }

      spinner.classList.remove('hidden');
      submitBtn.classList.add('opacity-70');

      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if(result.success){
        window.location.href = 'thank-you.html';
      } else {
        showMessage('Something went wrong. Try again.', 'bg-red-500');
      }

      spinner.classList.add('hidden');
      submitBtn.classList.remove('opacity-70');
    });

    function showMessage(msg, color){
      formMessages.className = 'p-3 rounded-lg text-sm mb-4 ' + color;
      formMessages.textContent = msg;
      formMessages.classList.remove('hidden');
    }

   // </script>