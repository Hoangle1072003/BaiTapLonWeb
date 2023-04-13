// const menu =[
//   {
//       id:1,
//       img: "/src/img/new2.jpg",
//       title: `VỊ COOL SẢNG KHOÁI, TRÀ DƯA HẤU VẢI`,
//       date: "17/03/2023, 18:42",
//       icon:"uil uil-calender"
//   },
//   {
//     id:2,
//     img: "/src/img/new1.png",
//     title: `MẠNH MẼ LÀM ĐIỀU MÌNH YÊU!`,
//     date: "06/03/2023, 08:21",
//     icon:"uil uil-calender"
//   },
//   {
//     id:3,
//     img: "/src/img/new3.jpg",
//     title: `HẸN YÊU TẠI HIGHLANDS - SAU VALENTINE VẪN CÒN CHỖ ĐỂ TA GẶP NHAU!`,
//     date: "20/02/2023, 23:02",
//     icon:"uil uil-calender"
//   },
// ]
// const boxList = document.querySelector('.box__list')

// window.addEventListener("DOMContentLoaded",function(){
//   let displayMenu = menu.map(function(item){
//     return ` <div class="box__item"> 
//     <div class="box__item--img"> <a href="#"> <img src=${item.img} alt=${item.title}/></a></div>
//     <div class="box__item--bot"> 
//       <div class="box__item--title"> <a href="#">
//           <h1>${item.title}</h1></a></div>
//       <div class="box__item--date"> 
//         <div class="box__item--icon">
//            <i class=${item.icon}></i></div>
//         <div class="box__item--newdate"> 
//           <h1>${item.date}</h1>
//         </div>
//       </div>
//     </div>
//   </div>`
//   })
//   displayMenu= displayMenu.join("")
//   boxList.innerHTML= displayMenu;
// })

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





// function observeElements() {
//   const observer_Y = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       console.log(entry)
//       if (entry.isIntersecting) {
//         entry.target.classList.add('show-Y');
//       } else {
//         entry.target.classList.remove('show-Y');
//       }
//     });
//   });

//   const hiddenElements = document.querySelectorAll('.hidden');
//   hiddenElements.forEach((el) => observer_Y.observe(el));
// }  

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




