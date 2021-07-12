const binaryArrayToNumber = arr => {
  let result = 0

  for(let i=0; i<arr.length; i++){
    if(arr[arr.length - (i+1)] !== 0){
      result += 1 << i
    }
  } 
  return result
};