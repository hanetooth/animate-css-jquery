(function ( $ ) {
	/**
	 * to add desired animation class to the group of elements
	 * @param {string} aniType     [class name to animate]
	 * @param {integer} time [time delay between animations]
	 */
	 $.fn.addAnimation = function(aniType, time){

	 	var elements = this;
	 	var _hasClass = $.isArray(aniType) ? aniType[0] : aniType;
	 	if(!elements.hasClass(_hasClass)){

	 		if(!time){ //for only one element
	 			return elements.addClass(aniType).css('visibility', 'visible');
	 		}

	 		return $(elements).each( function(index) { //for group of elements
	 			var $element = $(this);
	 			if($.isArray(aniType)){
	 				if( index%2 == 0 ){
	 					$element.delay(time*index).queue(function(next){
	 						$(this).addClass(aniType[0]).css('visibility', 'visible');
	 						next();
	 					});
	 				}else{
	 					$element.delay(time*index).queue(function(next){
	 						$(this).addClass(aniType[1]).css('visibility', 'visible');
	 						next();
	 					});
	 				}
	 			}else{
	 				$element.delay(time*index).queue(function(next){
	 					$(this).addClass(aniType).css('visibility', 'visible');
	 					next();
	 				});
	 			}
	 		});
	 		
	 	}
	 };
	 /**
	  * Remove added animation from the elements
	  * @param  {string} aniType     [class name to remove from the element]
	  */
	  $.fn.removeAnimation = function( aniType){
	  	return this.each(function(){
	  		$(this).removeClass(aniType); //.css('visibility', 'hidden')
	  	});
	  };
	  /**
    * Form:  http://upshots.org/javascript/jquery-test-if-element-is-in-viewport-visible-on-screen
    */
    $.fn.isOnScreen = function(test){

    	var height = this.outerHeight();
    	var width = this.outerWidth();

    	if(!width || !height){
    		return false;
    	}

    	var win = $(window);

    	var viewport = {
    		top : win.scrollTop(),
    		left : win.scrollLeft()
    	};
    	viewport.right = viewport.left + win.width();
    	viewport.bottom = viewport.top + win.height();

    	var bounds = this.offset();
    	bounds.right = bounds.left + width;
    	bounds.bottom = bounds.top + height;

    	var showing = {
    		top : viewport.bottom - bounds.top,
    		left: viewport.right - bounds.left,
    		bottom: bounds.bottom - viewport.top,
    		right: bounds.right - viewport.left
    	};

    	if(typeof test == 'function') {
    		return test(showing);
    	}

    	return showing.top > 0
    	&& showing.left > 0
    	&& showing.right > 0
    	&& showing.bottom > 0;
    };
 }( jQuery ));