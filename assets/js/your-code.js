const urlparams = new URLSearchParams({name: "Rosie", age: 5})

fetch("/dogs",{method: "POST", redirect: "follow", headers: {"Content-Type": "application/x-www-form-urlencoded"}, body: urlparams}).
    then(res => {
        if(res.redirected) {
            window.location.href = res.url
        }
    }).catch(e);