function expressionMatter(a, b, c) {
    let result = []
  
  result.push(a+b+c)
  result.push(a*b*c)
  result.push(a*b+c)
  result.push(a+b*c)
  result.push(a*(b+c))
  result.push((a+b)*c)

  
  return Math.max(...result)
}