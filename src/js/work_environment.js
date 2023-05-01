jQuery(document).ready(function($){
    $.getJSON("/products.json",function(data){
        let work = data[7].work
        for(let i=0;i<work.length;i++){
            $(".work__news").append(
                `
                <div class="work__new"> 
                <div class="work__new--img"> <img src= ${work[i].img} alt=""></div>
                <div class="work__new--content"> 
                  <div class="work__new--title">
                   <a href="#">
                      <h1>${work[i].title}</h1>
                    </a>
                      <span>${work[i].date} 
                      </span>
                  </div>
                </div>
              </div>
                `
            )
        }


        let workList = data[8].department
        for(let i=0;i<workList.length;i++){
            $(".department__list").append(
                `<div class="department__item"> <a href="departmentDetail.html#${workList[i].id}"> 
                <div class="department__item--title"> 
                  <h1>${workList[i].title}</h1>
                </div>
                <div class="department__item--desc"> 
                  <p>${workList[i].desc}</p>
                </div></a></div>
                `

            )
        }
    })
})