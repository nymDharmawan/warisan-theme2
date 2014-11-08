'use strict';

function setBackgroundImage(el){
	var _this = $(el);
	_this.each(function() {
		var bg = $(this).attr('data-background');
		$(this).css('background-image', 'url('+bg+')');
		console.log(bg);
	});
}

function pageScroll(el){
	var _this = $(el);
	_this.each(function(){
		var link = $(this).attr('href');
		$(this).click(function(event) {
			/* Act on the event */
			// event.preventDefault();
			$(link).ScrollTo();
		});
	});
}

$(window).on("scroll" ,function(){
	var currentSlide;
	var win = $(window).scrollTop();
	$('.parallax-section').each(function() {
	var  _offset  = $(this).offset();
	var _id = $(this).attr("id");
	if ((_offset.top - 55 ) < win) {
		
		$('.page-nav').each(function() {
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			};
			if($(this).attr('href') === "#"+_id){
				$(this).addClass('active');
			};
		});
	}; 
	});
}); 


$(document).ready(function() {
	setBackgroundImage('.page');

	pageScroll('.page-nav');
	pageScroll('.main-nav-scroll');

	//
	$.stellar({
		 horizontalScrolling: false 
	});
	 window.scrollReveal = new scrollReveal();
});

$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 2],
        [450, 4],
        [600, 4],
        [700, 4],
        [1000, 5],
        [1200, 5],
        [1400, 6],
        [1600, 7]
      ],
      navigation : false
 
  });

  $(".inline").colorbox({inline:true, width:"75%"});

	 $('#intro').backstretch([
      "images/home-1.jpg"
    , "images/home-2.jpg"
    , "images/home.png"
  ], {duration: 5000, fade: 750});

	 $('.dd').each(function(){
	  $(this).hover(function() {
	    $(this).siblings('.parent').addClass('active');
	  }, function() {
	    /* Stuff to do when the mouse leaves the element */
	    $(this).siblings('.parent').removeClass('active');
	  });
	  });

	  $('.dd-inner').each(function(){
	  $(this).hover(function() {
	    $(this).siblings('.child').addClass('active');
	  }, function() {
	    /* Stuff to do when the mouse leaves the element */
	    $(this).siblings('.child').removeClass('active');
	  });

  });
 
});