function bodymass(){

  var weight = document.getElementById('weight').value;
//retrieve value from weight input
  var height = document.getElementById('height').value;
//retrieve value from height input
  var weight_Kg = weight / 2.205;
//uses the value from the weight input, dividing by 2.205 in order to convert to kilograms
  var height_meters =  height / 39.37;
//converts height input in inches and converts to meters
  var meters_Squared = Math.pow(height_meters,2);
//squares the meters after conversion
  var final_BMI =  weight_Kg / meters_Squared;
//divides weight in kg by the squared meters in order to find the final bmi value
  var final_Rounded_BMI = Math.round(final_BMI)
//rounds the final bmi value to the nearest whole number value

display_BMI.innerHTML= "Your BMI is :  "
//displays the final value as "Your BMI is : "

display_BMI_Number.innerHTML= final_Rounded_BMI


if (final_Rounded_BMI < 18) {
document.getElementById("display_BMI_Number").style.color = "#3393FF";

document.getElementById("display_BMI_level").style.color = "#3393FF";
display_BMI_level.innerHTML= "<strong><u>LOW</u></strong>"
display_Info.innerHTML= "It’s important to know that being underweight can affect a person’s health condition as well as being overweight. With this in mind, you should consult your physician or health care provider, discuss the possible reasons for your BMI rate and request related information."

}

else if (final_Rounded_BMI < 25) {
  document.getElementById("display_BMI_Number").style.color = "green";

  document.getElementById("display_BMI_level").style.color = "green";
  display_BMI_level.innerHTML= "<strong><u>NORMAL</u></strong>"
  display_Info.innerHTML= "This is within normal range and considered ‘healthy’ – the risk of serious health issues are reduced. It could also mean you’re healthier than you realise."

}

else if (final_Rounded_BMI < 30) {
  document.getElementById("display_BMI_Number").style.color = "#996300";

  document.getElementById("display_BMI_level").style.color = "#996300";
  display_BMI_level.innerHTML= "<strong><u>OVERWEIGHT</u></strong>"
display_Info.innerHTML= "You are considered to be overweight. Being overweight increases your chances of developing cardiovascular disease. It is advisable you see your doctor for a consultation to discuss weight loss and receive the necessary medical advice."
}

else if (final_Rounded_BMI > 29) {
  document.getElementById("display_BMI_Number").style.color = "red";

  document.getElementById("display_BMI_level").style.color = "red";
  display_BMI_level.innerHTML= "<strong><u>OBESE</u></strong>"
display_Info.innerHTML= "This means an individual is obese. Obesity increases the risk of high blood pressure, cardiovascular disease, breathing problems, Type 2 diabetes and much more.<br><br> <p> Therefore, it is very important you take the time to see your medical advisor.  With such a high BMI, you will need to take the time to think seriously about making drastic and immediate changes in your life. Subject to your doctor’s advice, these changes will include but not limited to the foods you eat and following a strict exercise program. Never forget, you can make healthy choices and benefit from them no matter your weight or age.</p>"
}
  }
