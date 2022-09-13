$(document).ready(function() {
    
    $(".cookie-action-btns").click(function(e) {
        const btn = $(this);
        const cookieAction = btn.attr("data-value");
        chrome.storage.local.set({ cookieAction }, function() {
            activateBtn(btn);
        });
    });

    (function() {
        chrome.storage.local.get(['cookieAction'], function(result) {
            activateBtn($(`.cookie-action-btns[data-value=${result.cookieAction}]`));
        });
    })();


});