"use strict"
let big= Number;
big=prompt("type a 3 digit number");
let fBig=(Math.floor (big/100));
let sBig=(Math.floor((big%100)/10));
let tBig=  (big%10);
if((Math.pow(fBig,3))+(Math.pow(sBig,3))+(Math.pow(tBig,3))==big)
alert(big +' is an Armstrong number!');
else
alert(big+' is not an Armstrong number!');
