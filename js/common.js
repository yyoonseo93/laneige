$(window).load(function(){
    $('.loading').fadeOut();
});

$(function(){
    $('header').load('inc.html header > div');
    $('footer').load('inc.html footer > div');
});

function nav(){
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

//header 메뉴 숨기기

$(window).scroll(function(){

    if($(window).scrollTop() >= 58){
        $('.header').addClass("scrollDown");
    }else{
        $('.header').removeClass("scrollDown")
    }
});



//header 돋보기 클릭E

const headIcon = document.querySelector('.icon');
const iconSub = document.querySelector('.iconsub');

headIcon.addEventListener('click',function(){
    iconSub.classList.toggle('active');
})

//footeroption

$('.footeroption a').on('click',function(){

    if($(this).hasClass('active')){
        $('.footeroption a').removeClass('active').find('ul').stop().slideUp();
        $('.optionon').removeClass('active').find('ul').stop().slideUp();
        
    }else{
        $('.footeroption a').addClass('active').find('ul').stop().slideDown();
        $('.optionon').addClass('active').find('ul').stop().slideDown();
        
    }
})


}
window.addEventListener('load',nav);