function howMuchILoveYou(nbPetals) {
    const phrase = ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly']
    
    return phrase[(nbPetals % 6)]
}
