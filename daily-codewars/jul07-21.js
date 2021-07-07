function howMuchILoveYou(nbPetals) {
    const phrase = ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly']
    
    return phrase[(nbPetals % 6)]
}

//2
function differenceInAges(ages){
    return [Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)]
  }

  //3
  function printArray(array){
    return array.join();
  }