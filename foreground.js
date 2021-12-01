var lastUrl = location.href; 
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange();
  }
}).observe(document, {subtree: true, childList: true});
 
 
function onUrlChange() {
    var actionText = "" ;
    switch (location.href){
        case "https://www.netflix.com/browse/genre/83": case "https://www.netflix.com/browse/genre/34399":
            actionText = "addSpace";
            break;
        default:
            actionText = "removeSpace";
            break;
    }
    chrome.runtime.sendMessage({
        action: actionText
    }, function(response) {
        console.log(action);
     });
  //console.log('URL changed!' + location.href);
}