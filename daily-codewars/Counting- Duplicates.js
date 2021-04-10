function duplicateCount(text){
    let textArray = text.toUpperCase().split('')
    let countRepeated = 0
    textArray.forEach(() => {
      const letter = textArray.shift()
      if(textArray.includes(letter)){
        let regex = new RegExp(letter, "g");
        textArray = textArray.join('').replace(regex, '').split('')
        
        countRepeated++
      }
                                
    })
    return countRepeated
  }