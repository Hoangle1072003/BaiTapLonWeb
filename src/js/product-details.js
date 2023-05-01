jQuery(document).ready(function($){
    let id = document.URL.split("#")[1];
    $.getJSON('/products.json', function(data){
        let oderdetail = data[0].caphe;
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


    $.getJSON('/products.json', function(data){
      let tra = data[1].tra;
      $(".orderdetail__container").html(
          `
          <div class="oderdetail__heading"> 
        <h1>${tra[id-1].title}</h1>
      </div>
      <div class="oderdetail__grip"> 
        <div class="oderdetail__row"> 
          <div class="oderdetail__img"> <img src=${tra[id-1].img} alt=${tra[id-1].title}></div>
          <div class="oderdetail__content"> 
            <div class="oderdetail__content--text"> 
              <p>${tra[id-1].title2}</p>
            </div>
            <div class="oderdetail__content--btn"><a href= ${tra[id-1].url}>ĐẶT MUA NGAY</a></div>
            <div class="oderdetail__content--price"> 
              <h1>Giá:<span>${tra[id-1].price}</span></h1>
            </div>
          </div>
        </div>
      </div>
          `)
  })


  $.getJSON('/products.json', function(data){
    let freeze = data[2].freeze;
    $(".orderdetail__container").html(
        `
        <div class="oderdetail__heading"> 
      <h1>${freeze[id-1].title}</h1>
    </div>
    <div class="oderdetail__grip"> 
      <div class="oderdetail__row"> 
        <div class="oderdetail__img"> <img src=${freeze[id-1].img} alt=${freeze[id-1].title}></div>
        <div class="oderdetail__content"> 
          <div class="oderdetail__content--text"> 
            <p>${freeze[id-1].title2}</p>
          </div>
          <div class="oderdetail__content--btn"><a href= ${freeze[id-1].url}>ĐẶT MUA NGAY</a></div>
          <div class="oderdetail__content--price"> 
            <h1>Giá:<span>${freeze[id-1].price}</span></h1>
          </div>
        </div>
      </div>
    </div>
        `)
})

$.getJSON('/products.json', function(data){
  let Khac = data[3].Khac;
  $(".orderdetail__container").html(
      `
      <div class="oderdetail__heading"> 
    <h1>${Khac[id-1].title}</h1>
  </div>
  <div class="oderdetail__grip"> 
    <div class="oderdetail__row"> 
      <div class="oderdetail__img"> <img src=${Khac[id-1].img} alt=${Khac[id-1].title}></div>
      <div class="oderdetail__content"> 
        <div class="oderdetail__content--text"> 
          <p>${Khac[id-1].title2}</p>
        </div>
        <div class="oderdetail__content--btn"><a href= ${Khac[id-1].url}>ĐẶT MUA NGAY</a></div>
        <div class="oderdetail__content--price"> 
          <h1>Giá:<span>${Khac[id-1].price}</span></h1>
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

