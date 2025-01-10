function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return "Invalid Input";
    }
    const difference = income - expenses;
    const tax = difference * .20;
    return tax;

}



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



function checkDigitsInName(name) {
    for (let char of name) {
        if (!isNaN(char) && char !== ' ') {
            return true;
        }
    }
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    return false;
}



function calculateFinalScore(student) {
    let finalScore = student.testScore + student.schoolGrade;
    if (student.isFFamily === true) {
        finalScore = finalScore + 20;
    }

    return finalScore >= 80;
}



function  waitingTime(waitingTimes, serialNumber) {

    if(!Array.isArray(waitingTime) || typeof serialNumber !== 'number'){
        return "Invalid Input"
    }
    let total = 0;
    for(let i = 0; i < waitingTimes.length; i++){
        total = total + waitingTimes[i];
    }
    
    let roundedTime = Math.round(total/ waitingTimes.length);
    let remainingPeople = serialNumber - waitingTimes.length;
    let totalRemainingPeople = remainingPeople -1;

    let timeWillWait = totalRemainingPeople * roundedTime;
    
    return timeWillWait;
}
