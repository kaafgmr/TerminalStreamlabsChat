document.addEventListener('onEventReceived', function (obj) {

	var badges = document.getElementsByClassName("badges");
	var lastBadge = badges[badges.length - 1];
	
	var nodes = lastBadge.childNodes;
	
	for(var i = 0; i < nodes.length; i++)
	{
		nodes[i].remove();
	}






	var msgs = document.getElementsByClassName("message");
	typingEffect(msgs[msgs.length - 1],50);
});

function typingEffect(element,speed){
  let text=element.innerHTML;
  element.innerHTML="";
 var i=0;
  var timer=setInterval(function(){
    if(i<text.length){
      element.append(text.charAt(i))
      i++;
    }else{
      clearInterval(timer);
    }
  },speed)
  
}
