var gimme = function (inputArray) {
  let sortedArray = inputArray.map(el => el)
  sortedArray.sort((a,b)=> a-b)
  
  return inputArray.indexOf(sortedArray[1])
};

//in this second one they find the max and min value of the array
//then the loop through the array to find the index of the value 
//that does not match either value.

var gimme = function (inputArray) {
    let index = 0;
    let max = Math.max(...inputArray);
    let min = Math.min(...inputArray);
    for(let i = 0; i < inputArray.length; i++){
      if(inputArray[i] !== max && inputArray[i] !== min){        
        index = i;
      }
    }
    return index;
  };

