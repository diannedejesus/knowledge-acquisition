function solve(arr) {  
  return arr.map(x => [...x.toLowerCase()].reduce((s,v,i) => s + (v.charCodeAt() == i + 97), 0))
}

//it creates a map to the array of words which will contain the result of the anonymous function
//the function takes each word and spreads the letter to form an array of lowercase letters
//then it uses reduce to compre each letter
//reduce takes the accumalator value (which we declare to starts at 0) and add it to the result of the evaluation
// the evaluation checks to see if the current letter code is equal to the index plus 97 (which will give the place of the letter in the alphabet see below)
//if false it will equal 0 if true it will equal 1

//the char code for 'a' is 97 and all other lowercase letter follow in order so index + 97 = place in alphabet