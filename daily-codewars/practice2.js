function triangle(row) {

  if(row.length > 1){
    return check(row.split(''))
  }else{
    return row
  }
  
}

function check(newString){
  const combos = {'BG':'R', 'RG':'B', 'BR':'G','GB':'R', 'GR':'B', 'RB':'G' }
  let nextString = ''
  
  for(let i=0; i<newString.length-1; i++){
    if(newString[i] === newString[i+1]){
      nextString += newString[i]
    }else{
      nextString += combos[newString[i] + newString[i+1]]
    }
  }
  
  if(nextString.length > 1){
    return check(nextString.split(''))
  }else{
    return nextString
  }
}