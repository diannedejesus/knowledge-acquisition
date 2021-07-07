function howMuchILoveYou(nbPetals) {
    const phrase = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    if(nbPetals > 6){
      return phrase[(nbPetals % 6)-1]
    }else{
      return phrase[nbPetals-1]
    }
}
