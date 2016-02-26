var expand = 1;
var slide = -1;

function slideShow() {
    if (slide) {
        $("#slide2").animate({
            opacity: '=0.0'
        });
    }
    else {
        $("#slide2").animate({
            opacity: '=1.0'
        });
    }
    slide = !slide;
    setTimeout(slideShow(), 1000);
    return;
}

function expandSlideShow() {
    if (slide == -1) {
        slide = 0;
        slideShow();
    }
    if (expand) {
        $("#slideShow").animate({
            top: '0px',
            right: '0px',
            width: '100%',
            height: '100%'
        });
        $("#exit").animate({
            opacity: '0.0'
        });

    }
    else{
        $("#slideShow").animate({
            top: '2%',
            right: '22px',
            width: '98px',
            height: '55px'
        });
        $("#exit").animate({
            opacity: '1.0'
        });
    }
    expand = !expand;
}