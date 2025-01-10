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

