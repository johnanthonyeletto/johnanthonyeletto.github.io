// Initilize Paralax Hero Section
$('.parallax-window').parallax();

// Initilize Scroll Reveal Service Cards
window.sr=ScrollReveal({reset:!0}),sr.reveal(".services-card",{duration:1e3},333);


$(".arrow.bounce.center").click(function(){
  scrollToSection("#services-section");
});

$("a").click(function(e){
  var href = $(this).attr("href");
  
  if(href.charAt(0) == "#" && $(href).prop("tagName").toLowerCase() != 'page'){
    e.preventDefault();
    scrollToSection(href);
    
    $(".nav-item .nav-link").each(function(){
      $(this).parent().removeClass("active");
      $(this).find("span.sr-only").remove();
    });
    
    $(this).parent().addClass("active");
    $(this).append("<span class='sr-only'>(current)</span>");
  } else if(href.charAt(0) == "#" && $(href).prop("tagName").toLowerCase() == 'page'){
    changePage(href);
    console.log("changePage");
  }
  
});

function scrollToSection(id){
  var offset = $("nav.navbar").height();

  $('html, body').animate({
    scrollTop: $(id).offset().top - offset 
  }, 1000);
}

function changePage(id){
  $("page").fadeOut("slow", function(){
    $(id).fadeIn("slow");
  });
  
  if(id == "#home"){
    
    $("section.parallax-window").attr('id', "hero");
  } else {
    $("section.parallax-window").attr('id', "hero-small");
  }
  
  history.pushState(null, null, "bar.html");
  
  var title = $(id).attr("data-title");
  
  console.log(title);
  
  $("section.parallax-window h1").html(title);
  
  jQuery(window).trigger('resize').trigger('scroll');
}