 chrome.contextMenus.onClicked.addListener(function(clickData) {
    if(clickData.meniItemId == "gcm")
    {
        alert();

        chrome.tabs.sendMessage(tab.id,true)
    }  
});


chrome.browserAction.onClicked.addListener(btnClicked);

function btnClicked(tab) {
    chrome.tabs.sendMessage(tab.id,true)
}
