let val1=document.getElementById('value1');
let val2=document.getElementById('value2');
let val3=document.getElementById('value3');

let values=[  
function getRandom()
{
    return values[Math.floor(Math.random()*7)];
},

setInterval(()=>
{
    val1.innerHTML=getRandom();
    val2.innerHTML=getRandom();
    val3.innerHTML=getRandom();
    
},100)
