
(async () => {




var storage = await chrome.storage.sync.get();


if (typeof storage.realPassword == 'undefined' && typeof storage.password == 'undefined') {

    console.log("A");
}
else if(typeof storage.realPassword != 'undefined' && typeof storage.password == 'undefined'){
    console.log("B");
    window.location.href = chrome.runtime.getManifest().redirect_url;
}
else{
    var pass = storage.password;
    if (pass != (await chrome.storage.sync.get()).realPassword) {
            console.log("C");

            window.location.href = chrome.runtime.getManifest().redirect_url;
            

    }else{

    console.log("WELCOME OWNER");
    }
}





})();
