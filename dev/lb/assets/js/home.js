// Initilize Paralax Hero Section
$('.parallax-window').parallax();

// Initilize Scroll Reveal Service Cards
window.sr=ScrollReveal({reset:!0}),sr.reveal(".services-card",{duration:1e3},333);


$(".arrow.bounce.center").click(function(){
  scrollToSection("#services-section");
});

$("a").click(function(e){
  var href = $(this).attr("href");
  
  if(href.charAt(0) == "#"){
    e.preventDefault();
    scrollToSection(href);
    
    $(".nav-item .nav-link").each(function(){
      $(this).parent().removeClass("active");
      $(this).find("span.sr-only").remove();
    });
    
    $(this).parent().addClass("active");
    $(this).append("<span class='sr-only'>(current)</span>");
  }
  
});

function scrollToSection(id){
  var offset = $("nav.navbar").height();

  $('html, body').animate({
    scrollTop: $(id).offset().top - offset 
  }, 1000);
}