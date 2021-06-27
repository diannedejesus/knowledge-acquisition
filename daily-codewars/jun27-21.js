function calculate(str) {
  if(str.includes('plus') && str.includes('minus')){
    return '' + str.split('plus').reduce((acc, val) => {
      return val.includes('minus') ? +acc + val.split('minus').reduce((a, v) => +a - +v) : +acc + +val
    }, 0)

  }else if(str.includes('plus')){
    return '' + str.split('plus').reduce((acc, val) => +acc + +val)
  }else if(str.includes('minus')){
    return '' + str.split('minus').reduce((acc, val) => +acc - +val)
  }
  
  return str.split();
}