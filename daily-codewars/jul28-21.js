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