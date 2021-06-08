//#1
function contamination(text, char){
    return char.repeat(text.length)
}

//#2
function charFreq(message) {
    let frecuency = {}
    message.split('').forEach(el => frecuency[el] ? frecuency[el]++ : frecuency[el] = 1)
    return frecuency
}

//#3

//#4


//#5