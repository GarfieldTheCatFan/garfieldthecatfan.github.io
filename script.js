window.addEventListener('scroll', () => {
    const main = document.querySelector('main');
    const projects = document.querySelectorAll('.project');
  
    const threshold = window.innerHeight * 0.8;
  
    if (main.getBoundingClientRect().top < threshold) {
      main.classList.add('visible');
      projects.forEach((project, index) => {
        setTimeout(() => {
          project.classList.add('visible');
        }, index * 200);
      });
    }
  });
  