$(document).ready(function() {
	$(window).scroll(function(){
		var scrollPercent = 100 / $(this).scrollTop()
		if(scrollPercent > 1 || scrollPercent < 0){
			scrollPercent = 1;
		}
		console.log(scrollPercent)
		$(".hero").css({"opacity" : scrollPercent})
		// if($(this).scrollTop() > 150){
		// 	$(".hero").css({"opacity" : "0"})
		// }
		// else {
		// 	$(".hero").css({"opacity" : "1"})
		// }
	})
});