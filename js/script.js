console.log('js');
$('#dropnav').hide();

$(document).ready(function(){

  $('.fa, .fas').click(function(){
    $('#dropnav').toggle();
  });

  // scrolldown smooth animation

  $('#nature').click(function(){
    $('html,body').animate({
      scrollTop: $('#nat-h').offset().top +100}, 1500);
  });

  $('#parks').click(function(){
    $('html,body').animate({
      scrollTop: $('#park-h').offset().top +100}, 1500);
  });

  $('#get-involved').click(function(){
    $('html,body').animate({
      scrollTop: $('#get-inv-h').offset().top +100}, 1500);
  });

  $('#our-work').click(function(){
    $('html,body').animate({
      scrollTop: $('#our-wk-h').offset().top +100}, 1500);
  });

  $('#contact-us').click(function(){
    $('html,body').animate({
      scrollTop: $('#cont-us').offset().top +100}, 1500);
  });

  $('#about-us').click(function(){
    $('html,body').animate({
      scrollTop: $('#abt-us').offset().top +100}, 1500);
  });

  // second drop down nav smooth animation

  $('#nature-two').click(function(){
    $('html,body').animate({
      scrollTop: $('#nat-h').offset().top +100}, 1500);
  });

  $('#parks-two').click(function(){
    $('html,body').animate({
      scrollTop: $('#park-h').offset().top +100}, 1500);
  });

  $('#get-involved-two').click(function(){
    $('html,body').animate({
      scrollTop: $('#get-inv-h').offset().top +100}, 1500);
  });

  $('#our-work-two').click(function(){
    $('html,body').animate({
      scrollTop: $('#our-wk-h').offset().top +100}, 1500);
  });

  $('#contact-us-two').click(function(){
    $('html,body').animate({
      scrollTop: $('#cont-us').offset().top +100}, 1500);
  });

  $('#about-us-two').click(function(){
    $('html,body').animate({
      scrollTop: $('#abt-us').offset().top +100}, 1500);
  });

  $('#nat-read').click(function(){
    $('html,body').animate({
      scrollTop: $('#our-nature').offset().top +100}, 1500);
  });

  // scroll down icon section

  $('#fish-icon').click(function(){
    $('html,body').animate({
      scrollTop: $('#stay').offset().top +350}, 1500);
  });

  $('#aqua-icon').click(function(){
    $('html,body').animate({
      scrollTop: $('#camping').offset().top +350}, 1500);
  });

  $('#lucky-icon').click(function(){
    $('html,body').animate({
      scrollTop: $('#tramping').offset().top +450}, 1200);
  });

  $('.arrow-up').click(function(){
    $('html,body').animate({
      scrollTop: $('#home').offset().top +100}, 1200);
  });

});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
