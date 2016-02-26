var expand = 1;

function slideShowInit() {
    //ONLOAD
    setTimeout(slideShow, 500);
}

function slideShow() {
    //THIS IS WHERE THE SLIDES CHANGE (every 5 seconds)
    $("#slideShow").animate({
        opacity: '-=0.1'
    });
    setTimeout(slideShow, 5000);
}

function expandSlideShow() {
    if (expand) {
        $("#slideShow").animate({
            top: '0px',
            right: '0px',
            width: '100%',
            height: '100%'
        });
    }
    else{
        $("#slideShow").animate({
            top: '10px',
            right: '12%',
            width: '65px',
            height: '55px'
        });
    }
    expand = !expand;
}