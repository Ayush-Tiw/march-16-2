"use strict";

//Javascript Prompt() function
// "use strict";
// // prompt is a function is used get input from the user from javascript functionality not from html

// let number=prompt("Enter the number")//javascript functionalit to get userinput

// let name=prompt("your name")

// for(let i=1;i<=10;i++){
// let result=number*i;
// document.write(result+" ")
// }

// document.write(name)

//confirm box
//it is a javascript function pop up a dialogue box  on screen which has okk and cancel button 

//confirm() is a javascript functionality which pp up a dialogue box with OK and Cancel associated with it .
//Itf you click okk then true otherwise false

// let suman=confirm("Who am i");

// let data=confirm("is it RED Colour?")

// if(data==true){
//     alert("it is RED Color box !")
// }
// else{
//     alert("different color")
// }
// //save the cookie in sytem use confirm box


//WHAT IF YOU NEED TO CALL A FUNTION FOR SPECIFIC TIME

//setTimeOut

// function suman(){
//     document.write("Ayush Tiwari");
// }
// // suman();

// // setTimeout()-->inbuilt function of js it require two input 1.the function to be called,2.time after which you want to call the function every time in miliseconds

// setTimeout(suman,10000)//setTimeout is a call back function (call back function are function which call another function),it will calls one after sometime


//real life example
//create a clock 

// function my_clock(){
//     let date=new Date();
//     let hours=date.getHours();
//     let minutes=date.getMinutes();
//     let seconds=date.getSeconds();
//     let period="AM";
//     if(hours==0){
//         hours=12
//     }
//     else if(hours>=10){
//         hours=hours-12;
//         period="PM";
//     }
    
//     document.getElementById("clock").innerHTML=hours+":"+minutes+":"+seconds+":"+period;
//     setTimeout(my_clock,1000);
// }

// my_clock();


//setInterval() function-->calls methods after specified interval

// setInterval(function(){
//     document.write("Ayush")
// },10000)
// //it will repeat itself infine time after specific time untill someone stop,repeat again and again

// //to stop the setInterval function we use clearInterval() function


//Example for setInterval function


"use strict";

let seconds=0;
let minutes=0;
let interval=0;
let minutes_value=document.getElementById("minutes");
let seconds_value=document.getElementById("seconds");
let start_button=document.getElementById("start");
let stop_button=document.getElementById("stop");
let reset_button=document.getElementById("reset");

function suman(){
    minutes++;
    if(minutes<9){
        minutes_value.innerHTML=0
    }
    else if(minutes>9){
        minutes_value.innerHTML=minutes;
    }
    else if(minutes>99){
        seconds++;
        seconds_value.innerHTML=0;
minutes_value.innerHTML="0"+0
    }
    else if(seconds>9){
        seconds_value.innerHTML=seconds;
    }

}

start_button.onclick=function(){
    interval= setInterval(suman);
};

stop_button.onclick=function(){
    clearInterval(interval);
};

reset_button.onclick=function(){
    clearInterval(interval);
    minutes="00";
    seconds="00";
    seconds_value.innerHTML=seconds;
    minutes_value.innerHTML=minutes;
}