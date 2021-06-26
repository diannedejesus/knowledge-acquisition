function solve(s){
  let longestGrouping = 0
  let cursor = -1
  
  for(let i=0; i<=s.length; i++){
    if(Number(s[i]) || Number(s[i]) === 0){
      if(cursor === -1){
        cursor = i
      }
    }
    else{
      if(Number(s.substring(cursor, i)) > longestGrouping){
        longestGrouping = Number(s.substring(cursor, i))
      }
      cursor = -1
    }
  }
  
  return longestGrouping
};