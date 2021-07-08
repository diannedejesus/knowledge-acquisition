  //input an array of numbers that is not ordered
  //return will be a single interger
  //the input will need to be placed in descending order
  //I need to take the sorted numbers and subtract it will the number next to it
  //for the first that is going to be the number to the left 
  //and for the last number it will be the number to the right
  //then I will the results of both and add them together to get the answer
  //for example if I have the array of [1,2,10] => [10,2,1] => 10-2 & 2-1 => 8+1 =>9
  //which means when going thru the array I am taking the first number and substrating the second 
  //and then go to the second number and substract the third and so on. and storing those results
  //I can store them in an array the add them or start adding them as I go.
  function sumOfDifferences(arr) {
    return arr.sort((a, b) => b - a).reduce((acc, el, index, array) => {
       return index < array.length-1 ? acc + (el - array[index+1]) : acc
    },0) 
   }

   //2
   function divisibleBy(numbers, divisor){
    return numbers.filter(el => el % divisor === 0 )
   }