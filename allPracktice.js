// var age = 35;
// variable typeof 
// numeric, boolean, String
/*
Preemtive: 
    string.
    number.
    bigint.
    boolean.
    undefined.
    symbol.
    null.
NonPreemtive:
    Class
    Object
    String
    Array
    Interface

*/

/*
math Operation:
+, -, *, /
Conditional Operation:
<, >, ===,!==, <=, >=, ++, --;
*/

/*
var num1 = 15;
var num2 = 25; 
var num3 = 188;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1)
    }
    else{
        console.log(num2)
    }
} else{
    if(num3 > num2){
        console.log(num3)
    }
    else{
        console.log(num2)
    }
}
*/

// Declare array 
// var numbers = [15, 28, 23, 58, 66, 10];

// for ( let i = 0; i < numbers.length; i++){
//     var index = i;
//     var element = numbers[index];
//     console.log(index, element)
// }


// set the value 
/*
numbers[3]=15;
console.log(numbers)
*/

// index of 
/*
var position = numbers.indexOf(23);
console.log(position)
*/

// push 

// numbers.push(88)
// console.log(numbers)


// pop Element
// numbers.pop();
// console.log(numbers)


// break statement
// var numbers = [15, 28, 23, 58, 66, 10];
// for ( let i = 0; i < numbers.length; i++){
//         var index = i;
//         var element = numbers[index];
//         console.log(index, element)
//         if(element == 23){
//             break;
//         }
//     }



// continue statement
// var numbers = [15, 28, 23, 58, 66, 10];
// for ( let i = 0; i < numbers.length; i++){
//         var index = i;
//         var element = numbers[index];
//         // console.log(index, element)

//         if(element >= 58){
//             continue;
//         }
//         console.log(index, element)
//     }



// function 
// use return value to the other function
/*
function sum(num1, num2){
    var result = num1 + num2;
    return result;
}

function multiNumbers(totalSum){
    var multi = totalSum * 2;
    return multi
}

var totalSum = sum(20, 25);
var totalMulti = multiNumbers(totalSum)
console.log(totalMulti);
*/


// object all information 
// var laptop = {
//     brand: 'Dell',
//     processor: 'core i-3',
//     generation: 'seventh',
//     Hdd:'2Gb',
//     display: 14,
//     price: 3500
// }


// only properity of object 
// var properity = Object.keys(laptop)
// console.log(properity)
  
// only value of objects
// var valueOfObject = Object.values(laptop)
// console.log(valueOfObject)


// get spacific  value on an object 
// var getValue = laptop["display"]
// or 
// var getValue = laptop.display
// console.log(getValue);


// var laptop = {
//     brand: 'Dell',
//     processor: 'core i-3',
//     generation: 'seventh',
//     Hdd:'2Gb',
//     display: 14,
//     price: 3500
// }


// set value of an object 

// laptop['display']= 18;
// console.log(laptop)
// // or 
// laptop.display=22;
// console.log(laptop)
// // or 
// // properity k variable a converty kore niye 
// var properityName = 'generation';
// laptop[properityName] = 'twelve';
// console.log(laptop)



// find object Properity name  in loop
/*
var laptop = {
    brand: 'Dell',
    processor: 'core i-3',
    generation: 'seventh',
    Hdd:'2Gb',
    display: 14,
    price: 3500
}

var properities = Object.keys(laptop)
for(var i = 0; i <properities.length ; i++){
    var index = i;
    var element = properities[index];
    console.log(index, element);
}
*/

// find object Properity values  in loop
/*
var laptop = {
    brand: 'Dell',
    processor: 'core i-3',
    generation: 'seventh',
    Hdd:'2Gb',
    display: 14,
    price: 3500
}

var properityValues = Object.values(laptop)
for(var i = 0; i <properityValues.length ; i++){
    var index = i;
    var element = properityValues[index];
    console.log(index, element);
}
*/


// convert cencious to farenheight
/*
function celCiousToFarenheitht(celcious){
    var farenheight = celcious * (9/5) +32;
    return farenheight;

}
var celcious = 15;
var result = celCiousToFarenheitht(celcious);
console.log(result)
*/


// farenheiht to celcious
/*

function farenHeightToCelcious(farenheight){
    var celcious = (farenheight - 32) * (5/9);
    return celcious;
}
 
var farenheight = 52;
var result = farenHeightToCelcious(farenheight);
var fixedresult = result.toFixed(4)
console.log(fixedresult);
*/


// simpleInterst 
/*
function simpleInterst(amount, time, rate){
    var simpleInterst = (amount * rate * time)/100;
    return simpleInterst;
}
var interstAmount = simpleInterst(1000, 10, 2);
console.log(interstAmount)
*/

// complex or compound interest 

// function complexInterest(principle, rate, nth, time){
//     var complexAmount = principle * (1 + rate/nth) ^ (nth*time);
//     return complexAmount;

// }
// var interstAmount = complexInterest(1000, 5, 4, 2)
// console.log(interstAmount);