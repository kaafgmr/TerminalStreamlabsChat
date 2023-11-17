document.addEventListener('onEventReceived', function (obj) 
{
	var msgs = document.getElementsByClassName("message");
    var lastMsg = msgs[msgs.length - 1];
    typingEffect(lastMsg,50);
});

function typingEffect(element,speed)
{
    let elementClone = element.cloneNode(true);
    let nodes = elementClone.childNodes;
    
    element.innerHTML = "";
    
    for (let i = 0; i < nodes.length; i++) 
    {
        let node = nodes[i];

        if (node.nodeName.includes("text"))
        {
            console.log(nodes.length);
            let text=node.data;
            var j=0;
            var timer=setInterval(function()
                {
                    if(j<text.length)
                    {
                        element.append(text.charAt(j))
                        j++;
                    }
                    else
                    {
                        clearInterval(timer);
                    }
                },speed);
        }
        else
        {
            element.appendChild(node);
            console.log(nodes.length);
        }
    }
}
