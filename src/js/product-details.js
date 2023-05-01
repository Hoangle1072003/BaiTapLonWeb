// jQuery(document).ready(function($){
//     let id = document.URL.split("#")[1];
//     $.getJSON('/products.json', function(data){
//         let oderdetail = data[0].caphe;
//         $(".orderdetail__container").html(
//             `
//             <div class="oderdetail__heading"> 
//           <h1>${oderdetail[id-1].title}</h1>
//         </div>
//         <div class="oderdetail__grip"> 
//           <div class="oderdetail__row"> 
//             <div class="oderdetail__img"> <img src=${oderdetail[id-1].img} alt=${oderdetail[id-1].title}></div>
//             <div class="oderdetail__content"> 
//               <div class="oderdetail__content--text"> 
//                 <p>${oderdetail[id-1].title2}</p>
//               </div>
//               <div class="oderdetail__content--btn"><a href= ${oderdetail[id-1].url}>ĐẶT MUA NGAY</a></div>
//               <div class="oderdetail__content--price"> 
//                 <h1>Giá:<span>${oderdetail[id-1].price}</span></h1>
//               </div>
//             </div>
//           </div>
//         </div>
//             `)
//     })


//     $.getJSON('/products.json', function(data){
//       let tra = data[1].tra;
//       let traID = document.URL.split("#")[1];
//       $(".orderdetail__container").html(
//           `
//           <div class="oderdetail__heading"> 
//         <h1>${tra[traID-1].title}</h1>
//       </div>
//       <div class="oderdetail__grip"> 
//         <div class="oderdetail__row"> 
//           <div class="oderdetail__img"> <img src=${tra[traID-1].img} alt=${tra[traID-1].title}></div>
//           <div class="oderdetail__content"> 
//             <div class="oderdetail__content--text"> 
//               <p>${tra[traID-1].title2}</p>
//             </div>
//             <div class="oderdetail__content--btn"><a href= ${tra[traID-1].url}>ĐẶT MUA NGAY</a></div>
//             <div class="oderdetail__content--price"> 
//               <h1>Giá:<span>${tra[traID-1].price}</span></h1>
//             </div>
//           </div>
//         </div>
//       </div>
//           `)
//   })

//   $.getJSON('/products.json', function(data){
//     let freeze = data[2].freeze;
//     $(".orderdetail__container").html(
//         `
//         <div class="oderdetail__heading"> 
//       <h1>${freeze[id-1].title}</h1>
//     </div>
//     <div class="oderdetail__grip"> 
//       <div class="oderdetail__row"> 
//         <div class="oderdetail__img"> <img src=${freeze[id-1].img} alt=${freeze[id-1].title}></div>
//         <div class="oderdetail__content"> 
//           <div class="oderdetail__content--text"> 
//             <p>${freeze[id-1].title2}</p>
//           </div>
//           <div class="oderdetail__content--btn"><a href= ${freeze[id-1].url}>ĐẶT MUA NGAY</a></div>
//           <div class="oderdetail__content--price"> 
//             <h1>Giá:<span>${freeze[id-1].price}</span></h1>
//           </div>
//         </div>
//       </div>
//     </div>
//         `)
// })

// $.getJSON('/products.json', function(data){
//   let Khac = data[3].Khac;
//   $(".orderdetail__container").html(
//       `
//       <div class="oderdetail__heading"> 
//     <h1>${Khac[id-1].title}</h1>
//   </div>
//   <div class="oderdetail__grip"> 
//     <div class="oderdetail__row"> 
//       <div class="oderdetail__img"> <img src=${Khac[id-1].img} alt=${Khac[id-1].title}></div>
//       <div class="oderdetail__content"> 
//         <div class="oderdetail__content--text"> 
//           <p>${Khac[id-1].title2}</p>
//         </div>
//         <div class="oderdetail__content--btn"><a href= ${Khac[id-1].url}>ĐẶT MUA NGAY</a></div>
//         <div class="oderdetail__content--price"> 
//           <h1>Giá:<span>${Khac[id-1].price}</span></h1>
//         </div>
//       </div>
//     </div>
//   </div>
//       `)
// })
// })



// let id = document.URL.slice(-2);
// console.log(id);
// $.getJSON('/products.json', function(data){
//     let oderdetail = data[1].tra;
//     let currentItem = oderdetail[id-1];
//     let htmlString = `
//         <div class="oderdetail__heading"> 
//             <h1>${currentItem.title}</h1>
//         </div>
//         <div class="oderdetail__grip"> 
//             <div class="oderdetail__row"> 
//                 <div class="oderdetail__img"> <img src=${currentItem.img} alt=${currentItem.title}></div>
//                 <div class="oderdetail__content"> 
//                     <div class="oderdetail__content--text"> 
//                         <p>${currentItem.title2}</p>
//                     </div>
//                     <div class="oderdetail__content--btn"><a href= ${currentItem.url}>ĐẶT MUA NGAY</a></div>
//                     <div class="oderdetail__content--price"> 
//                         <h1>Giá:<span>${currentItem.price}</span></h1>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//     $(".orderdetail__container").html(htmlString);
// });


jQuery(document).ready(function($){
  let id = document.URL.split("#")[1];
  $.getJSON('/products.json', function(data){
      let oderdetail = data[0].caphe;
      let tra = data[1].tra;
      let freeze = data[2].freeze;
      let Khac = data[3].Khac
      let product;
      if (oderdetail.find(item => item.id == id)) {
          product = oderdetail.find(item => item.id == id);
      } else if (tra.find(item => item.id == id)) {
          product = tra.find(item => item.id == id);
      } else if (freeze.find(item => item.id == id)) {
          product = freeze.find(item => item.id == id);
      }else if(Khac.find(item => item.id == id)){
        product = Khac.find(item => item.id == id);
      }
      $(".orderdetail__container").html(
          `
          <div class="oderdetail__heading"> 
        <h1>${product.title}</h1>
      </div>
      <div class="oderdetail__grip"> 
        <div class="oderdetail__row"> 
          <div class="oderdetail__img"> <img src=${product.img} alt=${product.title}></div>
          <div class="oderdetail__content"> 
            <div class="oderdetail__content--text"> 
              <p>${product.title2}</p>
            </div>
            <div class="oderdetail__content--btn"><a href= ${product.url}>ĐẶT MUA NGAY</a></div>
            <div class="oderdetail__content--price"> 
              <h1>Giá:<span>${product.price}</span></h1>
            </div>
          </div>
        </div>
      </div>
          `
      )
  })
})
