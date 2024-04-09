const checkPermissions = () => {
    if(!('serviceWorker' in navigator)) {
        throw new Error('Service worker is not supported');
    }

    if(!('Notification' in window)) {
        throw new Error('Notification is not supported');
    }
}

const registerSW = async () => {
    const registration = await navigator.serviceWorker.register('sw.js');
    return registration;
}

const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
        throw new Error("Notification permission not granted")
    }
    else {
        new Notification("Notifications are enabled");
    }
}

/*const revokeNotificationPermission = async () => {
    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
        throw new Error("Notification permission not granted")
    }
    else {
        new notification("PTI Competition is on April 16th");
    }
}*/

checkPermissions()
registerSW()
requestNotificationPermission()