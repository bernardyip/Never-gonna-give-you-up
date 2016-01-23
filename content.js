var vids = document.getElementsByTagName('video') 
// vids is an HTMLCollection

//Width and height of video
var height;
var width;

for( var i = 0; i < vids.length; i++ ){ 
	//Alert the source of the video
	//alert(vids.item(i).src);
	height = (vids.item(i).style.height);
	width = (vids.item(i).style.width);
	//ID player
}

document.getElementById("player").innerHTML = "";

var player = document.getElementById("placeholder-player");
player.innerHTML = '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen autoplay=1 style="width:'+width+';height:'+height+';"></iframe>';