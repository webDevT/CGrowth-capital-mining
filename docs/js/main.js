$(function(){

$('.menu-btn').click(function(){
    $('.menu').addClass('active');
});
$('.close-btn').click(function(){
    $('.menu').removeClass('active');
})



});$(".smooth").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() < 100) {
      $(".top").fadeOut();
    } else {
      $(".top").fadeIn();
    }
  });