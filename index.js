var bodyweight = 100;
console.log("This is the user's bodyweight " + bodyweight)
var height = 1.91
console.log("This is the user's bodyweight " + height)
var m2 = Math.pow(height, 2);
console.log("This is the user's height to the second power " + m2)

var userBMI = bodyweight/m2;
console.log("This is the User's dirty BMI " + userBMI)

//Underweight <18.5
if (userBMI < 18.5){
category = "Underweight"
//Normal 18.5-24.9
}
else if(userBMI > 18.6 && userBMI < 24.9) {
category = 'Normal'
}
//Overweight 25-29
else if (userBMI > 25 && userBMI < 29.9) {
category = 'Overweight'
}
//Obese 30-34.9
else if (userBMI > 30 && userBMI < 34.9) {
category = 'Obese'
}
//Extremely Obese 35+
else if (userBMI > 35){
category = 'Extremely Obese'
}


alert("Your BMI is " + userBMI +"." + " You are " + category+".");
