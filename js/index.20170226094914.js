(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/lantern_logo_nice-118.png' : 'images/lantern_logo_nice-59.png');


var a='data-src'; if($('.js-2 .slide2').hasAttr('src')) { a='src'; } $('.js-2 .slide2').attr(a, (dpi>1) ? 'images/bingwallpaper-2017-02-19-1920.jpg' : 'images/bingwallpaper-2017-02-19-960.jpg');
var a='data-src'; if($('.js-2 .slide3').hasAttr('src')) { a='src'; } $('.js-2 .slide3').attr(a, (dpi>1) ? 'images/greatsanddunes-1920.jpg' : 'images/greatsanddunes-960.jpg');};
if(!window.HTMLPictureElement){r();}
$('.js-2 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});
});