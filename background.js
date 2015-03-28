/*add yhis to manifest if want a background js
"background": {
    "scripts": ["background.js"],
    "persistent": false
  }
  
*/
/*
ALL' AVVIO DELL'APPLICAZIONE CONTROLLARE CHE SIA PRESENTE IL DATABASE 
SE NON PRESENTE CREALO
*/

chrome.tabs.onActivated.addListener(function (tabId, windowId){
  chrome.tabs.query({active: true, windowId: windowId}, function(activeTabs) {
    var activeUrl = activeTabs[0].url;
    var startIndex = activeUrl.indexOf("//")+2;
    var endIndex = activeUrl.indexOf("/", startIndex);
    activeUrl = activeUrl.substring(startIndex, endIndex);
    console.log("new tab with url: "+activeUrl);
    
    /*
    */
    chrome.browserAction.setIcon({path:"assets/icon_128_interrogativo.png", tabId:tabId.id});
    
  });
});