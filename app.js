$(document).ready(function(){
	const dibujarGifs = function(data){
		let gif = '';
		let url = '';
		data.forEach(function(element){
			gif = element.images.downsized_large.url;
			url = element.bitly_gif_url;
			$('#elementos').append(armarTemplate(gif, url));
		});	
	}
	const armarTemplate = function(gif, url){
		let t= "<div class='elemento'><img src='" + gif + "'/><a href = '" + url + "' >Ver más </a></div>"
	  return t; 
	}
const ajaxGif = function(gif){
	$.ajax({
		url: 'http://api.giphy.com/v1/gifs/search',
		type: 'GET',
		datatype: 'json',
		data : {
			q : gif,
			api_key: 'Ui00S0ADQSdJxo7hXTKMvVu4YP6oPTE7'
		}
	})
	.done(function(response){
		console.log(response);
		dibujarGifs(response.data);
	})
	.fail(function(){
		console.log("error");
	});
}

$("#buscar-gif").click(function(event){
	console.log("Entro");
	$("#elementos").empty();
	let gif = $("#gif-text").val();
	ajaxGif(gif);
	})
});