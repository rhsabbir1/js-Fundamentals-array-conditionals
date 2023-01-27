
var isGraduate = true;
var sellary = 50000;
var cars = 1;

if(isGraduate == true){
    // console.log('She is accepted')
}



if(isGraduate == true && sellary >= 50000){
    // console.log('She is accepted')
}
else{
    console.log('Cancle')
}



if(isGraduate == true && sellary >= 50000 && cars > 0){
    console.log("Accepted")
}
else{
    console.log('Cancle')
}



if(isGraduate == true || sellary >= 50000 || cars > 0){
    console.log("Accepted")
}
else{
    console.log('Cancle')
}



if((isGraduate == true && sellary >= 50000) || cars > 0){
    console.log("Accepted")
}
else{
    console.log('Cancle')
}