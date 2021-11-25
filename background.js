

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    console.log(tab);
}

// var tabUpdated = false;

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if (/^https:\/\/www\.netflix/.test(current_tab_info.url)){
            console.log(current_tab_info.url);
            if ("https://www.netflix.com/browse/genre/83" === current_tab_info.url
            ||  "https://www.netflix.com/browse/genre/34399" === current_tab_info.url){
                //var newOrder = [3,1,4,5,6,7,0,8,9,10,11,12,13,14,15,16,17,18,19,20,2];
                chrome.tabs.insertCSS(null, {file: "./genre.css"}, () => console.log("i injected genre css"));
            } else {
                chrome.tabs.removeCSS(null,{file: "./genre.css"} )
            }
            //else {
            //     //var newOrder = [2,0,1];
            //     var newOrder = [0,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,1,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];
            // }
            // chrome.storage.sync.set({order: newOrder}, function() {
            //     chrome.storage.sync
            //     //console.log('Value is set to ' + newOrder);
            // });
            chrome.tabs.insertCSS(null, {file: "./styles.css"}, () => console.log("i injected css"));
            chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("i injected"));
           
        }
    });
});


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.message === "removeVideo") {
//         sendResponse({message: "removed"});
//         var video = document.getElementsByClassName(".volatile-billboard-animations-container")
//         video.forEach(function(element) {
//             element.style.display = "none";
//         });
//     }
// })


// function updateOrder(){
//     chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//         let url = tabs[0].url;
//         console.log(url);
//         if ("https://www.netflix.com/browse/genre/83" === url){
//             var newOrder = [3,1,0,4,5,6,7,0,8,9,10,11,12,13,14,15,16,17,18,19,20,2];
//         } else if ( "https://www.netflix.com/browse" === url) {
//             var newOrder = [0,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,1,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];
//         } else if ( "https://www.netflix.com/browse/genre/34399" === url) {
//             var newOrder = [3,0,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
//         } 
//         chrome.storage.sync.set({order: newOrder}, function() {
//             chrome.storage.sync
//             console.log('Value is set to ' + newOrder);
//         });
//         chrome.tabs.insertCSS(null, {file: "./styles.css"}, () => console.log("i injected css"));
//         chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("i injected"));
//     });
//     tabUpdated = false;
// }

    

