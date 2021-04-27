function alphabetPosition(string){
    let alphaPosition = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let wordsArray = string.toLowerCase().split(' ')
    let positions = []
    
    for(let i=0; i<wordsArray.length; i++){
        wordsArray[i].split('').forEach(el => {
            console.log(alphaPosition.indexOf(el))
            if(alphaPosition.indexOf(el)>=0){
                positions.push(alphaPosition.indexOf(el)+1)
            }
        })
    }
    return positions
}




console.log(alphabetPosition("The sunset sets at twelve o' clock."))
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"