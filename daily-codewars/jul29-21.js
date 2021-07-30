//convert a string into camel case or pascal case, the string will be delimited by either a dash or an underscore. 
//No other delimiter will be considered
//strings that already have the first letter capitalized will be pascal case all others will be camel case.
//we will not account for numbers at beginnning of the word or any other place for this exercise
//the delimiters will never be mixed in these examples

//the_magical_castle => theMagicalCastle
//Queen-ruby-the-great => QueenRubyTheGreat

//first we will verify if the value is empty to return an empty str
//the function will verify which delimiter is used with includes
//then divide the string by that delimiter with split to obtain an array of the words which will be stored in a new variable
//then we will itinerate through the words with a for loop
// for only the first word we will use the first letter as is and convert the rest to lowercase. 
//so for index 0 we will equal the new string to equal the first letter (char index 0) concatenated with the rest of the string converted to lowercase. 
//we select the rest of the string with substring (we could also use slice)
//then for all other indexes we will convert index 0 to uppercase and concatenate it with the rest of the string with substring after converting it to lowercase.
//when the for is done we will join the array with no spaces for the returned value

//alternatively I would do the exception out of the loop since it is the first case always and start the loop at the second case, also instead of and if statement a ternary operator would be clearer in this case.

function convertCase(str){
   if(str === '') return ''
   
  let wordArray = str.includes('-') ? str.split('-') : str.split('_')

  wordArray[0] = wordArray[0][0] + wordArray[0].substring(1).toLowerCase()

  for(let i=1; i<wordArray.length; i++){
      wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].substring(1).toLowerCase()
  }
  return wordArray.join('')
}

console.log(convertCase("tHe-stealth-warrior") === "theStealthWarrior")
console.log(convertCase("The_Stealth_Warrior") === "TheStealthWarrior")
console.log(convertCase("the_magical_castle") === "theMagicalCastle")
console.log(convertCase("Queen-ruby-the-great") === "QueenRubyTheGreat")