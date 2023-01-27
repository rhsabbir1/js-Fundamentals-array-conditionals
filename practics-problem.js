/***
 * Module 
 * 18.9
 * Practics Problem
*/

// problem 1 
var furit = ['Apple' , 'Banana' , 'Orange'];

var indexBanand = furit.indexOf('Banana') // Find index
furit[1]="Mango"; // Replac Banana with Mango
// console.log(indexBanand)
// console.log(furit)

furit.pop() // Remove Orange
// console.log(furit)

furit.push('Watermelon') // Add Watermelon
// console.log(furit)


// Practice Problem 2

var sajid = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var jhon = 40;
var me = 35;

var scors = sajid;

// if(scors >= 80 || scors >= 40){
//     if(scors <= 100 && scors >= 80){
//         console.log('Your Gread A')
//     }
//     else if(scors < 80 && scors >= 70){
//         console.log('Your Gread A-')
//     }
//     else if(scors < 70 && scors >= 60){
//         console.log('Your Gread B')
//     }
//     else if(scors < 60 && scors >= 50){
//         console.log('Your Gread C')
//     }
//     else{
//         console.log('Your Gread D')
//     }
// }
// else{
//     console.log('Your Gread F')
// }

var number1 = 13;
var number2 = 79;
var number3 = 45;


if(number1 > number2){
    if(number1 > number3){
        console.log('Number 1 is largest')
    }
    else{
        console.log('Number 3 is largest')
    }
}

else if (number2 > number1){
    if(number2 > number3){
        console.log('Number 2 is largest')
    }
    else{
        console.log('Number 3 is largest')
    }
}

else{
    console.log('Number 3 is largest')
}
