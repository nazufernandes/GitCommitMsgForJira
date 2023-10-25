chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type:"getText"}, function(response){
        if (response != undefined) {
            document.getElementById("text").innerText=response;
            document.getElementById("title").innerText=response.match(/\[\[(.*?)\]/)[1]; //get bugid  
            navigator.clipboard.writeText(response);   
        }else{
            document.getElementById("success").style.display = "none";
            document.getElementById("error").style.display = "block";
        }    
    });
});
