function twoSort(s) {
    let sortedArray = s
    sortedArray.sort()
    return sortedArray[0].split('').join('***');
}

//****PREP****//
//Parameter//
//array of strings only
//Return//
//first string of sorted array where each letter is seperated by three *
//Examples//
//if bitcoin is the first in alphabetical order then return b***i***t***c***o***i***n
//Pseudo code//
//sort array by ascii value then grab first element and insert *** inbetween each letter
//sort: sort by first letter only converting first letter to ascii
//then verify how many elements have the same first letter as the first element
//if more than 1 than sort by second letter
//repeat check of repeat letters until first is found
//then split string and join with ***


console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
