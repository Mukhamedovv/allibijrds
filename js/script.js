// $('.menu').hide();

$(function(){
    $('.btn').on('click',function(){
        $('.menu').toggleClass('active');
  })

//     $(window).resize(function(){
//        if($(window).width() > 991){
//            $('nav ul').removeAttr('style');
//        }
// })
})


$(function(){
    $('.section-2_js').on('click', function(){
      $('.w').show('.w::before');
    })
})