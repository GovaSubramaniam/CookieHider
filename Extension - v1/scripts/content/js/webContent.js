let cookieAction;
chrome.storage.local.get(['cookieAction'], function (result) {
    //Cookie action will be stored in this location chrome.storage.local
    cookieAction = result.cookieAction;
    if (cookieAction != "nothing") unleash();
});
/*apart from nothing, if the remaining two state (accept , reject ) 
is choosen by user, unleash method will be called.*/


function unleash() {
    $(document).ready(function () {
        //this is a call back after screen load
        const cookiePopupFindder = setTimeout(() => {
            // this function will be processed after 1 sec
            if (cookieAction === "accept") {
                acceptAllCookies();
            } else if (cookieAction === "reject") {
                rejectAllCookies();
            } else {
                acceptAllCookies();
            }
        }, 1000);
    });
}
