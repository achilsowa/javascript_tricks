/*
  * Simple directive to have a block of fixed height, that is fixed on 
  * the screen, even on scrolling
*/

function fixedHeight() {
    return {
        restrict: 'A',
        link: function ($scope, $element, attrs) {
	    if ($(window).width() < 768) return;
            var adjust = function () {
		
		var u_top = attrs.top ? parseInt(attrs.top) : 0;
                var w_h = $(window).height();
                var top = $element.offset().top;
                var final_height = w_h - top - u_top;
		
		var real_height = $element.get(0).scrollHeight;
                if (attrs.restrict && real_height && real_height < final_height)
		    final_height = real_height;
		
                $element.height(final_height);
            };


            $(window).bind('resize', adjust);
            setTimeout(function () {
                $(window).trigger('resize');
            }, 1);

            $element.on('$destroy', function (){
                $(window).unbind('resize', adjust);
            });
        }
    };
}
