//convert roman numerals to integers
//the roman numerals that will be used are the following ('I', 'V', 'X', 'L', 'C', 'D', 'M') so theses will be the only characters recieved in the string

//will the function have to account for empty values?
//will the function have to account for any other value or data type? In this case it will always be a valid roman numerals with the characters specified on top

//the function will return an integer that is equivalent to the recieved roman numerals

//IV => 4
//XX => 20

//when calculating roman numerals we add them from left to right but when a lesser value is infront of a greater value a subtration needs to be made. This is in order to get the values not represented by the letters

//the letters equal ('I'=1, 'V'=5, 'X'=10, 'L'=50, 'C'=100, 'D'=500, 'M'=1000)
//so if we have the roman numaral = MCDLXXIV the we will need to process it as follows:
//M is the largest so we know to add it
//1000 + 
//next is C = 100 lets check the next letter D = 500 since it is bigger we need to subtract those two numbers add add the result
//1000 + (500 - 100)
//now we move to L=50 and check the next letter X=10 since it is smaller just add
//1000 + (500 - 100) + 50 +
//now we move to X=10 and check the next letter X=10 since it is equal we just add
//1000 + (500 - 100) + 50 + 10 +
//now we move to X=10 and check the next letter I=1 since it is smaller we just add
//1000 + (500 - 100) + 50 + 10 + 10
//now we move to I=1 and check the next letter V=5 since it is bigger we need to subtract those two numbers add add the result
//1000 + (500 - 100) + 50 + 10 + 10 + (5 - 1)
//result = 1474
//subtraction occurs when we need one less other numbers are gained by adding I believe

//we need to handle the subtration which will cause the removel of two numbers in this calulation. Which will depend on the method we use for the itineration.

//I would declare an object which the roman numerals and there values for easy lookup

//we could use a for loop to add the values but the reduce method might be more practical since we want one final value for a set of values.

//then we can set a variable for the subtracted value. The variable will be set when the next value is bigger then we can subtract that value to the current value resetting it to 0 after each turn if the next value is not bigger.

//so reduce will subtract the subtracted variable to the current value and then add the result to the accumalator if the next one is not bigger, if it is bigger it will set it to the subraction value or set the subtract value to 0

function convertRomanNumeral(str){
  const intValues = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
  let subtraction = 0

  return str.split('').reduce((accumulator, numeral, index, array) => {
    if(intValues[numeral] < intValues[array[index+1]]){
      subtraction = intValues[numeral]
    }else{
      accumulator += (intValues[numeral] - subtraction)
      subtraction = 0
    }
    return accumulator
  }, 0)
}

console.log(convertRomanNumeral('IV') === 4)
console.log(convertRomanNumeral('XX') === 20)
console.log(convertRomanNumeral('MCDLXXIV') === 1474)


console.log(convertRomanNumeral('LVIII') === 58)
console.log(convertRomanNumeral('MCMXCIV') === 1994)