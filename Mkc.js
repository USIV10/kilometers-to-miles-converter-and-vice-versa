(function(){
"use strict";

let convertType = "miles";
const heading = document.querySelector('h1');
const intro = document.querySelector('p');
const answerDiv = document.getElementById('answer');
const form = document.getElementById('convert');



document.addEventListener('keydown', function(event){
var key = event.code;
    if(key === 'KeyK'){
        convertType = 'Kilometers';
        heading.innerHTML = 'Kilometers to Miles Converter';
        intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';
    }
    else if(key === 'KeyM'){
        convertType = 'miles';
        heading.innerHTML = 'Miles to Kilometers Converter';
        intro.innerHTML = 'Type in a number of miles and click the button to convert the distance kilometers.';
    }
    

    
});
form.addEventListener('submit', function(e){
e.preventDefault();

const distance = parseFloat(document.getElementById('distance').value);

//alert(distance);
if (distance) {
//convert M to K
//convert K to M
        
if(convertType == 'miles'){
    const conversion = (distance * 1.609344).toFixed(3);
    
    answerDiv.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`; 

    }
    else{
            const conversion = (distance * 0.621371192).toFixed(3);
    
    answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${conversion} miles</h2>`; 
    }

}else{
    answerDiv.innerHTML = "<h2>Please provide a number!</h2>";
}


});



})();