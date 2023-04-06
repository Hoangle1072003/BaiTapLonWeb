const navLink = document.querySelectorAll('.menu-link')
const windowPathName  = window.location.pathname
navLink.forEach(navLinks =>{
  const nalinkPathname = new URL(navLinks.href).pathname
  if(windowPathName === nalinkPathname){
    navLinks.classList.add('active') 
  }
})


let loadmoreBtn = document.querySelector('#loading');
let current = 3;
loadmoreBtn.onclick =()=>{
 let boxes = [...document.querySelectorAll('.new__public-container  .box__list .box__item ')];
 for (var i =  current ; i < current + 3 ;i++){
   boxes[i].style.display = 'inline-block';
 }
 current +=3 ;
 if(current>= boxes.length){
  loadmoreBtn.style.display= 'none';
 }
}

// tat tab
window.addEventListener('beforeunload', (event) => {
    event.preventDefault()
    event.returnValue('muon dong tab ha')
  })
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  
  // transform
  const observer_Y = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show-Y');
      } else {
        entry.target.classList.remove('show-Y');
      }
    });
  });
  
  
  const hiddenElements_Y = document.querySelectorAll('.hidden-Y');
  hiddenElements_Y.forEach((el) => observer_Y.observe(el));
  
  var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 5000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }





  const select = document.querySelector('.new__heading')
  function change() {
      select.style.color ='#fff'
  }
  select.addEventListener('mouseover',change)


