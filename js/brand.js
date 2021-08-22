//mousewheel 이벤트

let len = $('section').length; //4번까지만 스크롤이벤트!
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



$('.brandCon5').on('mousewheel DOMMouseScroll',function(e){
    let delta2 = e.originalEvent.wheelDelta || e.originalEvent.detail * -10
    if(delta2 < 0){
        if( $(this).scrollTop() < 1700){e.stopPropagation();}
    }else{
        if( $(this).scrollTop() > 0){e.stopPropagation();}
    }
});

$('.brandCon7').on('mousewheel DOMMouseScroll',function(e){
    let delta3 = e.originalEvent.wheelDelta || e.originalEvent.detail * -10
    if(delta3 < 0){
        if( $(this).scrollTop() < 900){
            e.stopPropagation();
        }else{
            persona.play();
        }
    }else{
        if( $(this).scrollTop() > 0){e.stopPropagation();}
    }
});


//con2 mouseover 기능

    
const brCon2 = document.querySelectorAll('.brCon2');
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
