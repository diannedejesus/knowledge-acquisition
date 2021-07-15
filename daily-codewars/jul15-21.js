function getEvenNumbers(numbersArray){
  return numbersArray.filter(el => el % 2 === 0)
}

//
function min(arr, toReturn) {
    let minValue = Math.min(...arr)
  
    if(toReturn === 'value'){
      return minValue
    }else{
      return arr.indexOf(minValue)
    }
  }