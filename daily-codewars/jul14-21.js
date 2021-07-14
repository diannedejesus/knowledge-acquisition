var gimme = function (inputArray) {
  let sortedArray = inputArray.map(el => el)
  sortedArray.sort((a,b)=> a-b)
  
  return inputArray.indexOf(sortedArray[1])
};