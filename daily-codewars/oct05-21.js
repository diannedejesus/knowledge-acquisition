var countBits = function(n) {
  let convert = (n).toString(2)
  let counter = 0

  convert.split('').forEach(el => el === '1' ? counter++ : '' )
  
  return counter
};