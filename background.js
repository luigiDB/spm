/*
ALL' AVVIO DELL'APPLICAZIONE CONTROLLARE CHE SIA PRESENTE IL DATABASE 
SE NON PRESENTE CREALO
*/

//scatta all'apertura della scheda
chrome.tabs.onActivated.addListener(function (tabId, windowId){
  console.log("onActivated()");
  chrome.tabs.query({active: true, windowId: windowId}, function(activeTabs) {
    var activeUrl = activeTabs[0].url;
    var startIndex = activeUrl.indexOf("//")+2;
    var endIndex = activeUrl.indexOf("/", startIndex);
    activeUrl = activeUrl.substring(startIndex, endIndex);
    console.log("new tab with url: " + activeUrl);
    
    /*
    */
    if(activeUrl=="www.google.it"){
      console.log("catch condition a");
      chrome.browserAction.setIcon({path:"assets/icon_128_interrogativo.png", tabId:tabId.id});
    } /*else {
      chrome.browserAction.setIcon({path:"assets/icon_128.png", tabId:tabId.id});
    }*/ //QUESTA NON HA SENSO DATO CHE QUESTO EVENTO LO VEDO SOLO NELLA ONUPDATED()
    
  });
});

//scatta quando cambio pagina all'interno di una scheda
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(changeInfo.status=="complete"){
    console.log("onUpdated() complete");
    console.log("changeInfo URL: " + changeInfo.url);
  } else {
    console.log("onUpdated() loading");
    console.log("changeInfo URL: " + changeInfo.url);
  }
});

//scatta all'avvio dell'app
/*
chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    'index.html',
    {
      id: 'mainWindow',
      bounds: {width: 800, height: 600}
    }
  );
});

*/