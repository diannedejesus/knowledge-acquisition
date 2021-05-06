function highAndLow(numbers){
  let numberArray = numbers.split(' ')
  let highLow = [numberArray[0], numberArray[0]]
  
  numberArray.forEach(el => {
    if(Number(el) > highLow[0]){
      highLow[0] = el
    }
    if(Number(el) < highLow[1]){
      highLow[1] = el
    }
  })
  return highLow.join(' ')  
}