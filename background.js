function injectWindows() {
    chrome.windows.getAll({
        populate: true
    }, function (windows) {
        try {
            // Auto re-inject to all Netflix tabs
            for (var i = 0; i < windows.length; i++) {
                var currentWindow = windows[i];
                for (var j = 0 ; j < currentWindow.tabs.length; j++) {
                    currentTab = currentWindow.tabs[j];
                    if (currentTab.url) {
                        // Skip chrome:// and about:// and apply only to allowed URL
                        if (currentTab.url.match(chrome.runtime.getManifest().content_scripts[0].matches[0].replace('/','\/').replace('.','\.').replace('*','.*')) && !currentTab.url.match(/(chrome|about):\/\//gi)) {
                            var scripts = chrome.runtime.getManifest().content_scripts[0].js;
                            trial();
                            for (var k = 0; k < scripts.length; k++) {
                                console.log('NETFLEX INFO: Injecting script with ID ' + k + ' on path: "' + chrome.runtime.getURL(scripts[k]) + '", to tab with ID ' + j + ' and URL: "' + currentTab.url + '", in window with ID ' + i + '.');

                                chrome.tabs.executeScript(currentTab.id, {
                                    file: scripts[k]
                                }, function(e) {
                                    if (chrome.runtime.lastError) {
                                        if (chrome.runtime.lastError.length() != 0) {
                                            console.error('NETFLEX ERROR: Injecting script failed with: ' + chrome.runtime.lastError.message + '. Error was suppressed.');
                                        }
                                    }
                                });
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            console.error('NETFLEX ERROR: Failed to auto-inject tabs.');
            console.error(e);
        }
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var status = 'OK';
    var message = '';
    var data = {};
    var hidden = false;
    try {
        switch(request.action) {
            case 'reloadExtension':
                chrome.runtime.reload();
                break;
            case 'addSpace':
                //chrome.tabs.insertCSS({file: "./genre.css"});
                chrome.storage.local.set({ addSpace: true })
                break;
            case 'removeSpace':
                //chrome.tabs.removeCSS({file: "./genre.css"});
                chrome.storage.local.set({ addSpace: false })
                break;
            case "removeVideo":
                //chrome.tabs.insertCSS({file: "./hiddenVideo.css"});
                chrome.storage.local.set({ videoHidden: true })
                break;
            case "addVideo":
                //chrome.tabs.removeCSS({file: "./hiddenVideo.css"});
                chrome.storage.local.set({ videoHidden: false })
                break;

            case "removeCSS":
                //chrome.tabs.removeCSS({file: "./styles.css"});
                chrome.storage.local.set({ lightMode: false })
                break;

            case "addCSS":
                //chrome.tabs.insertCSS({file: "./styles.css"});
                chrome.storage.local.set({ lightMode: true })
                break;
        }
        trial();
    } catch (e) {
        status = 'ERROR';
        message = e.message;
        data = e;

        sendResponse({request: request, status: status, message: message, data: data});

        return;
    }

    // To prevent connection from closing before async message is returned
    return true;
});


function trial(){
    chrome.storage.local.get(['lightMode', 'videoHidden', 'addSpace'], function(data) {
   
        if (data.lightMode) {
            chrome.tabs.insertCSS({file: "./styles.css"})
        } else if (!data.lightMode) {
            chrome.tabs.removeCSS({file: "./styles.css"});
        } 
        if (data.videoHidden) {
            chrome.tabs.insertCSS({file: "./hiddenVideo.css"});
        } else if (!data.videoHidden){
            chrome.tabs.removeCSS({file: "./hiddenVideo.css"});
        } 
         if (data.addSpace) {
            chrome.tabs.insertCSS({file: "./genre.css"});
        } else if (!data.addSpace){
            chrome.tabs.removeCSS({file: "./genre.css"});
        } 
   
     });
}
