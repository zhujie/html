/**
 * Created by owenhong on 2016/6/26.
 */

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 75 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);



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




$(".select-color li").click(function(){
    var $img = $(this).data('img');
    $(this).addClass('cur').siblings().removeClass('cur');

    $(".car-img img").attr("src",$img);

})

// pure JS
var elem = document.getElementById('mySwipe2');
window.mySwipe = Swipe(elem, {
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, element) {
        $("#swipe-list1 li").eq(index).addClass('cur').siblings().removeClass('cur')

        //var $this_height = $(".core-box").eq(index).height();
        //
        //$(".swipe-wrap").css('height',$this_height);
    },
    transitionEnd: function(index, element) {
    }
});
// pure JS
var elem = document.getElementById('mySwipe3');
window.mySwipe = Swipe(elem, {
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, element) {
        $("#swipe-list2 li").eq(index).addClass('cur').siblings().removeClass('cur')

        //var $this_height = $(".core-box").eq(index).height();
        //
        //$(".swipe-wrap").css('height',$this_height);
    },
    transitionEnd: function(index, element) {
    }
});
// pure JS
var elem = document.getElementById('mySwipe4');
window.mySwipe = Swipe(elem, {
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, element) {
        $("#swipe-list4 li").eq(index).addClass('cur').siblings().removeClass('cur')

        //var $this_height = $(".core-box").eq(index).height();
        //
        //$(".swipe-wrap").css('height',$this_height);
    },
    transitionEnd: function(index, element) {
    }
});


$("#configList select").change(function(){
    var $val = Number($(this).val());

    $(".con1").eq($val).show().siblings().hide();

})

























