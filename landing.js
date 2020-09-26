$(document).ready(function() {
	$(window).scroll(function(){
		var scrollPercent = 100 / $(this).scrollTop()
		if(scrollPercent > 1 || scrollPercent < 0){
			scrollPercent = 1;
		}
		$(".hero").css({"opacity" : scrollPercent})
	})
});