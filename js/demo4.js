
$(function(){
	$(".nav .list li").hover(function(){
	
		$(this).find("div").stop().slideDown();
	},
	//鼠标移开
	function(){
		$(this).find("div").stop().slideUp();
	}
	)

})