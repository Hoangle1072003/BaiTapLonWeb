jQuery(document).ready(function($){
    $.getJSON("/products.json",function(data){
        let work = data[7].work
        for(let i=0;i<work.length;i++){
            $(".work__news").append(
                `
                <div class="work__new"> 
                <div class="work__new--img"> <img src= ${work[i].img} alt=""></div>
                <div class="work__new--content"> 
                  <div class="work__new--title"> <a href="#">
                      <h1>${work[i].title}</h1></a><span>${work[i].date} </span></div>
                </div>
              </div>
                `
            )
        }
    })
})