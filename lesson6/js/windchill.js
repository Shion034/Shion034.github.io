let t=44
let s=5

let airTem=0.6215*t;

let _windSpeedPow=Math.pow(s,0.16);

let f=35.74+airTem-(35.75*_windSpeedPow)+(0.4275*t*_windSpeedPow);

if(t<=50 && s>=3){
    document.getElementById("windChill").innerHTML=(Math.round(f*10)/10);
}
 else{
     document.getElementById("windChill").innerHTML="N/A";
 }        