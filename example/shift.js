$('section').on('mousewheel', function(event) {
   	var st = $(this).scrollTop();
  	var inn = $(this)[0].scrollHeight;
  	var hg = $(this).height();
  	var cl = inn - hg;
 	 	var di = (st / cl) * 100;

    $('section').not(this).each(function(){

      var inn2 = $(this)[0].scrollHeight;
      var hg2 = $(this).height();
      var cl2 = inn2 - hg2;
      var di2 = (cl2 / 100) * di;
      $(this).scrollTop(di2); 
   });
   
});