function formatPoem(poem) {
  return poem.split('. ').join('.\n') 
}

//2
function sumFromString(str){
  let results = [0,'']

  for(let i=0; i<str.length; i++){ 
    if(Number(str[i]) > -1 && Number(str[i+1]) > -1){
      results[1] += str[i]
    }else if(Number(str[i]) > -1){
      results[0] += Number(results[1]+str[i])
      results[1] = ''
    }
  }
  return results[0]
}

//3

function areaCode(text) {
  //   let tester = text.split('(')
  //   tester = tester[1].split(')')
  //   return tester[0];
    
    let indexParenthesis = text.indexOf('(')
    
    while(indexParenthesis > -1){
      let areacode = text.substring(indexParenthesis+1, indexParenthesis+4)
      if(Number(areacode)){
        return areacode
      }
      indexParenthesis = text.indexOf('(', indexParenthesis+1)
    }
  }


    