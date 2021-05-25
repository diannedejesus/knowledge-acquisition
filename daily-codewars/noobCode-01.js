function superSize(num){
  let numbers = String(num).split('')
  return Number(numbers.sort().reverse().join(''))
}