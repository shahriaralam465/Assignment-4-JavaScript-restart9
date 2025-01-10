function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return "Invalid Input";
    }
    const difference = income - expenses;
    const tax = difference * .20;
    return tax;

}


const incomeExpense = calculateTax(6000, -1500);
console.log(incomeExpense);