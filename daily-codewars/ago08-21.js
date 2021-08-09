var isValid = function(s) {
    if(s.length % 2 !== 0) {return false}
  const pairs = {"(":")","[":"]","{":"}"}
  let bracketStack = []

  for(let i=0; i<s.length; i++){
     if(pairs[s[i]]){
        bracketStack.unshift(pairs[s[i]])
    }else{
      if(s[i] === bracketStack[0]){
        bracketStack.shift()
      }else{
        return false
      }
    }
  }

  return bracketStack.length === 0 ? true : false
};