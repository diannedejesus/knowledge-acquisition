//create a function that will encode a given string
//the encode process will be based on duplicates and the
//symbols to be used are the opening and closing parenthesis ()

//the function will recieve a string value, this string will consist of any character including symbols.
//based on whether or not the character is repeated in the string it will return a string composed soley of open and close parenthesis
//repeated character will be represented by the open parenthesis and none repeated characters will be represented by the close parenthesis
//if it recieve the string "aaabaac" the output will be "((()(()"
//input = 'abbcad' output = '((()()'
//we need to account for the string containing parenthesis as one or more of its characters

//The simplest path considering a parenthesis can be in the string given as an input is to use a seperate variable to store the new string instead of replacing it unless we use something like regex

//first we convert the string to lowercase since we can ignore capitalizations and we do it first to avoid converting each letter muliple times

//the function can use a for loop or an itinerating method like map, filter, reduce, foreach

//when going through each character we can test with indexof and lastindexof to verify if the character is repeat in the given string

//if it is repeated then we add a ( to the result string and if not we add a ) to the result string.

function duplicateEncoder(str){
  let result = ''
  let lowerString = str.toLowerCase()

  for(let i=0; i<str.length; i++){
    if(lowerString.indexOf(lowerString[i]) === lowerString.lastIndexOf(lowerString[i])){
      result += '('
    }else{
      result += ')'
    }
  }
  return result
}
console.log('this')
console.log(duplicateEncoder("din") ===  "(((")
console.log(duplicateEncoder("recede" ) ===  "()()()")
console.log(duplicateEncoder("Success") ===  ")())())")
console.log(duplicateEncoder("(( @") ===  "))((")



////leetcode

//in this exersize we will check if an integer is a palindrone
//whether the number is the same backwards or forwards

//the function will recieve an integer to test
//and it wil return a boolean value

//if 123 then false
//if 121 then true

//the simplest solution would be to convert the number into an string so we can use some methods on it

//convert the given int to a string with the tostring method 
//then split the string into characters and use the reverse method on the array followed by the join method which will give us the backwards version of the number 
//compare the backwards version to the forward version and if they are the same we return true, if not we return false.

function isPalidrone(intNum){
  let stringInt = intNum.toString()

  if(stringInt.split('').reverse().join('') === stringInt){
    return true
  }else{
    return false
  }
}

// console.log(isPalidrone(121) === true)
// console.log(isPalidrone(-121) === false)
// console.log(isPalidrone(10) === false)
// console.log(isPalidrone(-101) === false)

//alterantely if we needed to work in pure numbers it should test for negative numbers which will always be false
//then we could reconstruct the number in reverse order by dividing the number by 10 ^ of number length which will return the first number we can add that number that to a new string by multiply it by it by its place i++

function isPalidrone2(intNum){
  let reversedNumber = 0
  let tempNum = intNum
  const len = Math.ceil(Math.log10(intNum + 1));

  if(intNum < 0){ return false}

  for(let i=1; i<=len; i++){
    let currentNum = ~~(tempNum / (10**(len-i)))
    reversedNumber += currentNum * (i>1?10**(i-1): i)
    tempNum -= currentNum * (10**(len-i))
  }
  return intNum === reversedNumber ? true : false
}

console.log(isPalidrone2(121) === true)
console.log(isPalidrone2(-121) === false)
console.log(isPalidrone2(10) === false)
console.log(isPalidrone2(-101) === false)