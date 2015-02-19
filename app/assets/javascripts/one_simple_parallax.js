$(window).scroll(function() {
  $('#parallax-text').oneSimpleParallax();
});

(function($){
  $.fn.oneSimpleParallax = function( options ) {
    var defaults = {
      imgs: '#parallax-image',
      info: '.main-info'
    };
    options = $.extend(defaults, options);
    return this.each(function(){
      var self = $(this)
        , scrollPos = $(window).scrollTop()
        ;

      var imgs = options.imgs
        , info = options.info
        ;
      self.css({
        'margin-top' : -(scrollPos/13)+"px"
        , 'opacity' : 1-(scrollPos/500)
      });
      $(info).css({'top':(scrollPos*1.1)+"px"});
      console.log($(info).css('top')+' scrollPos='+scrollPos);
      $(imgs).css({
        'background-position' : 'center ' + (-scrollPos/8)+"px"
      });
    });
  }
})(jQuery);

