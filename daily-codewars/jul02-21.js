function dative(word) {
  const nek = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű']
  const nak = ['a', 'á', 'o', 'ó', 'u', 'ú']
  
  for(let i=word.length; i>-1; i--){
    if(nek.includes(word[i])){
      return word + 'nek'
    }else if(nak.includes(word[i])){
      return word + 'nak'
    }
  }
}