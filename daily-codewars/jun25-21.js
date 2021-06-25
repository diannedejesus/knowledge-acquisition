function solve(a,b){
let uniques = ''

 for(let i=0; i<a.length; i++){
   if(b.indexOf(a[i]) === -1){
     uniques += a[i]
   }
 }
  
for(let i=0; i<b.length; i++){
   if(a.indexOf(b[i]) === -1){
     uniques += b[i]
   }
 }
  
  return uniques
};