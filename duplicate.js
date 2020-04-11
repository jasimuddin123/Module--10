// Remove duplicate item from an array (v-10.7)
var name = [5, 10, 2, 1, 5, 3, 10, 11, 1, 3];
var uniqueName = [];

for (var i = 0; i < name.length; i++){
    
    var element = name[i];
    var index = uniqueName.indexOf(element);

    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);