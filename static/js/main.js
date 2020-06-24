jQuery(document).ready(function(){
    "use strict";
    $('#slider-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:450,
            pauseOnHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            anchorBuilder:false
        }
    });
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=100){
            $("header").addClass('secondary');
        }else if($("header").hasClass('secondary')){
            $("header").removeClass('secondary');
        }
    });
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=100){
            $("footer").addClass('secondary');
        }else if($("footer").hasClass('secondary')){
            $("footer").removeClass('secondary');
        }
    });
});