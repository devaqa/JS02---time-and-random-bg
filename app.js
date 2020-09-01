let button = document.getElementById('button');
let time = document.getElementById('timeField');
let bgColor = document.getElementById('changeBgColor');


function showDate(){
    time.innerHTML = Date();
}

button.addEventListener('click', showDate);



//  Background Changer function

function random(num){
    return Math.floor(Math.random() * num + 1);
}

function colorGenerator(){
    const color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = color;
}

bgColor.addEventListener('click',colorGenerator );