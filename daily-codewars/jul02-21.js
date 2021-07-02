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

//

function borrow(s){
    return [...s.toLowerCase()].filter(el => el.charCodeAt(0) > 96 && el.charCodeAt(0) < 123).join('')
  }

//

function initializeNames(name){
    let nameArray = name.split(' ')
    if(nameArray.length > 2){
      for(let i=1; i < nameArray.length-1; i++){
        nameArray[i] = nameArray[i][0] + '.'
      }
    }else{
      return name
    }
    
    return nameArray.join(' ')
  }

  //
  function tea42(input) {
    return [...String(input)].map(el => el === '2' ? 't' : el).join('')
  };