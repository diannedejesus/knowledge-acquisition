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
function correctPolishLetters (string) {
    let legend = {'ą': 'a', 'ć': 'c', 'ę':  'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z'}
    return [...string].map(el => legend[el] ? legend[el] : el).join('')
}

//#4
function whoIsPaying(name){
    return name.length >= 3 ? [name, name.substring(0,2)] : [name]
}

//#5
function isLockNessMonster(s) {
    return s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')
}