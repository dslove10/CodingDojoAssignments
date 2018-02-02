$(document).ready(function() {
	$('#addclass button').click(function() {
		$('#addclass p').addClass('addred');
	});

	$('#slidetoggle button').click(function() {
		$('#slidetoggle img').slideToggle('fast', function() {

		});
	});

	$('#append button').click(function() {
		$('#append p').append('!!!!!!!!');
	});

	$('#click button').click(function() {
		$('#click h1').addClass('addred');
	});

	$('#hide img').click(function() {
		$('#hide img').hide('slow');
	});	

	$('#show button').click(function() {
		$('#show img').show('slow');
	});

	$('#slidedown button').click(function() {
		$('#slidedown img').slideDown('fast');
	});

	$('#slideup button').click(function() {
		$('#slideup img').slideUp('slow');
	});

	$('#fadein button').click(function() {
		$('#fadein h1').fadeIn('slow');
	});

	$('#fadeout button').click(function() {
		$('#fadeout p').fadeOut('slow');
	});

	$('#before button').click(function() {
		$('#before p').before('This is a new before paragraph!')
	});

	$('#after button').click(function() {
		$('#after h1').after('<h1>New Title</h1>');
	});

	$('#html button').click(function() {
		$('#html').html('<h1>WOW MY CONTENT IS GONE!!!</h1>');
	});

	$('#attr button').click(function() {
		$('#attr img').attr('src', 'jQueryFun/tidepod.jpg')
	});

	$('#val button').click(function() {
		var text = $(this).text();
		$('#val input').val(text);
	});

	$('#text button').click(function() { 
		$('#text h1').text('New Title'), 
		$('#text p').text('New paragraph');
	});

	$('#data button').click(function() {
		$('#data').data('test', { first: "button", last: "modify"});
		$('span:first').text($('#data').data('test').first);
		$('span:last').text($('#data').data('test').last);
	});
});