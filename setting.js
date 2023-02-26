var WebProtect = {

    setPassword: async (password) => {
        let anjasmara = (await chrome.storage.sync.get()).realPassword;
        if(typeof anjasmara == 'undefined'){
            chrome.storage.sync.set({realPassword: password}, () => {
                alert("Set Password Berhasil")
            });
        }
        else{
            alert("Password Sudah Ada");
        }
    },
    inputPassword: async (password) => {
        if(typeof (await chrome.storage.sync.get()).realPassword != 'undefined'){

            chrome.storage.sync.set({password: password}, () => {
                alert("Input Password Berhasil")


            });
        }
        else{
            alert("Password Belum Ada");
        }
    }
}

//event if keyboard s typed
console.log("el mejor portero del mundo");
document.addEventListener('keydown', async (event) => {
    
    let realPassword = (await chrome.storage.sync.get()).realPassword;
    let password = (await chrome.storage.sync.get()).password;
        if(typeof realPassword == 'undefined' && typeof password == 'undefined'){
            if(event.key == 's'){
                let password = prompt("Masukkan Password Awal");
                if(password !== null && typeof password !== 'undefined' && password !== '')
                {
                WebProtect.setPassword(password);
                }
            }
        }

        if(event.key == 'i'){
            if(typeof password == 'undefined' || password != realPassword){
                let password = prompt("Password yang sudah ada:");
                if(password !== null && typeof password !== 'undefined' && password !== '')
                {
                WebProtect.inputPassword(password);
                }
            }
        }

});