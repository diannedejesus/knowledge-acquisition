function getCount(str) {
  var vowelsCount = 0;
  const vowels = ['a','e','i','o','u']
  str.split('').forEach(el => {
    if(vowels.includes(el)){
      vowelsCount++
    }
  })
  return vowelsCount;
}