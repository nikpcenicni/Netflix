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
    if (darkMode.checked) {
        actionText = "removeCSS";
    } else {
        actionText = "addCSS";
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


 