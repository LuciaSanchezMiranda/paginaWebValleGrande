document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling para enlaces
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if(targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Efecto de cambio de header al hacer scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 50) {
      header.style.padding = '0.5rem 0';
      header.style.background = 'rgba(0, 51, 102, 0.95)';
    } else {
      header.style.padding = '1rem 0';
      header.style.background = 'var(--color-primario)';
    }
  });
});