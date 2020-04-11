
// find the largest number amongs array(v-10.5)
var marks = [55, 67, 33, 49, 69, 22, 60,];

var max = marks[0];

for(var i = 0; i < marks.length; i++){
    var element = marks[i];

    if(element > max){

        max = element;
    }
}

console.log("highest value is :", max);
