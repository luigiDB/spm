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
    console.log("new tab with url: " + activeUrl);
    
    /*
    */
    if(activeUrl.toLowercase()=="www.google.com"){
      console.log("catch condition");
      chrome.browserAction.setIcon({path:"assets/icon_128_interrogativo.png", tabId:tabId.id});
    }
    
  });
});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  chrome.tabs.query({active: true}, function(activeTabs) {
    console.log("changeInfo: " + changeInfo.url);
  });
});