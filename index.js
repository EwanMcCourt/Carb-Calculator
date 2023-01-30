'use strict';

let carbs = document.getElementById("carbs").innerHTML ="";
let portion = document.getElementById("portion").innerHTML ="";
let answer = document.getElementById("answer");
if(localStorage.getItem('answer')){
    answer.textContent = localStorage.getItem('answer');
}
if(localStorage.getItem('carbs')) {
     carbs = document.getElementById("carbs").innerHTML = localStorage.getItem('carbs');
}
if(localStorage.getItem('portion')) {
     portion = document.getElementById("portion").innerHTML = localStorage.getItem('portion');
}


//event listeners
let carbsListener = document.getElementById("carbsSelect");
carbsListener.classList.add("selected");
let portionListener = document.getElementById("portionSelect");
let carbsSelected = true;
let portionSelected = false;

carbsListener.addEventListener("click", function(){
    carbsSelected = true;
    portionSelected=false;
    carbsListener.classList.add("selected");
    portionListener.classList.remove("selected");
});
portionListener.addEventListener("click", function(){
    portionSelected = true;
    carbsSelected=false;
    portionListener.classList.add("selected");
    carbsListener.classList.remove("selected");
});

//Calculate total
document.getElementById("calculate")
    .addEventListener("click", event=>{

        answer.textContent = Math.round(portion * carbs / 100);
        localStorage.setItem('answer', answer.textContent);
    });



//Calculator pad
let pointUsedCarbs = false;
let pointUsedPortion = false;
let pointDigitsCarbs = 0;
let pointDigitsPortion = 0;
document.getElementById("seven")
    .addEventListener("click", event=>{
        if((carbs.length <4 && pointUsedCarbs ===false) || (pointUsedCarbs ===true && pointDigitsCarbs<2)){
            if(pointUsedCarbs===true){
                ++pointDigitsCarbs;
            }
            if(carbsSelected===true){
                carbs = document.getElementById("carbs").innerHTML=carbs+"7";
                localStorage.setItem('carbs', carbs);

            }
        }
        if((portion.length <4 && pointUsedPortion ===false) || (pointUsedPortion ===true && pointDigitsPortion<2)) {
            if(pointUsedPortion===true){
                ++pointDigitsPortion;
            }
            if (portionSelected === true) {
                portion = document.getElementById("portion").innerHTML = portion + "7";
                localStorage.setItem('portion', portion);
            }
        }
    });
document.getElementById("eight")
    .addEventListener("click", event=>{
        if((carbs.length <4 && pointUsedCarbs ===false)|| (pointUsedCarbs ===true && pointDigitsCarbs<2)){
            if(pointUsedCarbs===true){
                ++pointDigitsCarbs;
            }
            if(carbsSelected===true){
                carbs = document.getElementById("carbs").innerHTML=carbs+"8";
                localStorage.setItem('carbs', carbs);
            }
        }
        if((portion.length <4 && pointUsedPortion ===false) || (pointUsedPortion ===true && pointDigitsPortion<2)) {
            if(pointUsedPortion===true){
                ++pointDigitsPortion;
            }
            if (portionSelected === true) {
                portion = document.getElementById("portion").innerHTML = portion + "8";
                localStorage.setItem('portion', portion);
            }
        }
    });
document.getElementById("nine")
    .addEventListener("click", event=>{
        if((carbs.length <4 && pointUsedCarbs ===false)|| (pointUsedCarbs ===true && pointDigitsCarbs<2)){
            if(pointUsedCarbs===true){
                ++pointDigitsCarbs;
            }
            if(carbsSelected===true){
                carbs = document.getElementById("carbs").innerHTML=carbs+"9";
                localStorage.setItem('carbs', carbs);
            }
        }
        if((portion.length <4 && pointUsedPortion ===false)|| (pointUsedPortion ===true && pointDigitsPortion<2)) {
            if(pointUsedPortion===true){
                ++pointDigitsPortion;
            }
            if (portionSelected === true) {
                portion = document.getElementById("portion").innerHTML = portion + "9";
                localStorage.setItem('portion', portion);
            }
        }
    });
document.getElementById("four")
    .addEventListener("click", event=>{
        if((carbs.length <4 && pointUsedCarbs ===false) || (pointUsedCarbs ===true && pointDigitsCarbs<2)){
            if(pointUsedCarbs===true){
                ++pointDigitsCarbs;
            }
            if(carbsSelected===true){
                carbs = document.getElementById("carbs").innerHTML=carbs+"4";
                localStorage.setItem('carbs', carbs);
            }
        }
        if((portion.length <4 && pointUsedPortion ===false)|| (pointUsedPortion ===true && pointDigitsPortion<2)) {
            if(pointUsedPortion===true){
                ++pointDigitsPortion;
            }
            if (portionSelected === true) {
                portion = document.getElementById("portion").innerHTML = portion + "4";
                localStorage.setItem('portion', portion);
            }
        }
    });
document.getElementById("five")
    .addEventListener("click", event=>{
        if((carbs.length <4 && pointUsedCarbs ===false) || (pointUsedCarbs ===true && pointDigitsCarbs<2)){
            if(pointUsedCarbs===true){
                ++pointDigitsCarbs;
            }
            if(carbsSelected===true){
                carbs = document.getElementById("carbs").innerHTML=carbs+"5";
                localStorage.setItem('carbs', carbs);
            }
        }
        if((portion.length <4 && pointUsedPortion ===false) || (pointUsedPortion ===true && pointDigitsPortion<2)) {
            if(pointUsedPortion===true){
                ++pointDigitsPortion;
            }
            if (portionSelected === true) {
                portion = document.getElementById("portion").innerHTML = portion + "5";
                localStorage.setItem('portion', portion);
            }
        }
    });
