$(document).ready(function(){

	$('form').submit(function(){
		var first = $('#firstname').val();
		var last = $('#lastname').val();
		var email = $('#emailaddress').val();
		var contact = $('#contactno').val();

		$('table').append('<tr><td>' + first + '</td><td>' + last + '</td><td>' + email + '</td><td>' + contact + '</td></tr>');
		return false;
	});
});