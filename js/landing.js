$(document).ready(function() {
	$(window).scroll(function(){
		var scrollPercent = 100 / $(this).scrollTop()
		if(scrollPercent > 1 || scrollPercent < 0){
			scrollPercent = 1;
		}
		$(".hero").css({"opacity" : scrollPercent})
	})
});
$(document).ready(function (){
	$('.test, .nav-link, .navbar-brand, .new-button').click(function() {
	    var sectionTo = $(this).attr('href');
	    $('html, body').animate({
	      scrollTop: $(sectionTo).offset().top+-50
	    }, 1200);
	});
});
$(window).on('load', function() {
  $('.fade_btn').delay(1500).fadeIn()
})

