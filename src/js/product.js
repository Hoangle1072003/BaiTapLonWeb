jQuery(document).ready(function($){

    $.getJSON("/products.json",function(data){
        let products = data[0].caphe;
        for(let i =0; i< products.length;i++){
            $(".menucaphe__list").append(
                `
                <div class="menucaphe__item">
              <div class="menucaphe__item--img"> <a href= "product-detail.html#${products[i].id}"> <img src= ${products[i].img} alt= ${products[i].title}/></a></div>
              <div class="menucaphe__item--name">
                <div class="menucaphe__item--title"> 
                  <h1>${products[i].title}</h1>
                </div>
                <div class="menucaphe__item--price"> 
                  <h1>gia: </h1><span>${products[i].price}</span>
                </div>
              </div>
            </div>
                `
            )
        }
        // đổ dữ liệu trà
        let tra = data[1].tra;
        for(let i =0; i< tra.length;i++){
            $(".tra").append(
                `
                <div class="menucaphe__item">
              <div class="menucaphe__item--img"> <a href="product-detail.html#${tra[i].id}"> <img src= ${tra[i].img} alt= ${tra[i].title}/></a></div>
              <div class="menucaphe__item--name">
                <div class="menucaphe__item--title"> 
                  <h1>${tra[i].title}</h1>
                </div>
                <div class="menucaphe__item--price"> 
                  <h1>gia: </h1><span>${tra[i].price}</span>
                </div>
              </div>
            </div>
                `
            )
        }
        // đổ dữ liệu freeze
        let freeze = data[2].freeze;
        for(let i =0; i< freeze.length;i++){
            $(".freeze ").append(
                `
                <div class="menucaphe__item">
              <div class="menucaphe__item--img"> <a href= "product-detail.html#${freeze[i].id}"> <img src= ${freeze[i].img} alt= ${freeze[i].title}/></a></div>
              <div class="menucaphe__item--name">
                <div class="menucaphe__item--title"> 
                  <h1>${freeze[i].title}</h1>
                </div>
                <div class="menucaphe__item--price"> 
                  <h1>gia: </h1><span>${freeze[i].price}</span>
                </div>
              </div>
            </div>
                `
            )
        }
        // render
        let Khac = data[3].Khac;
        for(let i =0; i< Khac.length;i++){
            $(".khac").append(
                `
                <div class="menucaphe__item">
              <div class="menucaphe__item--img"> <a href= "product-detail.html#${Khac[i].id}"> <img src= ${Khac[i].img} alt= ${Khac[i].title}/></a></div>
              <div class="menucaphe__item--name">
                <div class="menucaphe__item--title"> 
                  <h1>${Khac[i].title}</h1>
                </div>
                <div class="menucaphe__item--price"> 
                  <h1>gia: </h1><span>${Khac[i].price}</span>
                </div>
              </div>
            </div>
                `
            )
        }
        //
        let news = data[4].news;
        for(let i =0; i< news.length;i++){
            $(".box__list").append(
                `
                <div class="box__item"> 
                <div class="box__item--img"> <a href=${news[i].url}> <img src= ${news[i].img} alt= ${news[i].title}/></a></div>
                <div class="box__item--bot"> 
                  <div class="box__item--title"> <a href= ${news[i].urlanh}>
                      <h1>${news[i].title}</h1></a></div>
                  <div class="box__item--date"> 
                    <div class="box__item--icon">
                       <i class="uil uil-calender"></i></div>
                    <div class="box__item--newdate"> 
                      <h1>${news[i].date}</h1>
                    </div>
                  </div>
                </div>
              </div>

                `
            )
        }
       


    })
    $('.global').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
})

