var reverse = function(x) {
    let stringToNum = parseInt(x.toString().split('').reverse().join(''))
    
    if(stringToNum > 0x7FFFFFFF){
      return 0;
    }
    
    return x<0 ? -stringToNum : stringToNum
};