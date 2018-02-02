$(document).ready(function() {
		$('img').click(function() {
			var kit = $(this).attr('data-alt-src');
			var ninja = $(this).attr('src');
			$(this).fadeIn();
			$(this).attr('data-alt-src', ninja);
			$(this).attr('src', kit).fadeIn();
		});
});