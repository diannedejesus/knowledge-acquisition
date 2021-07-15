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

  //in this one they are using reduce to solve the problem
  //the initialize the accumalar with an object that contains the keys of value and index
  //with reduce the verify if the current value is smaller than what is stored in the accumlators
  //value key if so they store the new value and its index 
  //if not the return the current accumalator
  //after it goes through the array reduce returns the accumalator which is an object
  //so the use the second parameter to select which key of the object to return

  function min(arr, toReturn) {
    return arr.reduce(function(o, v, i){
      return (v < o.value) ? (o.value = v, o.index = i, o) : o;
    }, {value: Infinity, index: 0})[toReturn];
  }