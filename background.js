chrome.browserAction.onClicked.addListener(function() {

    chrome.tabs.query({}, function(tabs) {
      for(var i = 0; i<tabs.length;i++){
      
        chrome.tabs.sendMessage(tabs[i].id, {message: "RunScript"}, function() {});
      }
    });
});
