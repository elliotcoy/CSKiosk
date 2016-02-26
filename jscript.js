function ComputerWhat() {
    $(".nav1").animate({
        left: '-14%'
    });
    $(".invisButton").animate({
        left: '0px',
        width: '6%',
        height: '100%'
    });
    $("#ComputerWhatNav").animate({
        left: '6%'
    });
    $("#CareersNav").animate({
        left: '-8%'
    });
    $("#UNBcsNav").animate({
        left: '-8%'
    });
    $("#ApplyNav").animate({
        left: '-8%'
    });

    $("#ComputerWhat").addClass("navBtn1Selected").removeClass("navBtn1");
	contentManager(1);
}

function Careers() {
    $(".nav1").animate({
        left: '-14%'
    });
    $(".invisButton").animate({
        left: '0px',
        width: '6%',
        height: '100%'
    });
    $("#ComputerWhatNav").animate({
        left: '-8%'
    });
    $("#CareersNav").animate({
        left: '6%'
    });
    $("#UNBcsNav").animate({
        left: '-8%'
    });
    $("#ApplyNav").animate({
        left: '-8%'
    });

    $("#Careers").addClass("navBtn1Selected").removeClass("navBtn1");
	contentManager(6);
}

function UNBcs() {
    $(".nav1").animate({
        left: '-14%'
    });
    $(".invisButton").animate({
        left: '0px',
        width: '6%',
        height: '100%'
    });
    $("#ComputerWhatNav").animate({
        left: '-8%'
    });
    $("#CareersNav").animate({
        left: '-8%'
    });
    $("#UNBcsNav").animate({
        left: '6%'
    });
    $("#ApplyNav").animate({
        left: '-8%'
    });

    $("#UNBcs").addClass("navBtn1Selected").removeClass("navBtn1");
	contentManager(10);
}

function Apply() {
    $(".nav1").animate({
        left: '-14%'
    });
    $(".invisButton").animate({
        left: '0px',
        width: '6%',
        height: '100%'
    });
    $("#ComputerWhatNav").animate({
        left: '-8%'
    });
    $("#CareersNav").animate({
        left: '-8%'
    });
    $("#UNBcsNav").animate({
        left: '-8%'
    });
    $("#ApplyNav").animate({
        left: '6%'
    });

    $("#Apply").addClass("navBtn1Selected").removeClass("navBtn1");
	contentManager(15);
}


function expandNav() {
    $(".nav1").animate({
        left: '0px'
    });
    $(".invisButton").animate({
        left: '0px',
        width: '0%',
        height: '100%'
    });
    $("#ComputerWhatNav").animate({
        left: '-8%'
    });
    $("#CareersNav").animate({
        left: '-8%'
    });
    $("#UNBcsNav").animate({
        left: '-8%'
    });
    $("#ApplyNav").animate({
        left: '-8%'
    });

    $("#ComputerWhat").addClass("navBtn1").removeClass("navBtn1Selected");
    $("#Careers").addClass("navBtn1").removeClass("navBtn1Selected");
    $("#UNBcs").addClass("navBtn1").removeClass("navBtn1Selected");
    $("#Apply").addClass("navBtn1").removeClass("navBtn1Selected");
}

function home() {
	expandNav();
	contentManager(0);
}

function contentManager(val) {
	if(val == 1) { $("#ContentPane").html(topic1); }
	else if(val == 2) { $("#ContentPane").html(topic2); }
	else if(val == 3) { $("#ContentPane").html(topic3); }
	else if(val == 4) { $("#ContentPane").html(topic4); }
	else if(val == 5) { $("#ContentPane").html(topic5); }
	else if(val == 6) { $("#ContentPane").html(topic6); }
	else if(val == 7) { $("#ContentPane").html(topic7); }
	else if(val == 8) { $("#ContentPane").html(topic8); }
	else if(val == 9) { $("#ContentPane").html(topic9); }
	else if(val == 10) { $("#ContentPane").html(topic10); }
	else if(val == 11) { $("#ContentPane").html(topic11); }
	else if(val == 12) { $("#ContentPane").html(topic12); }
	else if(val == 13) { $("#ContentPane").html(topic13); }
	else if(val == 14) { $("#ContentPane").html(topic14); }
	else if(val == 15) { $("#ContentPane").html(topic15); }
	else if(val == 16) { $("#ContentPane").html(topic16); }
	else if(val == 0) { $("#ContentPane").html(topic0); }
}