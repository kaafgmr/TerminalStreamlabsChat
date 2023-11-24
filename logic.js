document.addEventListener('onEventReceived', function (obj) 
{
    AddBadgesToName();

	var msgs = document.getElementsByClassName("message");
    var lastMsg = msgs[msgs.length - 1];
    TypingEffect(lastMsg,50);
});

function AddBadgesToName()
{
    var metas = document.querySelectorAll(".meta");
	var lastMeta = metas[metas.length - 1];
    
    var badges = GetBadges(lastMeta);
    if (badges == null) return;

    var badgesName = GetBadgesSlashConcatName(badges);
    
    var originalName = GetElementUserName(lastMeta).innerText;

    GetElementUserName(lastMeta).innerText = badgesName + originalName;

    GetBadgesWrapper(lastMeta).remove();
}

function GetElementUserName(lastMeta)
{
    return lastMeta.querySelector(".name");
}

function GetBadgesWrapper(lastMeta)
{
    return lastMeta.querySelector(".badges");
}

function GetBadges(lastMeta)
{
    var badgesWrapper = GetBadgesWrapper(lastMeta);
    if (badgesWrapper != null)
    {
        return badgesWrapper.childNodes;
    }

    return null;
}

function GetBadgesSlashConcatName(badges)
{
    var badgeName = "";
    for (let i = 0; i < badges.length; i++)
    {
        let originalName = badges[i].className;
        let split1 = originalName.split(" ")[1];
        let split2 = split1.split("-")[0];
        badgeName += split2 + "/";
    }
    return badgeName;
}

function TypingEffect(element,speed)
{
    let elementClone = element.cloneNode(true);
    let nodes = elementClone.childNodes;
    
    element.innerHTML = "";
    
    for (let i = 0; i < nodes.length; i++) 
    {
        let node = nodes[i];

        if (node.nodeName.includes("text"))
        {
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
        }
    }
}
