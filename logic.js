var speed = 50;

document.addEventListener('onEventReceived', function (obj) 
{
    AddBadgesToName();

	var msgs = document.getElementsByClassName("message");
    var lastMsg = msgs[msgs.length - 1];
    TypingEffect(lastMsg,speed);
});

function AddBadgesToName()
{
    var metas = document.querySelectorAll(".meta");
	var lastMeta = metas[metas.length - 1];
    if (lastMeta == null) return;

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

function TypingEffect(lastMsg,speed)
{
    if(lastMsg == undefined) return;

    let lastMsgClone = lastMsg.cloneNode(true);
    let nodes = lastMsgClone.childNodes;

    lastMsg.innerHTML = "";



    //problem is probably the for loop, need to try to create nested intervals

    for (let i = 0; i < nodes.length; i++) 
    {
        let node = nodes[i].cloneNode();

        if (node.nodeName.includes("text"))
        {
            var text = node.nodeValue;
            var index = 0;
            console.log(text);
            var timer = setInterval(function()
                {
                    console.log("inner: " + text);
                    if(index < text.length)
                    {
                        lastMsg.append(text.charAt(index));
                        index++;
                    }
                    else
                    {
                        clearInterval(timer);
                    }
                }, speed);
        }
        else
        {
            lastMsg.appendChild(node);
        }
    }
}
