chrome.runtime.onStartup.addListener(() => {

    chrome.storage.sync.remove('password');
});