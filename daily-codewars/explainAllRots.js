function containAllRots(str, arr) {
  for (var i = 0; i < str.length; i++) {
    if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
      return false
    }
  }
  return true
}

//in this solution a for loop is used to go through every rotation of the string
//by slicing the string from the index to the end of the string and concatanating it
//to the slice from the start of the string to the index 
//the indexOf is used to verify if that rotation is in the array if not
//then not all rotations are contained so the answer is false
//if false is never returned then the answer is true.