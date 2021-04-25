function spinWords(string){
  let wordArray = string.split(" ")
  
  if(!wordArray[0] && wordArray.length >= 5){
    wordArray = wordArray.split('').reverse().join('')
  }
  for(let i=0; i<wordArray.length; i++){
    if(wordArray[i].length >= 5){
      wordArray[i] = wordArray[i].split('').reverse().join('')
    }
  }
  return wordArray.join(' ')
}