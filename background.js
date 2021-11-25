

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
                chrome.tabs.insertCSS(null, {file: "./genre.css"}, () => console.log("i injected genre css"));
            } else {
                chrome.tabs.removeCSS(null,{file: "./genre.css"} )
            }
            chrome.tabs.insertCSS(null, {file: "./styles.css"}, () => console.log("i injected css"));
            chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("i injected"));
        }
    });
});

