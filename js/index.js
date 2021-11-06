function init(){

//container1 이미지 슬라이드

$(".slider").slick({
    arrows:true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:200,
    fade: true,
    cssEase: 'linear'
    // slickPlay 재생
    // slickPause 일시정지
});


//container1 재생 일시중지 버튼 클릭

$('.play').on('click',function(){
    $('.slider').slick('slickPlay');
    $('.play').removeClass('active');
    $('.pause').addClass('active');
    
});
$('.pause').on('click',function(){
    $('.slider').slick('slickPause');
    $('.pause').removeClass('active');
    $('.play').addClass('active');
});


//container2 버튼 클릭 이미지 슬라이드
const con2Sub = document.querySelector('.con2sub');
const con2btn = document.querySelectorAll('.con2button a');

let res, subList='', sIdx=0, t=0;

fetch('./json/index.json')
.then(res => res.json())
.then(data => callback(data));

function callback(data){
    data.container2.forEach(function(v,k){
        subList += `
        <li><div>
        <img src="${v.img}">
          <h2>${v.tit}</h2>
          <span>${v.name}</span>
          <p>${v.detail}<br>
              <small>${v.text}</small>
          </p>  
        </div></li>`;
    });
    con2Sub.innerHTML = subList;
}
for(let i=0; i<con2btn.length; i++){
    con2btn[i].addEventListener('click',function(){
        if(i == 1){
            if(sIdx < 3)sIdx++;
        }else{
            if(sIdx > 0)sIdx--;
        }
        con2Sub.style = `transform:translateX(${-33*sIdx}%)`;
    });
}
//container2 이미지 transition
window.addEventListener('scroll',function(){

    const contain2 = document.querySelector('.con2-2');
    const con2SubLi = document.querySelectorAll('.con2sub li');

    let winH = window.innerHeight;

    for(let t=0; t<con2SubLi.length; t++){
        let topFrom = contain2.getBoundingClientRect().top;

        if(topFrom-winH < 0){
            con2SubLi[t].classList.add('active');
        }else{
            con2SubLi[t].classList.remove('active');
        }
    }

//container3 이미지 transition
    const con3Sub = document.querySelector('.con3Sub');
    const con3SubLi = document.querySelectorAll('.con3Sub li');

    for(let c=0; c<con3SubLi.length; c++){
        let FromSub = con3Sub.getBoundingClientRect().top;

        if(FromSub-winH < 0){
            con3SubLi[c].classList.add('active');
        }else{
            con3SubLi[c].classList.remove('active');
        }
    }


//container4 이미지 transition
//const sect = document.querySelector('.all'); //전체배경
const contai4 = document.querySelector('.container4');
const con4SubDiv = document.querySelectorAll('.con4sub div');

for(let d=0; d<con4SubDiv.length; d++){
    let FromSub = contai4.getBoundingClientRect().top;
    //console.log(FromSub)
    
    if(FromSub-winH < 0){
        con4SubDiv[d].classList.add('active');
        //sect.classList.add('active');
        
    }else if(FromSub-winH > 0){
    
        con4SubDiv[d].classList.remove('active');
        //sect.classList.remove('active');
        
    }
}
});
    




}
window.onload = init;