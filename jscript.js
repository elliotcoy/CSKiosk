function ComputerWhat() {
    $("div.nav1").animate({
        left: '-14%'
    });
    $("div.invisButton").animate({
        left: '0px',
        width: '6%'
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
}

function expandNav() {
    $("div.invisButton").click(function () {
        $("div.nav1").animate({
            left: '0px'
        });
        $("div.invisButton").animate({
            left: '0px',
            width: '0%'
        });
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