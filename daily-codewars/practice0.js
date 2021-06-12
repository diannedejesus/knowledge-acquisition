function solve(arr){  
  let answer = []
  
  for(words in arr){
    answer[words] = 0
    for(let i=0; i<arr[words].length; i++){
      if(arr[words][i].toLowerCase().charCodeAt(0) - 97 === i){
        answer[words]++
      }
    }
  }
  return answer
};