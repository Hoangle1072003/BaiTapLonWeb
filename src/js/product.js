jQuery(document).ready(function($){

    $.getJSON("/products.json",function(data){
        let products = data[0].caphe;
        for(let i =0; i< products.length;i++){
            $(".menucaphe__list").append(
                `
                <div class="menucaphe__item">
              <div class="menucaphe__item--img"> <a href= ${products[i].url}> <img src= ${products[i].img} alt= ${products[i].title}/></a></div>
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
              <div class="menucaphe__item--img"> <a href= ${tra[i].url}> <img src= ${tra[i].img} alt= ${tra[i].title}/></a></div>
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
              <div class="menucaphe__item--img"> <a href= ${freeze[i].url}> <img src= ${freeze[i].img} alt= ${freeze[i].title}/></a></div>
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
        //
        let Khac = data[3].Khac;
        for(let i =0; i< Khac.length;i++){
            $(".khac").append(
                `
                <div class="menucaphe__item">
              <div class="menucaphe__item--img"> <a href= ${Khac[i].url}> <img src= ${Khac[i].img} alt= ${Khac[i].title}/></a></div>
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

    })
    $('.global').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
})