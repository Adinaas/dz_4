// console.log("dz-4");

//задание 1
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

}
console.log(capitalizeString("АДИНА"));
console.log(capitalizeString("мУСТАФАЕВА"));

//задание 2 
function charCount(str, symbol) {
    let count = 0;
    let targetSymbol = symbol.toLowerCase(); // искомый символ в нижнем регистре

    // Перебираем строку. На каждом шаге текущая буква будет записываться в "char"
    for (let char of str) {
        if (char.toLowerCase() === targetSymbol) {
            count++;
        }
    }
    return count;
}
console.log(charCount("Abrakadabra", "a")); 
console.log(charCount("hello", "z"));       
console.log(charCount("Привет, Адина!", "п")); 

// задание 3 
function hidePhoneNumber(phoneNumber){
    let mask = "*"
    let hiddenNumber = ""
    for(let i = 0; i < phoneNumber.length; i++){
       if(i >=8){
        hiddenNumber += mask
       }else {
        hiddenNumber += phoneNumber[i]
       }
    }
    return hiddenNumber
}
let myPhoneNumber = "0558166281"
console.log("Номер телефона =>", myPhoneNumber);
console.log("После скрытия =>", hidePhoneNumber(myPhoneNumber));

//задание 4 
function evenOddSum(numbers){
    let evenSum = 0 
    let oddSum = 0 

    for (let num of numbers) {
        if(num % 2 === 0){
            evenSum += num
        }else{
            oddSum += num
        }
    }
    return [evenSum,oddSum]
}
console.log(evenOddSum([50, 67, 70 ,80 ,95]));

