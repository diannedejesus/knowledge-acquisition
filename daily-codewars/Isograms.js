function isIsogram(str){
    str = str.toUpperCase()
  for(let i=0; i<str.length; i++){
      if(str.slice(i+1, str.length).indexOf(str[i]) >= 0){
        console.log(str.slice(i+1, str.length), (str[i]))
        return false
          
      }
  }

  return true
}

console.log( isIsogram("Dermatoglyphics"), true );
console.log( isIsogram("aba"), false);
console.log( isIsogram("isogram"), true );
console.log( isIsogram("moOse"), false);
console.log( isIsogram("isIsogram"), false );
console.log( isIsogram(""), true);