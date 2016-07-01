/**
 * Created by owenhong on 2016/6/26.
 */

$("body").on('touchStart',function(){})



$("header .btn").click(function(){
    $(".drop-box").slideToggle();
});


function vidplay() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}


$("#myVideo").click(function(){
    vidplay();
});


// pure JS
var elem = document.getElementById('mySwipe');
window.mySwipe = Swipe(elem, {
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, element) {
        $("body").scrollTop(0);
        $(".core-banner-index li").eq(index).addClass('cur').siblings().removeClass('cur')


        var $this_height = $(".core-box").eq(index).height();

        $(".swipe-wrap").css('height',$this_height);
    },
    transitionEnd: function(index, element) {
    }
});



