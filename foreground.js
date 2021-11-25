// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension" + request.message);
//       if (request.greeting === "hello")
//         sendResponse({farewell: "goodbye"});
//     }
//   );


chrome.runtime.on


function continueWatchingTop(){
    document.querySelector(".lolomo.is-fullbleed").style.display = "flex";
    document.querySelector(".lolomo").style.flexDirection = "column";
    var divs = document.querySelectorAll(".lolomoRow");
    chrome.storage.sync.get({order:[]}, function(data) {
        //console.log(data.order);
        divs.forEach(function(element, index) {
            if (element.style.order == null)
                element.style.order = data.order[index];
        });
    });  
    //resetOrder();
    addLinkClass();

}

continueWatchingTop();
// addLinkClass();


function addLinkClass(){
    var lis = document.querySelectorAll(".navigation-tab");
    lis.forEach(function(element, index) {
        element = element.firstChild;
        element.classList.add("link");
    })
}

window.scrollTo(window.scrollX, window.scrollY - 1);
window.scrollTo(window.scrollX, window.scrollY + 1);



function resetOrder(){
    var newOrder = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,1,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];
    chrome.storage.sync.set({order: newOrder}, function() {
        chrome.storage.sync;
    });
}


// window.onclick = function(event) {
//     var target = event.target;
//     //console.log(target);
//     if (event.target.classList.contains('.link')) console.log("failed");

//     if(target.matches('.link')) {
//         console.log("test1");
//         var clickedEle = document.activeElement.class ;
//         var ele = document.getElementsByClassName(clickedEle);
//         //console.log(ele);
//         continueWatchingTop();
        
//     }

// }


// function pickOrder(){
//     var newOrder;
//     if ("https://www.netflix.com/browse/genre/83" === window.location){
//         newOrder = [3,1,4,5,6,7,0,8,9,10,11,12,13,14,15,16,17,18,19,20,2];
//     } else {
//         newOrder = [0,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,1,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];
//     }

//     chrome.storage.sync.set({order: newOrder}, function() {
//         console.log('Settings saved: ' + newOrder);
//       });
//     //console.log('Value is set to ' + newOrder);
//     // chrome.storage.sync.set({order: newOrder}, function() {
//     //     chrome.storage.sync
//         //console.log('Value is set to ' + newOrder);

// }





//var divs = document.querySelectorAll('.lolomoRow');
// var newOrder = [2,0,1]

// divs.forEach(function(element, index) {
//     element.style.order = newOrder[index];
// });