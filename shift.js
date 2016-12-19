/*!
 * Shift 1.0.0
 * https://github.com/brunolandowski/shift
 */
(function($) {
        $.fn.shift = function(params) {
        
                $(this).each(function( index ) {
                        // Get selector name
                        var selecteur = $(this)[0].tagName;
                        
                        // Event when mouse-wheel is activated
                        $(this).on('mousewheel', function(event) {

                                // Get scrolled pixel
                                var     st = $(this).scrollTop(),

                                        // Get the window height
                                        inn = $(this)[0].scrollHeight,
                                        
                                        // Get height of the element being scrolled        
                                        hg = $(this).height(),
                                        

                                        // Window height minus element height
                                        cl = inn - hg,
                                        di = (st / cl) * 100;

                        $(selecteur).not(this).each(function(){
                                var     inn2 = $(this)[0].scrollHeight,
                                        hg2 = $(this).height(),
                                        cl2 = inn2 - hg2,
                                        di2 = (cl2 / 100) * di;
      
                                $(this).scrollTop(di2); 
                        });
   
                });
        });
        // Prevend conflicts with this     
        return this;
        };
})(jQuery);

console.log("%cNexus plugin made by Bruno Landowski", "background: #333; color: #bdbd0a; padding: 5px 10px;");
console.log("%chttp://brunolandowski.fr", "color:#333");
console.log("%chttps://github.com/brunolandowski", "color:#333");