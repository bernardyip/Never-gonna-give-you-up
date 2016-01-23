var vids = document.getElementsByTagName('video') 
// vids is an HTMLCollection
for( var i = 0; i < vids.length; i++ ){ 
	//Alert the source of the video
	alert(vids.item(i).src);
    //vids.item(i).src = "blob:https%3A//www.youtube.com/8faa2e29-6835-4f3d-8a4f-373dec3e7209";
}