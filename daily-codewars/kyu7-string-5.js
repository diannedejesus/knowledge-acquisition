//#1
var isAnagram = function(test, original) {
    let filtered = [...original.toLowerCase()]
    if(test.length !== original.length){return false}
    for(let i=0; i<test.length; i++){
      filtered[filtered.indexOf(test[i].toLowerCase())] = 0
    }
    console.log(filtered.filter(el => el != 0))
    return filtered.filter(el => el != 0).length === 0 ? true : false
};
//#2
function capitalize(s){
  let answer = ['','']
  
  for(let i=0; i<s.length; i++){
    if(i%2 === 0){   
      answer[0] += s[i].toUpperCase()
      answer[1] += s[i]
    }else{
      answer[0] += s[i]
      answer[1] += s[i].toUpperCase()
    }
  }
  return answer;
};

//#3

//#4

//#5