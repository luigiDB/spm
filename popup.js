window.onload = function() {
  console.log("start script");
  
  var activeUrl;
  
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id}, function(activeTabs) {
      activeUrl = activeTabs[0].url;
      console.log("url: "+activeUrl);
      var startIndex = activeUrl.indexOf("//")+2;
      console.log("start "+startIndex);
      var endIndex = activeUrl.indexOf("/", startIndex);
      console.log("end "+endIndex);
      activeUrl = activeUrl.substring(startIndex, endIndex);
      document.querySelector('#greeting').innerText = 'Current url is ' + activeUrl;
    });
  });
  console.log("end script");
};
