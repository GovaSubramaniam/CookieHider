chrome.runtime.onInstalled.addListener(reason => {
    if (reason.reason === "install") {
        chrome.storage.local.clear();
        chrome.storage.local.set({ cookieAction: "nothing" });
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.hideCookiePopup) {
        chrome.scripting.insertCSS(
            { files: ["scripts/content/webAccessible/css/hideCookiePopups.css"], target: { tabId: sender.tab.id, allFrames: true } },
            () => sendResponse({ success: true })
        );
    }


    return true 
});