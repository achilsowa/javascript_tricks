/*
 *This is a directive to stop scrolling a block when the bottom is visible
 * it needs jquery.sticky-kit.min.js to works
 * https://github.com/leafo/sticky-kit/blob/master/dist/sticky-kit.min.js
*/


function stickyBlock ($scope, $element, attrs) {

    if ($(window).width() < 768) return;
    var $anchor = $(attrs.anchor);
    var top = attrs.top ? parseInt(attrs.top) : 0;
    
    var relocate = function () {
	
	if ($.isFunction($.fn.stick_in_parent)) {
	    
	    if ($(window).width() <= 768) {
		$element.trigger('sticky_kit:detach');
		return;
	    } else {
		
		// Enabling Sticky Feature for Width Greater than 992px
		$element.stick_in_parent({
		    parent: attrs.anchor,
		    offset_top: top
		});
	    }
	    // Firing Sticky Recalculate on Screen Resize
	    return function(e) {
		return $(document.body).trigger("sticky_kit:recalc");
	    };
	}
    }
    $(window).bind('resize', relocate);
    setTimeout(function () {
	relocate();
    }, 1);
    
    $element.on('$destroy', function (){
        $(window).unbind('resize', relocate);
    });
}
