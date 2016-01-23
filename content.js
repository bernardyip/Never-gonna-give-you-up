//Width and height of video
var height;
var width;

function annoy() {
	var vids = document.getElementsByTagName('video') 
	// vids is an HTMLCollection

	for( var i = 0; i < vids.length; i++ ){ 
		//Alert the source of the video
		//alert(vids.item(i).src);
		if ((vids.item(i).style.height) != 0)
			height = (vids.item(i).style.height);
		if ((vids.item(i).style.width) != 0)
			width = (vids.item(i).style.width);
		vids.item(i).src = "";
	}

	try {
		document.getElementById("player").innerHTML = "";

		var player = document.getElementById("placeholder-player");
		player.innerHTML = '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen style="width:'+width+';height:'+height+';"></iframe>';
	} catch (err) {}
}

var title = document.getElementsByTagName('title');
for( var i = 0; i < title.length; i++ ){ 
	title.item(i).addEventListener("DOMSubtreeModified", function(evt) {
		annoy();
	}, false);
}