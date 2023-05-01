jQuery(document).ready(function($){
    let id = document.URL.split("#")[1];
    $.getJSON('/products.json', function(data){
        let departmentDetail  = data[8].department;
        $(".department__container").html(
            `
            <div class="department__detail"> 
            <div class="department__detail--row"> 
              <div class="department__detail--title"> 
                <h1>${departmentDetail[id-1].title} </h1>
              </div>
              <div class="department__detail--desc"> 
                <p>${departmentDetail[id-1].desc}</p>
              </div>
            </div>
          </div>
            `
        )
    })
})