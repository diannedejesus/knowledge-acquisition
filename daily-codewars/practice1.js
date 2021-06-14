function hasUniqueChars(str){
  let uniqueArray = {}
  for(let i=0; i<str.length; i++){
    if(uniqueArray[str[i]]){
      return false
    }else{
      uniqueArray[str[i]] = str[i]
    }
  }
  return true
}