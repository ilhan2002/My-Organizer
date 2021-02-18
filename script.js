$(function(){
	
	$('ul.events li').click(function(){
		$(this).toggleClass('active')
	});

	$('.container > .add > .buttons > .button:nth-child(2)').click(function(){
		$('.add').animate({opacity:'0'},50,'linear',function(){
			$('.add').animate({height:'0px'},50)
		})
	});

	$('.container > .head > .button').click(function(){
		$('.add').animate({height:'203.264px'},50,'linear',function(){
			$('.add').animate({opacity:'1'},50)
		})
	})

	document.querySelector('input').focus();

});

