function calculateTax(amount) {
    let taxValue=amount*.1;
    return taxValue
}

function convertToUpperCase(text){
    let upperCaseText=text.toUpperCase();
    return upperCaseText;
}

function findMaximum(num1,num2){
    if (num1>num2){
        return num1;
    } else if (num2>num1) {
        return num2;
    } else {
        return num1
    }
}

function isPalindrome(word){
   let reverseWord=word.split("").reverse().join("");
   if (reverseWord==word){
    return true;
   } else {
    return false;
   }
}

function calculateDiscountedPrice(originalPrice,discountPercentage){
    let discountedPrice=originalPrice-(originalPrice*(discountPercentage/100));
    return discountedPrice
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };