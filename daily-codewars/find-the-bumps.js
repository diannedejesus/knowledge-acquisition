function bump(x){
   return [...x].filter(el => el === 'n').length <= 15 ? 'Woohoo!' : 'Car Dead'
}