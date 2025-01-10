
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


/**
 * -----------------Explain---------------
 * 
 * 1.function calculateTax(income, expenses) { এই লাইনটি একটি ফাংশন calculateTax তৈরি করে যা দুটি প্যারামিটার নেয়: income এবং expenses
 * 
 * 2. if (income < 0 || expenses < 0 || expenses > income) { এই শর্তটি চেক করে যে, যদি income বা expenses কোনটি নেগেটিভ হয় বা expenses যদি income এর চেয়ে বেশি হয়, তাহলে নিচের কোডটি চলবে।
 * 
 * 3. return "Invalid Input"; যদি উপরের শর্তটি সত্য হয়, তাহলে ফাংশনটি "Invalid Input" রিটার্ন করবে এবং ফাংশনটি এখানেই শেষ হবে।
 * 
 * 
 * 4. const difference = income - expenses; যদি শর্তটি মিথ্যা হয়, তাহলে ফাংশনটি income এবং expenses এর মধ্যকার পার্থক্য (difference) হিসাব করবে।
 * 
 * 
 * 5. const tax = difference * .20; এই লাইনটি পার্থক্যের ২০% (0.20) হিসাবে ট্যাক্স (tax) হিসাব করবে।
 * 
 * 
 * 6. return tax; এই লাইনটি ট্যাক্স রিটার্ন করবে।
 * 
 * 7. } এই লাইনটি ফাংশনের শেষ।
 * 
 * 
 * 8. const incomeExpense = calculateTax(6000, -1500); এই লাইনটি calculateTax ফাংশনকে কল করে যেখানে income হল 6000 এবং expenses হল -1500
 * 
 * 
 * 9. console.log(incomeExpense); এই লাইনটি ফাংশনের রিটার্ন ভ্যালু কনসোল এ প্রিন্ট করে। যেহেতু expenses নেগেটিভ, ফাংশনটি "Invalid Input" রিটার্ন করবে এবং এটি কনসোলে প্রিন্ট হবে।
 * 
 */