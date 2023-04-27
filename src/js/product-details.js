jQuery(document).ready(function($){
    let id = document.URL.slice(-2);
    $.getJSON('/products.json', function(data){
        let oderdetail = data[6].chung;
        $(".orderdetail__container").html(
            `
            <div class="oderdetail__heading"> 
          <h1>${oderdetail[id-1].title}</h1>
        </div>
        <div class="oderdetail__grip"> 
          <div class="oderdetail__row"> 
            <div class="oderdetail__img"> <img src=${oderdetail[id-1].img} alt=${oderdetail[id-1].title}></div>
            <div class="oderdetail__content"> 
              <div class="oderdetail__content--text"> 
                <p>${oderdetail[id-1].title2}</p>
              </div>
              <div class="oderdetail__content--btn"><a href= ${oderdetail[id-1].url}>ĐẶT MUA NGAY</a></div>
              <div class="oderdetail__content--price"> 
                <h1>Giá:<span>${oderdetail[id-1].price}</span></h1>
              </div>
            </div>
          </div>
        </div>
            `)
    })
})



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

