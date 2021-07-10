function all( arr, fun ){
  return arr.every(el => fun(el))
}

//2
function first(arr, n) {
    n = n || n === 0 ? n : 1
    return arr.filter((el, i) => { if(i<n) return el})
  }