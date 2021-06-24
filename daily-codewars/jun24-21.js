function solve(s){
 let longChain = 0
 const vowels = ['a', 'e', 'i', 'o', 'u']
 let marker = 0
 
 for(let i=0; i<s.length; i++){
   if(vowels.includes(s[i])){
     marker++
   }else{
     marker = 0
   }
   
   if(marker > longChain){
     longChain = marker
   }
 }
  
  return longChain;
}