document.getElementById("six")
    .addEventListener("click", event=>{
        if((carbs.length <4 && pointUsedCarbs ===false) || (pointUsedCarbs ===true && pointDigitsCarbs<2)){
            if(pointUsedCarbs===true){
                ++pointDigitsCarbs;
            }
            if(carbsSelected===true){
                carbs = document.getElementById("carbs").innerHTML=carbs+"6";
                localStorage.setItem('carbs', carbs);
            }
        }
        if((portion.length <4 && pointUsedPortion ===false) || (pointUsedPortion ===true && pointDigitsPortion<2)) {
            if(pointUsedPortion===true){
                ++pointDigitsPortion;
            }
            if (portionSelected === true) {
                portion = document.getElementById("portion").innerHTML = portion + "6";
                localStorage.setItem('portion', portion);
            }
        }
    });
document.getElementById("one")
    .addEventListener("click", event=>{
        if((carbs.length <4 && pointUsedCarbs ===false)|| (pointUsedCarbs ===true && pointDigitsCarbs<2)){
            if(pointUsedCarbs===true){
                ++pointDigitsCarbs;
            }
            if(carbsSelected===true){
                carbs = document.getElementById("carbs").innerHTML=carbs+"1";
                localStorage.setItem('carbs', carbs);
            }
        }
        if((portion.length <4 && pointUsedPortion ===false) || (pointUsedPortion ===true && pointDigitsPortion<2)) {
            if(pointUsedPortion===true){
                ++pointDigitsPortion;
            }
            if (portionSelected === true) {
                portion = document.getElementById("portion").innerHTML = portion + "1";
                localStorage.setItem('portion', portion);
            }
        }
    });
document.getElementById("two")
    .addEventListener("click", event=>{
        if((carbs.length <4 && pointUsedCarbs ===false)|| (pointUsedCarbs ===true && pointDigitsCarbs<2)){
            if(pointUsedCarbs===true){
                ++pointDigitsCarbs;
            }
            if(carbsSelected===true){
                carbs = document.getElementById("carbs").innerHTML=carbs+"2";
                localStorage.setItem('carbs', carbs);
            }
        }
        if((portion.length <4 && pointUsedPortion ===false)|| (pointUsedPortion ===true && pointDigitsPortion<2)) {
            if(pointUsedPortion===true){
                ++pointDigitsPortion;
            }
            if (portionSelected === true) {
                portion = document.getElementById("portion").innerHTML = portion + "2";
                localStorage.setItem('portion', portion);
            }
        }
    });
document.getElementById("three")
    .addEventListener("click", event=>{
        if((carbs.length <4 && pointUsedCarbs ===false) || (pointUsedCarbs ===true && pointDigitsCarbs<2)){
            if(pointUsedCarbs===true){
                ++pointDigitsCarbs;
            }
            if(carbsSelected===true){
                carbs = document.getElementById("carbs").innerHTML=carbs+"3";
                localStorage.setItem('carbs', carbs);
            }
        }
        if((portion.length <4 && pointUsedPortion ===false)|| (pointUsedPortion ===true && pointDigitsPortion<2)) {
            if(pointUsedPortion===true){
                ++pointDigitsPortion;
            }
            if (portionSelected === true) {
                portion = document.getElementById("portion").innerHTML = portion + "3";
                localStorage.setItem('portion', portion);
            }
        }
    });
document.getElementById("zero")
    .addEventListener("click", event=>{
        if((carbs.length <4 && pointUsedCarbs ===false) || (pointUsedCarbs ===true && pointDigitsCarbs<2)){
            if(pointUsedCarbs===true){
                ++pointDigitsCarbs;
            }
            if(carbsSelected===true){
                carbs = document.getElementById("carbs").innerHTML=carbs+"0";
                localStorage.setItem('carbs', carbs);
            }
        }
        if((portion.length <4 && pointUsedPortion ===false) || (pointUsedPortion ===true && pointDigitsPortion<2)) {
            if(pointUsedPortion===true){
                ++pointDigitsPortion;
            }
            if (portionSelected === true) {
                portion = document.getElementById("portion").innerHTML = portion + "0";
                localStorage.setItem('portion', portion);
            }
        }
    });
document.getElementById("point")
    .addEventListener("click", event=>{

        if(carbsSelected===true && pointUsedCarbs===false){

            pointUsedCarbs = true;
            carbs = document.getElementById("carbs").innerHTML=carbs+".";
            localStorage.setItem('carbs', carbs);
        }
        if(portionSelected===true && pointUsedPortion===false){
            pointUsedPortion = true;
            portion = document.getElementById("portion").innerHTML=portion+".";
            localStorage.setItem('portion', portion);
        }
    });
document.getElementById("clear")
    .addEventListener("click", event=>{

        if(carbsSelected===true){
            pointDigitsCarbs=0;
            pointUsedCarbs = false;
            carbs = document.getElementById("carbs").innerHTML="";
            localStorage.setItem('carbs', carbs);
        }
        if(portionSelected===true){
            pointDigitsPortion=0;
            pointUsedPortion = false;
            portion = document.getElementById("portion").innerHTML="";
            localStorage.setItem('portion', portion);
        }
    });