function triangle(row) {
  let combos = {'BG':'R', 'RG':'B', 'BR':'G','GB':'R', 'GR':'B', 'RB':'G' }
  let reducedArray = row.split('')
  
  while(reducedArray.length >= 2){
    let a = reducedArray.slice(0,1)
    let b = reducedArray.slice(1,2)
    reducedArray.splice(0,2, a === b ? a : combos[a+b])
  }
  
  return reducedArray[0]
}

console.log(triangle('GB'))

//this does not work on codewars for some reason.
//cant get the value out of the array.
//the solution is not the correct one but it is a curious error