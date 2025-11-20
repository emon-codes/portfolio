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

    

// </script>
   

// contact form er script
 const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const spinner = document.getElementById("spinner");
const formStatus = document.getElementById("formStatus");

// Small Popup Function (JS Only)
function showSuccessPopup() {
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.inset = "0";
  popup.style.background = "rgba(0,0,0,0.4)";
  popup.style.backdropFilter = "blur(2px)";
  popup.style.display = "flex";
  popup.style.justifyContent = "center";
  popup.style.alignItems = "center";
  popup.style.zIndex = "9999";

  const box = document.createElement("div");
  box.style.background = "white";
  box.style.padding = "18px";
  box.style.borderRadius = "12px";
  box.style.width = "75%";
  box.style.maxWidth = "230px";
  box.style.textAlign = "center";
  box.style.animation = "fadeIn 0.25s ease";

  const title = document.createElement("h2");
  title.innerText = "Thank You!";
  title.style.fontSize = "18px";
  title.style.fontWeight = "700";
  title.style.color = "#16A34A";

  const msg = document.createElement("p");
  msg.innerText = "Message sent!";
  msg.style.marginTop = "5px";
  msg.style.fontSize = "13px";
  msg.style.color = "#475569";

  const btn = document.createElement("button");
  btn.innerText = "Close";
  btn.style.marginTop = "15px";
  btn.style.padding = "6px 18px";
  btn.style.fontSize = "13px";
  btn.style.background = "#16A34A";
  btn.style.color = "white";
  btn.style.borderRadius = "9999px";
  btn.style.cursor = "pointer";

  btn.onclick = () => popup.remove();

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
  `;
  document.head.appendChild(style);

  box.appendChild(title);
  box.appendChild(msg);
  box.appendChild(btn);
  popup.appendChild(box);
  document.body.appendChild(popup);
}

function setStatus(message, color) {
  formStatus.className = `p-3 rounded-lg text-sm mb-4 text-white ${color}`;
  formStatus.textContent = message;
  formStatus.classList.remove("hidden");
}

function toggleLoading(isLoading) {
  spinner.classList.toggle("hidden", !isLoading);
  submitBtn.disabled = isLoading;
  submitBtn.classList.toggle("opacity-50", isLoading);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  toggleLoading(true);

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData
    });

    const result = await response.json();
    toggleLoading(false);

    if (response.ok && result.success) {
      form.reset();
      showSuccessPopup(); // POPUP SHOW HERE
    } else {
      setStatus("❌ Something went wrong. Try again.", "bg-red-500");
    }
  } 
  catch (error) {
    toggleLoading(false);
    setStatus("❌ Network error. Please try again.", "bg-red-500");
  }
});





