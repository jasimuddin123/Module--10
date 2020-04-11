// Swap in JS ( v-10.2)

var a = 10;
var b = 15;

console.log("before swap: a =", a, "b =", b);

var temp = a;
var a = b;
var b = temp;

console.log("after swap : a =", a, "b = ", b);

// Swap 2nd method ( v-10.2)

var x = 20;
var y = 25;

[x, y] = [y, x];
console.log(" after swap: x =", x, "y =", y);