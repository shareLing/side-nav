$(function(){
	$(".nav .list li a").hover(function(){
	
		$(this).stop().animate({"margin-top":-50},300)
	},
	//鼠标移开
	function(){
		$(this).stop().animate({"margin-top":0},300)
	}
	)
})