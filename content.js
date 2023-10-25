chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "getText":
                console.log("inside content");
                var commit_msg_pattern = "{Title} [[{TicketID}]({url})]";
                var data = document.getElementsByTagName("H1");
                var title = data[0].innerHTML // get issue title 
                var url = document.baseURI;
                if(url.includes("?jql="))
                    url = url.split("?jql=")[0];
                    
                var ticketId = url.substring(url.lastIndexOf('/')+1);

                var commit_message = commit_msg_pattern.replace("{Title}",title.trimEnd()).replace("{TicketID}",ticketId).replace("{url}",url);
                console.log(commit_message);
                sendResponse(commit_message);
            break;
        }
    }
);