function longestWord(stringOfWords){
  return stringOfWords.split(' ').reduce((acc, word) => acc.length <= word.length ? word : acc, '')
}

//

function solution(fullText, searchText){
    let startingPosition = 0
    let count = 0
    
    while(startingPosition < fullText.length){
      if(fullText.includes(searchText, startingPosition)){
        count++
        startingPosition = fullText.indexOf(searchText, startingPosition) +1
      }else{
        return count
      }
    }
    return count
  }

  //another way is to count how many times the string was split minus one since it will cause an extra count becuase of spliting 
  function solution(fullText, searchText){
    return fullText.split(searchText).length - 1;
  }