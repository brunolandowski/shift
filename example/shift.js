(function($) {
        // définition du plugin jQuery 
        $.fn.reverseText = function(params) {
        
        $(this).each(function( index ) {
                $('section').on('mousewheel', function(event) {
                        console.log(this);
                        var st = $(this).scrollTop(),
                        inn = $(this)[0].scrollHeight,
                        hg = $(this).height(),
                        cl = inn - hg,
                        di = (st / cl) * 100;

                        $('section').not(this).each(function(){

                                var     inn2 = $(this)[0].scrollHeight,
                                        hg2 = $(this).height(),
                                        cl2 = inn2 - hg2,
                                        di2 = (cl2 / 100) * di;
      
                                $(this).scrollTop(di2); 
                        });
   
                });
        });     


        
        

        return this;
        };
})(jQuery);