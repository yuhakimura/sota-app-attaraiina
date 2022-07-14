$(function($){
    $('#head-curve').arctext({radius: 500});

    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });

      window.onload = function(){
        const spinner = document.getElementById('loading');
        spinner.classList.add('loaded');
      }
})