var expand = true;
var slide = false;

function slideShow() {
    if (slide) {
        $("#slide2").animate({
            opacity: '0.0'
        }, 1000);
    }
    else {
        $("#slide2").animate({
            opacity: '1.0'
        }, 1000);
    }
    slide = !slide;
    setTimeout(slideShow, 5000);
    return;
}

function expandSlideShow() {
    if (!slide) {
        slide = false;
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
		home();
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