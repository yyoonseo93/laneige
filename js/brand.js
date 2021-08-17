//mousewheel 이벤트

let len = $('section').length; //4번까지만 스크롤이벤트ㅡ
let delta,num=0,move;

$(window).on('mousewheel DOMMouseScroll',function(e){
    delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -10
    
    clearTimeout(move);
    move = setTimeout(function(){
        if(delta < 0){
            if(num < len-1) num++;
        }else{
            if(num > 0) num--;
        }
        $('html,body').animate({
            scrollTop : $(window).height()*num
        });

    },200);
});

window.addEventListener('scroll',function(){

const brandCon3 = document.querySelector('.brandCon3');
const brandCon3H = document.querySelector('.brandCon3 h2');
const brandCon3P = document.querySelector('.brandCon3 p');

let winH = window.innerHeight;

setTimeout(() => {
    if(brandCon3 - winH <= window.scrollY && window.scrollY <= brandCon3){
        brandCon3H.classList.add('active');
        brandCon3P.classList.add('active');
    }else{
        brandCon3H.classList.remove('active');
        brandCon3P.classList.remove('active');
    };
},300);

});

