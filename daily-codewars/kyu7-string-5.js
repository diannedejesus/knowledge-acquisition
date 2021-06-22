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
var greet = function(name) {
  let casedName = name[0].toUpperCase() + name.substring(1, name.length).toLowerCase()
  return `Hello ${casedName}!`
};

//#4
function shorter_reverse_longer(a,b){
  if(a.length < b.length){
    return a + [...b].reverse().join('') + a
  }else{
    
    return b + [...a].reverse().join('') + b
  }
  return ""
}

//#5
function triangle(row) {

  if(row.length > 1){
    return check(row.split(''))
  }else{
    return row
  }
  
}

function check(newString){
  const combos = {'BG':'R', 'RG':'B', 'BR':'G','GB':'R', 'GR':'B', 'RB':'G' }
  let nextString = ''
  
  for(let i=0; i<newString.length-1; i++){
    if(newString[i] === newString[i+1]){
      nextString += newString[i]
    }else{
      nextString += combos[newString[i] + newString[i+1]]
    }
  }
  
  if(nextString.length > 1){
    return check(nextString.split(''))
  }else{
    return nextString
  }
}