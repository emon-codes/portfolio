document.addEventListener('DOMContentLoaded', () => {
const skills = document.querySelectorAll('[data-skill]');
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const skill = entry.target;
skill.classList.remove('opacity-0','translate-y-3');
skill.classList.add('opacity-100','translate-y-0');
const bar = skill.querySelector('.bg-pink-400');
const width = skill.getAttribute('data-width');
bar.classList.add(width);
observer.unobserve(skill);
}
});
}, { threshold: 0.3 });
skills.forEach(s => observer.observe(s));
});