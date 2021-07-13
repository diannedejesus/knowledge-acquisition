function noOdds( values ){
  return values.filter(el => el%2 === 0)
}

//2
function twoOldestAges(ages){
    return ages.sort((a,b) => a-b).slice(ages.length-2)
}