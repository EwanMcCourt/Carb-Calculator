'use strict';

//Service worker


if ('serviceWorker' in navigator) {
    console.log('CLIENT: service worker registration in progress.');
    navigator.serviceWorker.register('/~vib20137/MobileAppDevelopment/service-worker.js').then(function() {
        console.log('CLIENT: service worker registration complete.');
    }, function() {
        console.log('CLIENT: service worker registration failure.');

    });
} else {
    console.log('CLIENT: service worker is not supported.');
}




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

        if(carbsSelected===true && pointUsedCarbs===false && carbs.length>0){

            pointUsedCarbs = true;
            carbs = document.getElementById("carbs").innerHTML=carbs+".";
            localStorage.setItem('carbs', carbs);
        }
        if(portionSelected===true && pointUsedPortion===false && portion.length>0){
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


//Favourite
let inputArea = document.getElementById("inputArea");
let submit = document.getElementById("submit");
inputArea.classList.add("displayNone");
submit.classList.add("displayNone");

document.getElementById("favourite").addEventListener("click", function(){

    inputArea.classList.toggle("displayNone");
    submit.classList.toggle("displayNone");
});


setInterval(checkCarbs, 500);

function checkCarbs() {
    if(document.getElementById("carbs").innerHTML===""){
        document.getElementById("favourite").disabled = true;
        inputArea.classList.add("displayNone");
        submit.classList.add("displayNone");
    }
    else{
        document.getElementById("favourite").disabled = false;
    }
}



// localStorage.clear();
let favArray={};
if(localStorage.getItem("favArray")){


    favArray = localStorage.getItem("favArray");

    favArray=  JSON.parse(favArray);

    }






let input = document.getElementById("inputArea");
let idCounter=0;
const element = document.getElementById("favScreen");

for(let i =0;i<Object.keys(favArray).length;i++){
    const para = document.createElement("p");


    const node = document.createTextNode(Object.keys(favArray)[i]);
    para.appendChild(node);
    para.setAttribute("id", "fav"+idCounter.toString());


    element.appendChild(para);
    idCounter++;
}
document.getElementById("submit").addEventListener("click", function(){
    if(document.getElementById("inputArea").value!=="") {
        if(!(input.value in favArray)){

            favArray[input.value] = carbs;

             favArray = JSON.stringify(favArray);

            localStorage.setItem("favArray", favArray);
            favArray = JSON.parse(favArray);

            //https://www.w3schools.com/js/js_htmldom_nodes.asp
            const para = document.createElement("p");

            //getKeyByValue(favArray,carbs)
            const node = document.createTextNode(input.value);
            para.appendChild(node);
            para.setAttribute("id", "fav"+idCounter.toString());


            element.appendChild(para);
            idCounter++;

        input.value="";
        }

    }

});
//https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}


//TABS
let homeScreen = document.getElementById("homeScreen");
let favScreen = document.getElementById("favScreen");
let searchScreen = document.getElementById("searchScreen");
favScreen.classList.add("displayNone");
searchScreen.classList.add("displayNone");
document.getElementById("favList").addEventListener("click", function(){
    favScreen.classList.remove("displayNone");
    homeScreen.classList.add("displayNone");
    searchScreen.classList.add("displayNone");


        for(let i =0;i<Object.keys(favArray).length;i++){
        document.getElementById("fav"+(i).toString()).addEventListener("click", function () {

            favScreen.classList.add("displayNone");
            homeScreen.classList.remove("displayNone");
            searchScreen.classList.add("displayNone");
            carbs = document.getElementById("carbs").innerHTML=favArray[Object.keys(favArray)[i]];
            localStorage.setItem('carbs', carbs);
        });
    }
});
document.getElementById("home").addEventListener("click", function(){
    favScreen.classList.add("displayNone");
    homeScreen.classList.remove("displayNone");
    searchScreen.classList.add("displayNone");

});

let searchBar = document.getElementById("searchBar");
let offlineMessage = document.getElementById("offlineMessage");
document.getElementById("search").addEventListener("click", function(){
    favScreen.classList.add("displayNone");
    homeScreen.classList.add("displayNone");
    searchScreen.classList.remove("displayNone");
    cancelButton.classList.add("displayNone");

        if (navigator.onLine) {

            searchBar.classList.remove("displayNone");
            offlineMessage.classList.add("displayNone");
        } else {
            searchBar.classList.add("displayNone");
            offlineMessage.classList.remove("displayNone");
        }

});




const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultsArea = document.getElementById("resultsArea");
const savedItemsList = document.getElementById("savedItemsList");
const cancelButton = document.getElementById("cancelButton");

searchButton.addEventListener("click", function() {
    if(((searchInput.value).length>4)) {
        fetch(`https://devweb2022.cis.strath.ac.uk/~aes02112/food/?s=${searchInput.value}`)
            .then(response => response.json())
            .then(data => {
                resultsArea.innerHTML = "";
                resultsArea.classList.remove("displayNone");
                if (searchInput.value !== "") {

                    cancelButton.classList.remove("displayNone");
                }


                data.forEach(item => {
                    const paraAllDetails = document.createElement("p");
                    const paraJustName = document.createElement("p");
                    paraAllDetails.setAttribute("style", "border-top: 8px solid mediumpurple;border-radius: 0.3rem; border-bottom: 8px solid mediumpurple;border-radius: 0.3rem;");
                    paraAllDetails.innerHTML = `${item.name} - ${item.carbsper100g}g (carbs/100g)`;
                    paraAllDetails.addEventListener("click", function () {
                        if (!(item.name in favArray)) {
                            favArray[item.name] = ((item.carbsper100g).toFixed(2)).toString();
                            favArray = JSON.stringify(favArray);

                            localStorage.setItem("favArray", favArray);
                            favArray = JSON.parse(favArray);
                            const node = document.createTextNode(item.name);
                            paraJustName.appendChild(node);
                            paraJustName.setAttribute("id", "fav" + idCounter.toString());

                            element.appendChild(paraJustName);
                            resultsArea.removeChild(paraAllDetails);
                            idCounter++;
                        }
                    });
                    resultsArea.appendChild(paraAllDetails);
                });
            });
    }
});


cancelButton.addEventListener("click", function() {
    searchInput.value = "";
    searchInput.innerHTML = "";
    resultsArea.classList.add("displayNone");
    cancelButton.classList.add("displayNone");

});