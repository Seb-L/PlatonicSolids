// WOW
new WOW().init();


// SVG STUDIES
var s = Snap("#bars");
Snap.load("images/bars.svg", onSVGLoaded);

function onSVGLoaded(data) {
    s.append(data);

    // ------- DEFS ------- //
    // BG BAR
    bgBar = s.select('#bg-bar');
    bgBar.attr({
        strokeWidth: 0
    });
    // STUDY 1
    study1 = s.select('#study-1_1_');
    study1.attr({
        x2: 19.5
    });
    // JOB 1
    job1 = s.select('#job-1_1_');
    job1.attr({
        x2: 127.5
    });
    // STUDY 2
    study2 = s.select('#study-2_1_');
    study2.attr({
        x2: 341.5
    });
    // JOB 2
    job2 = s.select('#job-2_1_');
    job2.attr({
        x2: 450
    });

    // ------- ANIMES ------- //

    var duration = 500;

    $('#studies').waypoint(function() {

        // BG BAR
        if (bgBar.attr('stroke-width') < '1px') {
            bgBar.animate({
                strokeWidth: 80
            }, duration, mina.easeout);
        }

        // STUDY 1
        setTimeout(function() {
            study1.animate({
                x2: 127.5
            }, duration, mina.easeout);

            $('#d-study-1').animate({
                opacity: 1
            });
        }, duration * 2);

        // JOB 1
        setTimeout(function() {
            job1.animate({
                x2: 234.54
            }, duration, mina.easeout);

            $('#d-job-1').animate({
                opacity: 1
            });
        }, duration * 3);

        // STUDY 2
        setTimeout(function() {
            study2.animate({
                x2: 450
            }, duration, mina.easeout);

            $('#d-study-2').animate({
                opacity: 1
            });
        }, duration * 4);

        // JOB 2
        setTimeout(function() {
            job2.animate({
                x2: 880
            }, duration, mina.easeout);

            $('#d-job-2').animate({
                opacity: 1
            });
        }, duration * 5);

        // JOB 3
        setTimeout(function() {
            $('#d-job-3').animate({
                opacity: 1
            });
        }, duration * 6 - duration / 2);

    }, {
        offset: '50%'
    });

}

// REFS 
$(document).ready(function() {

    $('.slider-print').hide();
    $('.slider-cgi').hide();

    $('#btn-web').click(function(event) {
        $('a', '#select').removeClass('active');
        $('.slider-print').hide();
        $('.slider-cgi').hide();
        $('.slider-web').show();
        $(this).addClass('active');
    });

    $('#btn-print').click(function(event) {
        $('a', '#select').removeClass('active');
        $('.slider-cgi').hide();
        $('.slider-web').hide();
        $('.slider-print').show();
        $(this).addClass('active');
    });

    $('#btn-cgi').click(function(event) {
        $('a', '#select').removeClass('active');
        $('.slider-print').hide();
        $('.slider-web').hide();
        $('.slider-cgi').show();
        $(this).addClass('active');
    });

});



// NIVO LIGHTBOX

$(document).ready(function() {
    $('.lightbox').nivoLightbox();
});