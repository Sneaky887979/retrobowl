chrome.browserAction.onClicked.addListener(retro_bowl);

chrome.runtime.onInstalled.addListener(function (r) {
    if (r.reason === "install")
        retro_bowl();
});

function retro_bowl() {
    chrome.tabs.create({url: chrome.runtime.getURL("retro_bowl.html")}, function () {})
}