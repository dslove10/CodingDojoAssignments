$(document).ready(function(){
	
	for(var i = 1; i <= 151; i++){

		$('#pokedex').append('<img id = "' + i + '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png">');
	}

	$('img').click(function(){
		var num = $(this).attr('id');
		$.get("https://pokeapi.co/api/v2/pokemon/" + num + "/", function(res){
			var html_str = "";
			html_str += '<h2>' + res.name.charAt(0).toUpperCase() + res.name.slice(1) + '</h2>';
			html_str += '<img id="' + num + '"src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + num + '.png">';
			html_str += '<h3>Types</h3>';
			html_str += '<ul>';
			for (var i = 0; i < res.types.length; i++){
				html_str += '<li>' + res.types[i].type.name + '</li>';
			}
			html_str += '</ul>';
			html_str += '<h3>Height</h3><ul><li>' + res.height + '</li></ul>';
			html_str += '<h3>Weight</h3><ul><li>' + res.weight + '</li></ul>';
			$('#pokeprofile').html(html_str);
		}, 'json');
	});
});