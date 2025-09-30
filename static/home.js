let img1 = document.getElementById("img1");
let di = document.getElementById("di");
let media=document.getElementById('media')
let job1=document.getElementById('job1');
let dots = document.querySelectorAll('.dot');
let skills = document.querySelectorAll('.box');
  document.getElementById('skills-link').addEventListener('click', (event) => {
  event.preventDefault();

  document.getElementById('sk').scrollIntoView({
    behavior: 'smooth'
  });
});

 document.getElementById('exp-link').addEventListener('click', (event) => {
  event.preventDefault();

  document.getElementById('Experience').scrollIntoView({
    behavior: 'smooth'
  });
});


 document.getElementById('qua-link').addEventListener('click', (event) => {
  event.preventDefault();

  document.getElementById('Qualification').scrollIntoView({
    behavior: 'smooth'
  });
});


 document.getElementById('Expertise-link').addEventListener('click', (event) => {
  event.preventDefault();

  document.getElementById('e').scrollIntoView({
    behavior: 'smooth'
  });
});


 document.getElementById('con-link').addEventListener('click', (event) => {
  event.preventDefault();

  document.getElementById('Contact').scrollIntoView({
    behavior: 'smooth'
  });
});
    onload = () => {
      img1.classList.remove("d-none");
      di.classList.remove("d-none");

     
      setTimeout(() => {
        img1.style.right = "650px";
        img1.style.opacity = "1";
        di.style.right = "200px";
        di.style.opacity = "1";
      }, 50);
    };
    window.addEventListener('scroll', () => {
      for (let i = 0; i < dots.length; i++) {
         if (window.scrollY) {
          media.style.height = '60px';
          dots[i].style.top = '0px';
         
         } 
       
        }
      
        for(let j=0;j<skills.length;j++){
          if(window.scrollY > 2000){
            skills[j].style.width='350px'
          }
        }

      });
    
 

     
     
  window.addEventListener('load', () => {
  window.scrollTo(0, 0); // Scrolls to top-left corner
});
