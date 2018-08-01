$(function () { $(".typing").typed({ strings: ["John Eletto", "Developer", "Styde", "Student", "Programmer", "Tutor", "Web Designer"], typeSpeed: 200, loop: !0 }) });

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