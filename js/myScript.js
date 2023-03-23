var q20 = "\"A good conscience is a continual Christmas\" - Benjamin Franklin";
var q21 = "\"If you want to lift yourself up, lift up someone else\" - Booker T. Washington";
var q22 = "\"You’re braver than you believe, stronger than you seem, and smarter than you think.\" - A.A. Milne";
var q23 = "\"It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.\" - Madeleine Albright";
var q24 = "\"There is no misery that could be a match for My mercy, neither will misery exhaust it, because as it is being granted - it increases.\" - Divine Mercy Jesus";
var q25 = "\" Don't solve your problems, dissolve it. \" - Anonymous";

var element = document.querySelector(".quotes");

var dateObj = new Date();

  var day = dateObj.getDate();

var q = "Quote of the day : ";

if(day == 20)
  element.textContent = q + q20;

else if(day == 21)
  element.textContent = q + q21;

else if(day == 22)
  element.textContent = q + q22;

else if(day == 23)
  element.textContent = q + q23;

else if(day == 24) 
  element.textContent = q + q24;

else if(day == 25) 
  element.textContent = q + q25;

else
  element.textContent = q;
