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
