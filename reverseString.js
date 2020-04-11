// Reverse a string (v- 10.9)

function reverseString(str){

    var reverse = "";

    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;

    }
    return reverse;

}
var statement = " Hello Alien Come to me all the time";
var forAlien = reverseString(statement);
console.log(forAlien);

var foodVlog = reverseString(" I don't want to eat anything all the time");
console.log(foodVlog);