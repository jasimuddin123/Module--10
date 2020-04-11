
// Find max of two values and find max of three values (v-10.4)
var businessMan = 500;
 var minister = 300;
 var shocib = 200;


 
if (businessMan > minister){

    if(businessMan > shocib){
        console.log("businessMan is bigger than minister");
    }
    else{
        console.log("shocib is bigger");
    }
}
else{
    if (minister > shocib){
        console.log("minister is bigger than shochib");
    }

    else{
        console.log("shochib is bigger");
    }
}

// Use Math Max Method  Find max of two values and find max of three values (v-10.4)

var businessMan = 500;
var minister = 1000;
var shocib = 800;

var max = Math.max(businessMan, minister, shocib);
console.log(max);
