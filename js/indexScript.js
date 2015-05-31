$(document).ready(function () {
    "use strict";
    $("#right-list").hide();
    
    function fadeInArea(area) {
        $(area).fadeIn(500);
    }
    function fadeOutArea(area) {
        $(area).fadeOut(500);
    }
    
    
    $("#left-back").click(function () {
        $(this).css('background', '#000000');
    });
    
    $("#right-back").hover(function () {
        $("#right-list").delay(50).fadeIn(500);
    }, function () {
        $("#right-list").delay(5).fadeOut(500);
    });
    
    
    
    $("#leftImg").hide().delay(500).fadeIn(500).delay(350).fadeOut(500);
    $("#rightImg").hide().delay(500).fadeIn(500).delay(350).fadeOut(500);
    
    
    
    
    
    
    
    /*
    $("#right-back").hover(function () {
        $(this).css('background', '#000000');
    }, function () {
        $(this).css('background', '#ffffff');
    });
    */
    
    
    
    
    
});
