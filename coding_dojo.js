// level 1
var x = 5;
console.log(x);
// x =5

var y = 3;
y = y + 1;
console.log(y);
// x = 4

var x = 3;
x = x + 2;
console.log(x + 2);
console.log(x);
// 7, 5

var x = 3;
x = x * x;
console.log(x);
console.log(x * 2);
// 9, 18

var x = 2;
var y = 5;
var z = x + y;
console.log(z);
// 7

// level 2
var x =[1, 2, 4];
console.log(x);
// [1, 2, 4]

var x = [1, 3, 5];
console.log(x[0]);
// 1

var x = [2, 4, 6];
console.log(x[1]);
// 4

var x = [1, 3, 5];
console.log(x[2]);
// 5

var x = [1.3];
console.log(x[0]);
// 1.3

var x = [1, 2, 4];
// the array spot of [zero] (1) switches with array spot [one] (2)
x[0] = x[1];
console.log(x);
// [2, 2, 4]

var x = [1, 3, 5];
// .length is the array length
var y = x.length;
console.log(y);
// 3

var x = [2,4,6,3,7];
// y will equal 5 - 2 = 3
var y = x.length - 2;
// log the [3]rd in the array
console.log(x[y]);
// 3

var x = [2,4,6,3,7];
// y =5
var y = x.length;
//x[4]
console.log(x[y - 1]);
// 7

var x = [1, 3, 5, 7];
// x[0] = x[2]  
x[0] = x[x.length - 2];
console.log(x);
// [5, 3, 5, 7]

var x = [1, 3, 5, 7];
// .length = 4, x[1] = x[2+1]
x[x.length - 3] = x[x.length / 2 + x.length / 4];
console.log(x);
// [1, 7, 5, 7]

var x = [1, 3, 5, 7];
var y = [2, 4, 6];
// x[2] = y[4(x.length is equal to 4) - 3]
x[2] = y[x.length - 3];
console.log(x);
// [1, 3, 4, 7]

var x = [1, 3, 5, 7];
var y = [2, 4, 6];
// x[2] = y[1] + x[1 + 2]
// x[2] = 4 + 7
x[2] = y[x.length - 3] + x[x[0] + y[0]];
console.log(x);
// [1, 3, 11, 7]

// activity 3