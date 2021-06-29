function countLettersAndDigits(input) {
   return [...input.toUpperCase()].filter(el => Number(el) || el === '0' || (el.charCodeAt(0) > 64 && el.charCodeAt(0) < 91)).length
}