jQuery(document).ready(function($){
    let id = document.URL.slice(-2);
    $.getJSON('/products.json', function(data){
        let oderdetail = data[2].freeze;
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
            `
        )

        //


        let caphe = data[0].caphe;
        $(".orderdetail__container").html(
            `
            <div class="oderdetail__heading"> 
          <h1>${caphe[id-1].title}</h1>
        </div>
        <div class="oderdetail__grip"> 
          <div class="oderdetail__row"> 
            <div class="oderdetail__img"> <img src=${caphe[id-1].img} alt=${caphe[id-1].title}></div>
            <div class="oderdetail__content"> 
              <div class="oderdetail__content--text"> 
                <p>${caphe[id-1].title2}</p>
              </div>
              <div class="oderdetail__content--btn"><a href= ${caphe[id-1].url}>ĐẶT MUA NGAY</a></div>
              <div class="oderdetail__content--price"> 
                <h1>Giá:<span>${caphe[id-1].price}</span></h1>
              </div>
            </div>
          </div>
        </div>
            `
        )

        //
        let tra = data[0].tra;
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
            `
        )


        //


        let khac = data[0].khac;
        $(".orderdetail__container").html(
            `
            <div class="oderdetail__heading"> 
          <h1>${khac[id-1].title}</h1>
        </div>
        <div class="oderdetail__grip"> 
          <div class="oderdetail__row"> 
            <div class="oderdetail__img"> <img src=${khac[id-1].img} alt=${khac[id-1].title}></div>
            <div class="oderdetail__content"> 
              <div class="oderdetail__content--text"> 
                <p>${khac[id-1].title2}</p>
              </div>
              <div class="oderdetail__content--btn"><a href= ${khac[id-1].url}>ĐẶT MUA NGAY</a></div>
              <div class="oderdetail__content--price"> 
                <h1>Giá:<span>${khac[id-1].price}</span></h1>
              </div>
            </div>
          </div>
        </div>
            `
        )
    })
   
})


