Zepto(function($){
    $('.main a').click(function (e) {
        slide($('.second'), 'left');
        e.preventDefault();
    });
    $('.second a').click(function(e){
        slide($('.main'), 'right');
        e.preventDefault();
    });
    var slide = function(next_page, direction) {        
        var current_page = $('.current');
        next_page.addClass("current in_" + direction);
        current_page.addClass("out_" + direction);
        current_page.one("webkitAnimationEnd animationend oTransitionEnd MSTransitionEnd", function() {
            current_page.removeClass("current out_" + direction);
            return next_page.removeClass("in_" + direction);
        }, true);
    }
});