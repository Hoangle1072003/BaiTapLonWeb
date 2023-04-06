/*scroll reveal*/
ScrollReveal({
    reset: true, 
    distance:'80px',
    duration: 2000,
    delay:200
  }); 
  
  
  ScrollReveal().reveal('.content__category--caption', {
    origin:'bottom'
  });
  ScrollReveal().reveal('.content__category--image', {
    opacity: '0'
  });