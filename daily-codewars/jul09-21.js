function logicalCalc(array, op){
    return !!array.reduce((acc, el)=> {
      if(op === 'AND'){
       return acc && el
      }else if(op === 'OR'){
        return acc || el
      }else if(op === 'XOR'){
        return acc ^ el
      }
    } )
}