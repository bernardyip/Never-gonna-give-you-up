var vids = document.getElementsByTagName('video') 
// vids is an HTMLCollection

//Width and height of video
var height;
var width;

for( var i = 0; i < vids.length; i++ ){ 
	//Alert the source of the video
	//alert(vids.item(i).src);
	alert(vids.item(i).height);
	alert(vids.item(i).width);
	//ID player
}

var player = document.getElementById("player");
player.innerHTML = '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen autoplay=1 style="width:'+width+';height:'+height+';"></iframe>';