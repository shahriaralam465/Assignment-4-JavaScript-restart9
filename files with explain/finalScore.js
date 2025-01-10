function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }
    const { name, testScore, schoolGrade, isFFamily } = obj;
    
    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }
    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore = finalScore + 20;
    }
    return finalScore >= 80;

}

console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));