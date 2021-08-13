function init(){

//header 메뉴 hover E
const header = document.querySelector('header');
const headNav = document.querySelectorAll('.headerNav nav ul li'); //헤더메뉴
const headNav_sub = document.querySelectorAll ('.headerNav-sub > div'); //헤더메뉴 팝업
let num = 0;

for(let i=0; i<headNav.length; i++){
        headNav[i].addEventListener('mouseover',function(){ //헤더메뉴 mouseover
            headNav[num].classList.remove('active');
            headNav_sub[num].classList.remove('active');

            headNav[i].classList.add('active');
            headNav_sub[i].classList.add('active');
            header.classList.add('active');
            headNav[i].style = 'font-weight:800;'
            num = i;
        });
        headNav[i].addEventListener('mouseleave',function(){//헤더메뉴 mouseleave
            headNav[num].classList.remove('active');
            headNav_sub[num].classList.remove('active');
            header.classList.remove('active');
            headNav[i].style = 'font-weight:500;'
        });

        headNav_sub[i].addEventListener('mouseover',function(){  //헤더메뉴 팝업 mouseover
            headNav[num].classList.remove('active');
            headNav_sub[num].classList.remove('active');

            headNav[i].classList.add('active');
            headNav_sub[i].classList.add('active');
            header.classList.add('active');
            headNav[i].style = 'font-weight:800;'
        });
        headNav_sub[i].addEventListener('mouseleave',function(){  //헤더메뉴 팝업 mouseleave
            headNav[num].classList.remove('active');
            headNav_sub[num].classList.remove('active');
            header.classList.remove('active');
            headNav[i].style = 'font-weight:500;'
        });
}

//header 돋보기 클릭E
const headIcon = document.querySelector('.icon');
const iconSub = document.querySelector('.iconsub');

headIcon.addEventListener('click',function(){
    iconSub.classList.toggle('active');
})

//container1 버튼 클릭 이미지 슬라이드
const con1Sub = document.querySelector('.con1all');
const con1btn = document.querySelectorAll('.con1button a');
let res,tagList='',idx=0;

fetch('./json/index.json')
.then(res => res.json())
.then(data => callback(data));

function callback(data){
    data.container1.forEach(function(v,k){
        tagList += `
        <div class="con">
            <img src="${v.img}">
            <div class="text">
                <span>${v.text}</span>
                <p>${v.tit}</p>
                <p>${v.name}</p>
                <p>${v.detail}</p>
            </div>
        </div>`;
    });
    //console.log(tagList)
    con1Sub.innerHTML = tagList;
}
for(let i=0; i<con1btn.length; i++){
    con1btn[i].addEventListener('click',function(){
        if(i == 1){
            if(idx < 4)idx++;
        }else{
            if(idx > 0)idx--;
        }
        let bt = con1Sub.offsetWidth * idx;
        con1Sub.style = `transform:translateX(${-bt}px)`; 
    });
}
//container1 이미지 slick slider
$(".slider").slick({
    arrows:true, /*false 화살표 사라짐*/
    dots: true, /* false 인디게이터 사라짐*/
    infinite: true,
    slidesToShow: 1, // 화면에 보여지는 칸 수
    slidesToScroll: 1, //슬라이드 움직이는 칸 수
    autoplay:false, //자동슬라이드 _ 마우스올리면 멈춤.
    autoplayspeed:300,
    fade: true,
    cssEase: 'linear'
});









}
window.onload = init;