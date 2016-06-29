/**
 * Created by owenhong on 2016/6/26.
 */

$("body").on('touchStart',function(){})



$("header .btn").click(function(){
    $(".drop-box").slideToggle();
});





// pure JS
var elem = document.getElementById('mySwipe');
window.mySwipe = Swipe(elem, {
    startSlide: 4,
    auto: 3000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, element) {
//     console.log(mySwipe.slide(1, 100))

    },
    transitionEnd: function(index, element) {
        console.log("go2")
    }
});






