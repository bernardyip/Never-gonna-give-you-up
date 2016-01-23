chrome.tabs.onUpdated.addListener(function(id, info, tab){
    chrome.tabs.executeScript(null, {"file": "extension.js"});
    console.log("run123");
});