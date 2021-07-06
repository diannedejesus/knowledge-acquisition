function getCount(words) {
  const vowels = 'aeiou'
  const consonants = 'bcdfghjklmnpqrstvwxyz'
  let result = {vowels:0, consonants:0}
  
  if(typeof words !== 'string') return result
  
  words = words.toLowerCase()
  
  for(let i=0; i<=words.length; i++){
    if(vowels.includes(words[i])){
      result['vowels']++
    }else if(consonants.includes(words[i])){
      result['consonants']++
    }
  }
  return result
}

//2
function orderWord(s){
    if(typeof s !== 'string' || !s || s === '') return 'Invalid String!'
    
    return [...s].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
  }