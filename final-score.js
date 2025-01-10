function calculateFinalScore(student) {
    let finalScore = student.testScore + student.schoolGrade;
    if (student.isFFamily === true) {
        finalScore = finalScore + 20;
    }

    return finalScore >= 80;
}


console.log(calculateFinalScore());
