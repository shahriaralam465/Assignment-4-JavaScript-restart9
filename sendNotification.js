function sendNotification(email) {
    if (email.includes('@')) {

        const parts = email.split('@');
        const userName = parts[0];
        const domainName = parts[1];

        return userName + ' ' + 'sent you an email from' + ' ' + domainName;
    }
    else {
        return 'Invalid Email';
    }
}

console.log(sendNotification('moumita@gmail.com'));