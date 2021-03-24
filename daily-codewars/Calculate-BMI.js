function bmi(weight, height) {
  const bmi = weight / height**2
  let state = ""
  
  if(bmi <= 18.5){
    state = "Underweight"
  }else if(bmi <= 25.0){
    state = "Normal"
  }else if(bmi <= 30.0){
    state = "Overweight"
  } else{
    state = "Obese"
  }
  
  return state;
}