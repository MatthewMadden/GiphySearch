/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click',function(){
	
	var input = document.querySelector("input").value;
	pushToAPI(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

	var input = document.querySelector("input").value;
	

	// if the key ENTER is pressed..
	if(e.which === 13) {
		pushToAPI(input);
	}

});


/* 2. do the data stuff with the API */
//Tip from Chris for finishing project: Use a function & Concatination

function pushToAPI(input){
var url = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC";

	// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load',function(e){

	var data = e.target.response;
	pushToDOM(data);

	});
};


/* 3. Show me the GIFs */


function pushToDOM(input) {

var response = JSON.parse(input);

var imageUrls = response.data;
var container = document.querySelector(".js-container");


//START: How to clear GIFS displaying from previous search if new search is entered
document.querySelector(".js-go").addEventListener('click', function(){
		var newInput = document.querySelector(".js-container");
		newInput.innerHTML = " ";
	});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
		
		if(e.which === 13) {
			var newInput = document.querySelector(".js-container");
			newInput.innerHTML = " ";
		}	
	});
//END: How to clear GIFS displaying from previous search if new search is entered

imageUrls.forEach(function(image){

	var src = image.images.fixed_height.url;
	

	container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

	});

}




