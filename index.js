// var btnSelect=document.querySelector('button');
// btnSelect.addEventListener("click", displayClock);

setInterval(displayClock,1000);

function displayClock(){
    var date=new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    minutes=formatTme(minutes);
    seconds=formatTme(seconds);
    var times=hours+":"+minutes+":"+seconds;
    
  document.getElementById("para").innerHTML=times

    // setInterval(displayClock,1000);
    
};

function formatTme(value){
if(value<10){
    value="0"+value;
}
return value;
}
