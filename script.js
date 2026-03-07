var ul2 = document.querySelector('.ul2');
function showul2() {
    ul2.style.display = 'flex'
}
function hideul2() {
    ul2.style.display = 'none'
}
function scrollProjects(){
  const section = document.getElementById("projects");
  section.scrollIntoView({behavior:"smooth"});
}
const sections = document.querySelectorAll('.section-animate');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.classList.add('visible');
    }
  });
});
window.addEventListener('load', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < window.innerHeight){
      section.classList.add('visible');
    }
  });
});