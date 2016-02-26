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

function pHolder() {
    return;
}


/*
<script>
        $(document).ready(function(){
            $("button2").click(function(){
                $("div.nav1").animate({
                    left: '0px',
                    width: '9%'
                });
            });
        });
</script>
<script>
     $(document).ready(function(){
         $("div.invisButton").click(function(){
             $("div.nav1").animate({
                 left: '0px',
                 width: '20%'
             });
             $("div.invisButton").animate({
                 left: '0px',
                 width: '0%'
             });
         });
     });
</script>

*/