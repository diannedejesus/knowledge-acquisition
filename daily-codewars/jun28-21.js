var splitInParts = function(s, partLength){
  let newString = ''
  
  for(let i=1; i<=s.length; i++){
    if(i%partLength === 0){
      newString += s[i-1] + ' '
    }else{
      newString += s[i-1]
    }
  }
  return newString.trim()
}