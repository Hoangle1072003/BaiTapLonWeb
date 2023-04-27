const data =[
    {
        id:1,
        title: "Môi trường làm việc của sự quan tâm",
        desc: "Trong hơn 5 năm, Highlands đã tăng 39 bậc từ hạng 94 lên hạng 55, đây là cả một quá trình nỗ lực to lớn của chúng mình trong việc xây dựng văn hóa Quan tâm & Hỗ trợ lẫn nhau. Tại Highlands, chúng mình được lắng nghe, trao quyền và đối xử như một thành viên trong gia đình. Đây là nơi làm việc lý tưởng mà mình tin bạn đang tìm kiếm.",
        image1: "/src/img/slider1__HomePage.jpg",
        image2: "/src/img/slider2_hoamePage.jpg"
    },
    {
        id:2,
        title: "Môi trường làm việc của sự tin tưởng",
        desc: "Trong hơn 4 năm, Highlands Coffee đã tăng 48 bậc từ hạng 94 lên hạng 46, đây là cả một quá trình nỗ lực to lớn của chúng tôi trong việc xây dựng văn hóa Quan tâm & Hỗ trợ lẫn nhau. Tại Highlands Coffee, nơi làm việc mà toàn thể nhân viên chúng ta được lắng nghe, trao quyền và đối xử như một thành viên trong gia đình. Đây là nơi làm việc lý tưởng mà bạn đang tìm kiếm.",
        image1: "/src/img/slider1__HomePage.jpg",
        image2: "/src/img/slider2_hoamePage.jpg"
    },
    {
        id:3,
        title: "Môi trường làm việc của sự nỗ lực vươn lên",
        desc: "Highlands Coffee được vinh danh “Top 50 thương hiệu nhà tuyển dụng hấp dẫn sinh viên Việt Nam 2020, Đây là kết quả từ cuộc khảo sát trực tuyến tại Anphabe với sự tham gia của hơn 25.000 sinh viên đến từ 70 trường đại học trên toàn quốc.",
        image1: "/src/img/slider1__HomePage.jpg",
        image2: "/src/img/slider2_hoamePage.jpg"
    }
]

const img1 = document.querySelector('.image1')
const img2 = document.querySelector('.image2')
const title = document.querySelector('.title')
const desc = document.querySelector('.desc')

const prevBtn= document.querySelector('.pre-btn')
const nextvBtn= document.querySelector('.next-btn')

let index =0
window.addEventListener('DOMContentLoaded',function(){
    show()
})
function show() {
    const item = data[index]
    title.textContent= item.title
    desc.textContent= item.desc
    img1.src = item.image1
    img2.src = item.image2
    
}
// show next
nextvBtn.addEventListener('click',function(){
    index++
    if(index>data.length -1){
        index=0
    }
    show()
})

prevBtn.addEventListener('click',function(){
    index--
    if(index<0){    
        index = data.length - 1
    }
    show()
})