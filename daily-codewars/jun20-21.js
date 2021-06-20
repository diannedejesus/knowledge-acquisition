function containAllRots(strng, arr) {
  const test = strng + strng
  const testRots = []
  
  for(let i=0; i<strng.length; i++){
    testRots.push(test.substring(i,strng.length + i))
  }
  
  return testRots.every(el => arr.includes(el))
}