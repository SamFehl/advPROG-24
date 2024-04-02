function submitNotification(text) {
    var notificationText = text;
}

function showNotification(message) {
    if(!("Notification" in window)) {
        alert("This browser does not support notifications.");
    }
    else if(Notification.permission === "granted") {
        new Notification(document.title, {body: message});
    }
    else if(Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission){
            if(permission === "granted") {
                new Notification(document.title, {body: message});
            }
        })
    }
}
