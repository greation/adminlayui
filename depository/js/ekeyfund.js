$(".tellnum").click(function(){
	$(".tellnumdetail").toggle();
})
$(".tellnum").mouseover(function(){
	$(".tellnumdetail").show();
})
$(".tellnum").mouseleave(function(){
	setTimeout(function(){
		$(".tellnumdetail").hide().fadeOut();
	},1000)
})





