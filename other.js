function annoy() {
	var vids = document.getElementsByTagName('video')

  /*
  	for all the video elements in a website
  */
  while (vids.length >= 0) {
	var width = vids.item(0).offsetWidth;
	var height = vids.item(0).offsetHeight;
	//alert(width + " : " + height);
  	vids[0].parentNode.innerHTML = '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen autoplay=1 style="width:'+width+'px;height:'+height+'px;"></iframe>';
  }
}

//Run functions
annoy();
