const videoRemove = document.querySelector("input[id=videoPreview]");
videoRemove.addEventListener("change", () => {
    var actionText = "";
    if (videoRemove.checked) {
        actionText = "removeVideo";
    } else {
        actionText = "addVideo";
    }
    console.log(actionText);
    chrome.runtime.sendMessage({
        action: actionText
    }, function(response) {
     });
});

const darkMode = document.querySelector("input[id=darkMode]");
darkMode.addEventListener("change", () => {
    var actionText = "";
    var element = document.body;
    if (darkMode.checked) {
        actionText = "removeCSS";
        element.classList.remove("light-mode");
    } else {
        actionText = "addCSS";
        element.classList.add("light-mode");
    }
    console.log(actionText);
    chrome.runtime.sendMessage({
        action: actionText
    }, function(response) {
     });
});


var html = document.querySelector("html");
html.addEventListener("load", () => {
    
});


chrome.storage.sync.get(['lightMode', 'videoHidden'], function(data) {
    var element = document.body;
    if (data.lightMode) {
        darkMode.checked = false;
        element.classList.add("light-mode");
    } else if (!data.lightMode) {
        darkMode.checked = true;
        element.classList.remove("light-mode");
    } 
    if (data.videoHidden) {
        videoRemove.checked = true;
    } else if (!data.videoHidden){
        videoRemove.checked = false
    } 

 });


 