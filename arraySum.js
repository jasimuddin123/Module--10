
// Sum all number of Array (v- 10.6)
var sum = 0;
function getArraySum(number){

    for(i = 0; i < number.length; i++){
        var element = number[i];
        sum = sum + element;
    }
    return sum;
}
var number = [55, 69, 33, 45, 90, 21, 30, 32, 44];
var result = getArraySum(number);
console.log("total number is :", result);

var total = getArraySum([44, 55, 20, 52, 60]);
console.log("Total number is :", total)