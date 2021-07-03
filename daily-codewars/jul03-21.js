function sevenAte9(str){
    let nextSeven = str.indexOf('7')
  
    while(nextSeven != -1){
      if(str[nextSeven+1] === '9'){
        if(str[nextSeven+2] === '7'){
          str = str.slice(0,nextSeven+1) + str.slice(nextSeven+2) 
          nextSeven = str.indexOf('7', nextSeven+1)
        }else{
          nextSeven = str.indexOf('7', nextSeven+1)
        }
      }else{
        nextSeven = str.indexOf('7', nextSeven+1)
      }
    }
     return str
  }

