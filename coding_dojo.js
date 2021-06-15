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

var x = [1, 3, 5];
// x[0] will now be equal to 5 (x[2] = 5)
x[0] = x[2];
// x[1] will be 5 since x[0] is now equal to 5 
x[1] = x[0];
console.log(0)
// [5, 5, 5]

var x = [1,3,5];
var y = [0,5,7];
// x[0] = 3 + 7
x[0] = x[1] + y[2];
// y[1] = 7 - 10 this doesn't matter in this equation since it is just console.log(x)
y[1] = y[2] - x[0];
console.log(x);
// [10,3,5]

var x = [1,3,5,8];
// x[0] = x[3]
x[0] = x[x.length - 1];
console.log(0);

var x = [1,3,5,8];
// temp = x[3] which is 8
var temp = x[x.length - 1];
// x[3] will now equal 1 since that is what x[0] is
x[x.length - 1] = x[0];
console.log(x);
// [1,3,5,1]

var x = [1,3,5,8];
// temp = x[3] which is 8
var temp = x[x.length - 1];
// x[3] will now equal 1 since that is what x[0] is
x[x.length - 1] = x[0];
// temp is equal to 8 so x[0] is now 8 this equaion is to switch around numbers in an array
x[0] = temp;
console.log(x);
// [8,3,5,1]

var x = [1,3,5,8];
// .pop is deleting the last number of array
x.pop();
// .push is putting the value in the last postion in an array
x.push(7);
console.log(x)
// [1,3,5,7]

var x = [1,3,5];
x[0] = 15;
// this will act as .push in this situation but it will always just replace what it is in the array
x[3] = 77;
console.log(x);
