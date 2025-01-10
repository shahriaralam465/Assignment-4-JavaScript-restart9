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

console.log(checkDigitsInName(["Raj"]));