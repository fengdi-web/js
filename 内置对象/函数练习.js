// 第一题，判断某个数是不是奇数
// function isOdd(n) {
//     if (n % 2 === 0) {
//         return false;
//     } else {
//         return true;
//     }
// }
// if (isOdd(3)) {
//     console.log("是奇数");
// } else {
//     console.log("不是奇数");
// }



// 第二题，判断某个数是不是素数
// function isPrime(n) {
//    if(n < 2){
//       return false;
//    }
//    for (var i = 2; i < n; i++){
//       if(n % i === 0){
//          return false;
//       }
//    }
//    return true;
// }
// if(isPrime(3)){
//    console.log("是素数");
// }else{
//    console.log("不是素数");
// }



// 第三题 写一个函数，该函数用于对数组求和
// function sumOfArray(arr) {
//    var sum = 0;
//    for (var i in arr) {
//       sum += arr[i]
//    }
//    return sum;
// }
// var arr1 = [1,2,3,4,5,5];
// console.log(sumOfArray(arr1));


// 第四题 写一个函数, 该函数用于得到数组中的最大值 ，如果数组长度为零则返回undefined


// 自己写的
// function maxOfArray(arr) {
//    for (var i = 0; i < arr.length; i++) {
//       for (var j = 0; j < arr.length - j; j++) {
//          if (arr[j] < arr[j + 1]){
//             var max = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = max
//          }
//       }
//    }
//    return arr[0];
// }

// var newarr = [112,345,3,5453,23,12,9,39]
// console.log(maxOfArray(newarr));


// 参考
// function maxOfArray(arr) {
//    if (arr.length === 0) {
//       return;
//    }
//    var max = arr[0];
//    for (var i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//          max = arr[i];
//       }
//    }
//    return max;
// }
// var newarr = [112,10345,3,5453,23,12,5999,39]
// console.log(maxOfArray(newarr));


// 第五题 写一个函数, 该函数用于得到数组中的最小值
// function minOfArray(arr) {
//    if (arr.length === 0) {
//       return;
//    }
//    var min = arr[0];
//    for (var i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//          min = arr[i];
//       }
//    }
//    return min;
// }
// var newarr = [112,10345,3,5453,23,12,5999,39]
// console.log(minOfArray(newarr));


// 第六题 写一个函数，该函数用于判断数组是否是稀松数组
// 稀松数组的特点, 下标连续
// function hasEmptyInArray(arr) {
//    for (var i in arr) {
//       if (!(i in arr)) {
//          return true;
//       }
//    }
//    return false;
// }
// console.log(hasEmptyInArray(new Array(3)));
// console.log(hasEmptyInArray([1,2,3,4,2,4,4]));


// 第七题 判断某年是不是闰年
// 四年一润，百年不润，400年一润
// function isLeap(year){
//    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//       return true;
//    }
//    return false;
// }
 


// console.log(isLeap(2000));


// var year = +prompt("请输入一个年份");
// if(isLeap(year)){
//    console.log("是闰年");
// }else{
//    console.log("不是闰年");
// }



