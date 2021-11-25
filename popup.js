const videoRemove = document.getElementById("videoRemove");
videoRemove.addEventListener("change", () => {
    chrome.runtime.sendMessage({message: "removeVideo"});
    console.log("sent Message");
});

function handleVideoRemove(e) {
    var video = document.querySelector(".volatile-billboard-animations-container");
    video.add
    video.style.display = "none";
}