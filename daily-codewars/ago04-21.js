//find the longest prefix in a collection of strings, all items must have the same prefix if not the return an empty string
//the collection will be an array of strings
//return the prefix as a string

//['glad', 'glamour', 'glimmer'] => 'gl'
//['flower', 'kean'] => ''

//if we use the first world as a base we can store it in an array and compare it the the rest

//to compare we will loop through the rest of the array of values

//for each value we will verify in order if they share letters based on the length of the basearray

//once we find a an index where the don't share letters we will cut the base array to the value before the unshared letter.

//we will continue to verify if the next value shares letter until the we haveno more values or an empty base.

//also we need to handle the case where the value is less then the base and adjust base accordingly

//arr = ["ab","a"]
//arr = ["cir","car"]

arr = ['flower', 'kean']

let baseWord = []

for(let i=0; i<arr[0].length; i++){
  baseWord.push(arr[0][i])
}

for(let i=1; i<arr.length; i++){
  if(arr[i].length < baseWord.length){
    baseWord = baseWord.slice(0, arr[i].length)
  }
  for(let x=0; x<baseWord.length; x++){
    if(x < arr[i].length && baseWord[x] !== arr[i][x]){
      baseWord = baseWord.slice(0, x)
    }
  }
}

console.log(baseWord.join(''))