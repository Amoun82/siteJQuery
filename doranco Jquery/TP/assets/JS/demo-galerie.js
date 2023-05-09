$(() => {
	console.log('test jQuery') ;

	console.log($('aside a')) ;

	console.log($('figure img')) ;

	$('aside a').click(function (e) { 
		e.preventDefault();

		console.log('test click li') ;

		console.log($(this)) ;

		console.log('recuperez une valeur : ') ;
		console.log($(this).attr('title')) ;

		$('figure img').attr('src' ,`${this}`);
		$('figure figcaption').text($(this).attr('title')) ;

		$('aside a').css('border-color' , 'black') ;
		$(this).css('border-color', 'red') ;

		
	});

})