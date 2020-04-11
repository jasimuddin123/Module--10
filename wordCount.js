// count the number of words in a string (v-10.8)

var speech = "I am a good person. I don't snore at nigth"

var count = 0;
for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " "){
        count++;
    }
}
console.log(count);