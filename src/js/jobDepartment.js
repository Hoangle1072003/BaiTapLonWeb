const questions = document.querySelectorAll('.department__job--question')

questions.forEach(function (question){
    const btn = question.querySelector('.department__job--question--title h1')
    btn.addEventListener('click',function(){
        questions.forEach(function (item) {
            if (item !== question) {
              item.classList.remove("show-text");
            }
          });
          question.classList.toggle("show-text");
    })
});

// jQuery(document).ready(function($){
//     $.getJSON('/products.json',function(data){
//         let job = data[9].ungtuyen
//         for(let i=0;i<job.length;i++){
//             $('.department__job--question').append(
//                 `
//                 <div class="department__job--question--title"> 
//                 <h1>${job[i].title}</h1>
//               </div>
//               <div class="department__job--question--text"> 
//                 <p>${job[i].desc}</p>
//               </div>
//                 `
//             )
//         }
//     })
// })

