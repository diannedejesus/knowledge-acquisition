String.prototype.repeat = function(count) {
  let repeated = ''
  
  for(let i=0; i<count; i++){
    repeated += this
  }
  return repeated
};


//

function sortMyString(S) {
    let newString = [...S].filter((el, index) => !(index % 2)).join('') + ' '
    newString += [...S].filter((el, index) => index % 2).join('')
    return newString;
}

function sortMyString(s) { 
    return [...s].reduce(function(a, c, i) {
      a[i&1] += c;
      return a;
    }, ['','']).join(' ');
  }//this one uses reduce to sort through the string, it initializes and array as the 
  //default value of the reduce and store the even odd result as a string in one of the 
  //two array spaces/indexes the joins the two arrays with a space.