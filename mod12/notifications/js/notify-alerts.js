function submitNotification() {
    console.log("Notification submitted.");
    console.log(document.getElementById("notifSub").value);
}

function showNotification() {
    var text = document.getElementById("notifSub").value;
    if(!("Notification" in window)) {
        alert("This browser does not support notifications.");
    }
    else if(Notification.permission === "granted") {
        new Notification(document.title, {body: text});
    }
    else if(Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission){
            if(permission === "granted") {
                new Notification(document.title, {body: text});
            }
        })
    }
}
