$(function(){

  $('.skills__btn').on('click', function(){
    $(this).parents('.skills__item').find('.skills__desc').slideToggle();
    $(this).parents('.skills__item').toggleClass('active');

    // $(this).parents('.skills__item').find('.skill__desc').height();


    if ($(this).parents('.skills__item').hasClass('active')) {
      $(this).text('Show less');
    } else {
      $(this).text('Read more');
    }

    // console.log($(this).parent().find('.skills__item').height());
  });





  
});