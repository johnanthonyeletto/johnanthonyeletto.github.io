$(function () {

    var options = {
        strings: ["", "John Eletto<span class='text-primary'>.</span>", "a software engineer<span class='text-primary'>.</span>",  "a tutor<span class='text-primary'>.</span>", "a drummer<span class='text-primary'>.</span>"],
        typeSpeed: 150,
        loop: !0
    };

    var typed = new Typed(".typing", options);
});

function isInView(el) {
    var vidTop = $(el).offset().top - $(window).scrollTop();
    var vidBottom = vidTop + $(el).height();

    return (vidTop >= -100 && vidBottom < window.innerHeight + 100);
}
function checkVid() {

    $("video").each(function () {
        if (isInView($(this))) {                    // visible?
            $(this)[0].play();    // play if not playing
        }
        else {
            $(this)[0].pause();  // pause if not paused
        }
    });
}
$(document).on("scroll", function () {
    checkVid();
});

$(document).ready(function () {
    checkVid();

});
