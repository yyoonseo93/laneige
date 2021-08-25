function sub(){

//mousewheel 이벤트
let len = $('section').length;
let delta,num=0,move;

$(window).on('mousewheel DOMMouseScroll',function(e){
    delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -10
    clearTimeout(move);
    move = setTimeout(function(){
        if(delta < 0){
            if(num < len) num++;
        }else{
            if(num > 0) num--;
        }
        $('html,body').animate({
            scrollTop : $(window).height()*num
        });

        //section 영상재생
        switch(num){
            case 0: video(0,true); break;
            case 1: video(0,true); break;
            case 2: video(1,true); break; 
            case 3: video(4,true); break;
            case 4: video(2,true); break;
            case 5: video(3,true); break;
            case 6: video(5,true); break;
        }
    },300);

});

//영상 재생/정지
function video(n,bln){
    $('.allvideo video').stop().fadeOut(); 
    if(bln){
        $('.allvideo video').eq(n).stop().fadeIn().get(0).play();   
    }else{
        $('.allvideo video').eq(n).stop().fadeIn().get(0).pause();
    }
}
video(0,true);


//con2 mouseenter/mouseleave 영상3개 재생
$('.brconsub > div').on({
    'mouseenter':function(){
        let idx = $(this).index();
        switch(idx){
            case 0: video(1,true); break;
            case 1: video(2,true); break;
            case 2: video(3,true); break;
        }
    },
    'mouseleave':function(){
        video(0,true);
    }
})

//con2 mouseover 기능

const brCon2 = document.querySelectorAll('.brCon2');
const brCon2P = document.querySelector('.brCon2 P');
const brconhov2 = document.querySelectorAll('.ho2');

for(let i=0; i<brCon2.length; i++){

    let num = 0;

    brCon2[i].addEventListener('mouseover',function(){
        brCon2[num].classList.remove('active');
        brconhov2[num].classList.remove('active');

        brCon2[i].classList.add('active');
        brconhov2[i].classList.add('active');
        num=i;
    })

    brCon2[i].addEventListener('mouseleave',function(){
        brCon2[num].classList.remove('active');
        brconhov2[num].classList.remove('active');
    })
}

//con3 영상설정
$('.brandCon3').on(function(){
    delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -10
    if(delta < 0){
        video(0,false).stop().fadeOut();
        $('.brandCon3 div').addClass('active');
    }
    
});

//con5 스크롤
$('.brandCon5').on('mousewheel DOMMouseScroll',function(e){
    let delta2 = e.originalEvent.wheelDelta || e.originalEvent.detail * -10
    if(delta2 < 0){
        if( $(this).scrollTop() < 2400){
            e.stopPropagation();
            setTimeout(function(){ video(2,false) },1000);
        }
        
    }else{
        if( $(this).scrollTop() > 0){
            e.stopPropagation();
        }
        //else if 는 두개의 조건이 맞을 경우 첫번째 조건만 실행하기 때문에 else if 대신 if를 두개다 적어서 실행하게함!
        if($(this).scrollTop() < 1000){
            video(2,true)
        }
    }
});

//con6 스크롤
$('.brandCon6').on('mousewheel DOMMouseScroll',function(e){
    let delta3 = e.originalEvent.wheelDelta || e.originalEvent.detail * -10
    if(delta3 < 0){
       //console.log($(this).scrollTop())
        if( $(this).scrollTop() < 1900){
            e.stopPropagation();
            setTimeout(function(){ video(3,false) },100);
        }else{
            persona.play();
        }
    }else{
        if(
            $(this).scrollTop() > 0){e.stopPropagation();
            }
        if($(this).scrollTop() < 1000){
            video(3,true)
        }
    }
});

}
window.addEventListener('load',sub);