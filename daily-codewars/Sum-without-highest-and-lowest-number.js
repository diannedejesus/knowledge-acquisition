function sumArray(array) {
    return (array) ? (array.sort((a,b)=> a-b).reduce((accum, curr, i)=> {
       return (i===0 || i===array.length-1)? accum + 0 : accum + curr
     }, 0)) : 0
   }