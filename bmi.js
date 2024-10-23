var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalcontent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculate(){
    if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked== false) ){
        modal.style.display = "block";
        modalText.innerHTML = 'All fields are required';

    }else{
           countBmi();
    }
}

function countBmi(){
    var p = [age.value, height.value, weight.value];
    if(male.checked){
        p.push("male");
    }else if(female.checked){
        p.push("female");
    }

    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

    var result ='';
    if(bmi<18.5){
        result = 'Underweight';
    }else if(18.5<=bmi&&bmi<=24.9){
        result = 'Healthy';
    }else if(25<=bmi&&bmi<=29.9){
        result = 'Overweight';
    }else if(30<=bmi&&bmi<=34.9){
        result = 'Obese';
    }else if(35<=bmi){
        result = 'Extremely obese';
    }

    // fitness plan for each BMI
    var bmi;
    var selectedLink;
    if(bmi<18.5){
        selectedLink = "underweight.html";
    }else if(18.5<=bmi && bmi<=24.9){
        selectedLink = "healthy.html";
    }else if(25<=bmi && bmi<=29.9){
        selectedLink = "overweight.html";
    }else if(30<=bmi && bmi<=34.9){
        selectedLink= "obese.html";
    }else if(35<=bmi){
        selectedLink  = "extremely_obese.html";
    }

    var fitnessplan = document.getElementById("fitnessplan");
    var link = document.createElement("a");
    link.textContent = "click here to get fitness plan";
    link.href = selectedLink;
    fitnessplan.appendChild(link);


    
    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2); //tofixed is used for getting only 2 digit after decimal point
}



// when the user clicks on <span> (x) , close the modal
span.onclick = function(){
    modal.style.display = "none";
}

//when user click anywhere outside of the modal , close it
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}