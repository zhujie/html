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
    auto: 2000,
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

});
$("#performanceSelect").change(function(){
    var $val = Number($(this).val());

    $(".data-list").eq($val).show().siblings().hide();

})




var list = [
    {content: "css/img/car-details/slider01.jpg"},
    {content: "css/img/car-details/slider01.jpg"},
    {content: "css/img/car-details/slider01.jpg"},
    {content: "css/img/car-details/slider01.jpg"},
    {content: "css/img/car-details/slider01.jpg"},
    {content: "css/img/car-details/slider01.jpg"},
    {content: "css/img/car-details/slider01.jpg"}
];


var S = new iSlider(document.getElementById('iSlider-wrapper'), list, {
    isLooping: 1,
    isOverspread: 1,
    isAutoplay: 2,
    animateTime: 800,
    animateType: 'flow'
});


var characterList = [
    {
        content: '<div class="">' +
          '<img src="css/img/car-details/tech1.jpg" alt=""/>' +
        '<img class="change-img animated infinite" src="css/img/car-details/tech1-1.png" alt=""/>' +
        '<h3>斯巴鲁智能驾驶提升系统 (SI-DRIVE)</h3>' +
        '<p>斯巴鲁的核心技术之一SI-DRIVE，为驾驶者提供了三种不同的驾驶模式。驾驶者可以根据路况和喜好，随心所欲地选择驾驶模式。这凌驾于传统技术之上的创新科技，实现了高性能驾驶和环境保护的完美平衡。</p>' +
        '</div>'
    },
    {
        content: ''+
        '<div class="test-box">' +
        '<img src="css/img/car-details/tech1.jpg" alt=""/>' +
        '<img class="change-img animated infinite" src="css/img/car-details/tech1-1.png" alt=""/>' +
        '<h3>斯巴鲁智能驾驶提升系统 (SI-DRIVE)</h3>' +
        '<p>斯巴鲁的核心技术之一SI-DRIVE，为驾驶者提供了三种不同的驾驶模式。驾驶者可以根据路况和喜好，随心所欲地选择驾驶模式。这凌驾于传统技术之上的创新科技，实现了高性能驾驶和环境保护的完美平衡。</p>' +
        '</div>'
    }
];

var Ss = new iSlider(document.getElementById('d3'), characterList, {
    isLooping: 1,
    isOverspread: 1,
    isAutoplay: 2,
    animateTime: 800,
    animateType: 'rotate'
});














