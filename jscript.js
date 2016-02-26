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
    if (val == 1) {
        $("#ContentPane").html(topic1);
        $("#Topic1").addClass("navBtn2Selected").removeClass("navBtn2");
        $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
    }
    else if (val == 2) {
        $("#ContentPane").html(topic2);
        $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic2").addClass("navBtn2Selected").removeClass("navBtn2");
        $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
    }
    else if (val == 3) {
        $("#ContentPane").html(topic3);
        $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic3").addClass("navBtn2Selected").removeClass("navBtn2");
        $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
    }
    else if (val == 4) {
        $("#ContentPane").html(topic4);
        $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic4").addClass("navBtn2Selected").removeClass("navBtn2");
        $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
    }
    else if (val == 5) {
        $("#ContentPane").html(topic5);
        $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic5").addClass("navBtn2Selected").removeClass("navBtn2");
        $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
    }
    else if (val == 6) {
        $("#ContentPane").html(topic6);
        $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic6").addClass("navBtn2Selected").removeClass("navBtn2");
        $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
    }
    else if (val == 7) {
        $("#ContentPane").html(topic7);
        $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic7").addClass("navBtn2Selected").removeClass("navBtn2");
        $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
    }
    else if (val == 8) {
        $("#ContentPane").html(topic8);
        $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic8").addClass("navBtn2Selected").removeClass("navBtn2");
        $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
        $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
    }
	else if (val == 9) {
	    $("#ContentPane").html(topic9);
	    $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic9").addClass("navBtn2Selected").removeClass("navBtn2");
	    $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
	}
	else if (val == 10) {
	    $("#ContentPane").html(topic10);
	    $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic10").addClass("navBtn2Selected").removeClass("navBtn2");
	    $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
	}
	else if (val == 11) {
	    $("#ContentPane").html(topic11);
	    $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic11").addClass("navBtn2Selected").removeClass("navBtn2");
	    $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
	}
	else if (val == 12) {
	    $("#ContentPane").html(topic12);
	    $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic12").addClass("navBtn2Selected").removeClass("navBtn2");
	    $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
	}
	else if (val == 13) {
	    $("#ContentPane").html(topic13);
	    $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic13").addClass("navBtn2Selected").removeClass("navBtn2");
	    $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
	}
	else if (val == 14) {
	    $("#ContentPane").html(topic14);
	    $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic14").addClass("navBtn2Selected").removeClass("navBtn2");
	    $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
	}
	else if (val == 15) {
	    $("#ContentPane").html(topic15);
	    $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic15").addClass("navBtn2Selected").removeClass("navBtn2");
	    $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
	}
	else if (val == 16) {
	    $("#ContentPane").html(topic16);
	    $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic16").addClass("navBtn2Selected").removeClass("navBtn2");
	    $("#Topic0").addClass("navBtn2").removeClass("navBtn2Selected");
	}
	else if (val == 0) {
	    $("#ContentPane").html(topic0);
	    $("#Topic1").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic2").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic3").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic4").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic5").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic6").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic7").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic8").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic9").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic10").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic11").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic12").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic13").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic14").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic15").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic16").addClass("navBtn2").removeClass("navBtn2Selected");
	    $("#Topic0").addClass("navBtn2Selected").removeClass("navBtn2");
	}
}