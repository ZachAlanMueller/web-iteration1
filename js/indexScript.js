$(document).ready(function () {
    "use strict";
    $("#right-list").hide();
    
    function fadeInArea(area) {
        $(area).fadeIn(500);
    }
    function fadeOutArea(area) {
        $(area).fadeOut(500);
    }
    function foreverLoop() {
        setInterval(function () { $("#leftImg").delay(500).fadeIn(500).delay(350).fadeOut(500).delay(5000);
            $("#rightImg").delay(500).fadeIn(500).delay(350).fadeOut(500).delay(5000); }, 3000);

    }
    
    $("#left-back").click(function () {
        $(this).css('background', '#000000');
    });
    
    $("#right-back").hover(function () {
        $("#right-list").delay(630).fadeIn(500);
    }, function () {
        $("#right-list").delay(0).fadeOut(100);
    });
    
    
    
    $("#leftImg").hide();
    $("#rightImg").hide();
    foreverLoop();
    
    
    
    
    
    
    
    /*
    $("#right-back").hover(function () {
        $(this).css('background', '#000000');
    }, function () {
        $(this).css('background', '#ffffff');
    });
    */
    
    
    
    
    
});
